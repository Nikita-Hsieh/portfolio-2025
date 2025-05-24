'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '@/context/theme-context'
import { useLanguage } from '@/context/language-context'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'
import { navLinkDefs } from '@/lib/navLinks'

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()
	const { theme, toggleTheme } = useTheme()
	const [menuOpen, setMenuOpen] = useState(false)

	const { language, toggleLanguage } = useLanguage()
	const messages = { en: enMessages, zh: zhMessages }
	const { nav } = messages[language]

	const localizedLinks = navLinkDefs.map(({ id, key, hash }) => ({
		id,
		hash,
		name: nav[key as keyof typeof nav],
	}))

	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-4 left-1/2 -translate-x-1/2 h-[3.25rem] w-[90%] max-w-[1200px] 
				rounded-full border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] 
				backdrop-blur-[0.5rem] dark:bg-gray-900 dark:border-none dark:bg-opacity-75"
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			/>

			<nav className="fixed top-4 left-1/2 -translate-x-1/2 h-[3.25rem] w-[90%] max-w-[1200px] flex items-center justify-between px-4">
				<Link
					href="#home"
					onClick={() => {
						setActiveSection('Home')
						setTimeOfLastClick(Date.now())
					}}
					className="text-gray-800 font-semibold text-sm sm:text-base hover:text-gray-950 transition dark:text-gray-200 dark:hover:text-gray-300"
				>
					N.H.
				</Link>

				{/* Menu */}
				<ul className="hidden md:flex flex-wrap items-center justify-center gap-1 text-[0.9rem] font-medium text-gray-500 md:gap-5">
					{localizedLinks.map((link) => (
						<motion.li
							key={link.hash}
							className="h-3/4 w-[96px] relative flex items-center justify-center"
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href={link.hash}
								onClick={() => {
									setActiveSection(link.id)
									setTimeOfLastClick(Date.now())
								}}
								className={clsx(
									'flex justify-center items-center w-full px-3 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
									{
										'text-gray-950 dark:text-gray-100':
											activeSection === link.id,
									}
								)}
							>
								{link.name}
								{activeSection === link.id && (
									<motion.span
										className="absolute inset-0 z-[-1] rounded-full bg-gray-200/70 dark:bg-gray-700/40"
										layoutId="activeSection"
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
							</Link>
						</motion.li>
					))}
				</ul>

				<div className="flex items-center gap-3 text-xl text-gray-600">
					<button
						aria-label="Toggle Language"
						onClick={toggleLanguage}
						className="w-8 text-center hover:text-gray-950 transition dark:hover:text-white"
					>
						{language === 'en' ? 'EN' : '中'}
					</button>

					<button
						aria-label="Toggle Theme"
						onClick={toggleTheme}
						className="text-md font-medium px-4 py-2 flex items-center gap-2 rounded-full outline-none 
						transform transition focus:scale-110 hover:scale-110 active:scale-105 
						dark:hover:text-white dark:active:text-white"
					>
						{theme === 'light' ? <BsSun /> : <BsMoon />}
					</button>

					<button
						className="md:hidden hover:text-gray-950 dark:hover:text-white"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Open Menu"
					>
						{menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
					</button>
				</div>
			</nav>

			{/* Popup Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[998]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setMenuOpen(false)}
					>
						<motion.ul
							className="w-[75%] max-w-[1200px] px-4 py-8 
							bg-white/90 dark:bg-gray-800/95 
							rounded-xl flex flex-col items-center gap-6 
							text-lg font-semibold text-gray-700 dark:text-gray-200 shadow-lg"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							{localizedLinks.map((link) => (
								<motion.li
									key={link.hash}
									className="relative w-full text-center"
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
								>
									<Link
										href={link.hash}
										onClick={() => {
											setActiveSection(link.id)
											setTimeOfLastClick(Date.now())
											setMenuOpen(false)
										}}
										className={clsx(
											'px-4 py-2 relative z-10 transition hover:text-gray-950 dark:hover:text-white',
											{
												'text-gray-950 dark:text-white':
													activeSection === link.id,
											}
										)}
									>
										{link.name}
										{activeSection === link.id && (
											<motion.span
												className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700 font-medium"
												layoutId="activeSection"
												transition={{
													type: 'spring',
													stiffness: 380,
													damping: 30,
												}}
											/>
										)}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
