'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BsArrowDown, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useLanguage } from '@/context/language-context'
import { useSectionInView } from '@/lib/hooks'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'
import Portrait from '@/public/portrait_2.jpg'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.25)
	const { language } = useLanguage()
	const messages = { en: enMessages, zh: zhMessages }
	const { title, subtitle } = messages[language].intro

	const words =
		language === 'en'
			? ['Frontend Developer', 'UX/UI Designer']
			: ['前端工程師', 'UX/UI 設計師']

	const [currentWordIndex, setCurrentWordIndex] = useState(0)
	const [displayedText, setDisplayedText] = useState('')
	const [charIndex, setCharIndex] = useState(0)

	useEffect(() => {
		const currentWord = words[currentWordIndex]
		if (charIndex < currentWord.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + currentWord[charIndex])
				setCharIndex((prev) => prev + 1)
			}, 100)
			return () => clearTimeout(timeout)
		} else {
			const timeout = setTimeout(() => {
				setDisplayedText('')
				setCharIndex(0)
				setCurrentWordIndex((prev) => (prev + 1) % words.length)
			}, 1800)
			return () => clearTimeout(timeout)
		}
	}, [charIndex, currentWordIndex, words])

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			{/* Portrait */}
			<div className="flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'tween', duration: 0.2 }}
				>
					<Image
						src={Portrait}
						width={192}
						height={192}
						quality={95}
						alt="portrait"
						priority
						className="h-24 w-24 rounded-full border-[0.25rem] object-cover border-white/55 shadow-sm"
					/>
				</motion.div>
			</div>

			{/* Text */}
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-semibold">{title}</span>
				<br />
				<span className="font-normal">
					{subtitle}{' '}
					<span className="inline-block">
						{displayedText}
						<span className="animate-pulse">|</span>
					</span>
				</span>
			</motion.h1>

			{/* Buttons */}
			<motion.div
				className="flex flex-wrap justify-center items-center gap-4 px-4 text-lg font-normal"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				{/* Buttons Row */}
				<div className="flex flex-wrap justify-center items-center gap-4">
					<Link
						href="#projects"
						className="group text-sm font-medium bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
				focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					>
						{messages[language].intro.viewProjects}
						<BsArrowDown className="opacity-70 group-hover:translate-y-1 transition" />
					</Link>

					<a
						href={
							language === 'zh' ? '/resume_2025_zh.pdf' : '/resume_2025_en.pdf'
						}
						download
						className="group text-sm font-medium bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
	focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
					>
						{language === 'zh' ? '下載履歷' : 'Download CV'}
						<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
					</a>
				</div>

				{/* Icons Row */}
				<div className="flex gap-4">
					<a
						href="https://www.linkedin.com/in/chia-jung-nikita-hsieh-07b868187/"
						target="_blank"
						className="bg-white p-4 py-3 text-gray-700 flex items-center gap-2 rounded-full outline-none 
				focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
					>
						<BsLinkedin />
					</a>

					<a
						href="https://github.com/Nikita-Hsieh"
						target="_blank"
						className="bg-white p-4 py-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none 
				focus:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10 
				dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
					>
						<FaGithubSquare />
					</a>
				</div>
			</motion.div>
		</section>
	)
}
