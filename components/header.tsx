'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'
import { RiEnglishInput } from 'react-icons/ri'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '@/context/theme-context'

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()

	const { theme, toggleTheme } = useTheme()

	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-[80%] max-w-[1200px] rounded-none 
	border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] 
	backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 "
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			/>

			<nav className="fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 w-[80%] max-w-[1200px] flex items-center justify-between px-4 sm:top-[1.7rem]">
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

				<ul
					className="flex flex-wrap items-center justify-center gap-1 text-[0.9rem] font-medium text-gray-500
					sm:text-nowrap sm:gap-5"
				>
					{links.map((link) => (
						<motion.li
							key={link.hash}
							className="h-3/4 flex items-center justify-center relative"
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name)
									setTimeOfLastClick(Date.now())
								}}
								className={clsx(
									'flex justify-center items-center w-full px-3 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
									{
										'text-gray-950 dark:text-gray-100':
											activeSection === link.name,
									}
								)}
							>
								{link.name}
								{link.name === activeSection && (
									<motion.span
										className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
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
				</ul>

				<div className="flex items-center gap-3 text-xl text-gray-600">
					<button
						aria-label="Toggle Language"
						className="hover:text-gray-950 transition"
					>
						<RiEnglishInput />
					</button>
					<button
						aria-label="Toggle Theme"
						onClick={toggleTheme}
						className="text-md font-medium px-7 py-3 flex items-center gap-2 rounded-full outline-none 
    transform transition focus:scale-110 hover:scale-120 active:scale-105 
    dark:hover:text-white dark:active:text-white"
					>
						{theme === 'light' ? <BsSun /> : <BsMoon />}
					</button>
				</div>
			</nav>
		</header>
	)
}
