'use client'

import { motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '@/context/language-context'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'
import type { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number] & {
	progress: any
	range: [number, number]
	targetScale: number
	index: number
}

export default function Project({
	id,
	tags,
	imageUrl,
	demoUrl,
	githubUrl,
	progress,
	range,
	targetScale,
	index,
}: ProjectProps) {
	const scale = useTransform(progress, range, [0.9, targetScale])
	const translateY = useTransform(progress, range, [40 * (index + 1), 0])
	const opacity = useTransform(progress, range, [0.99, 1])

	const { language } = useLanguage()
	const messages = { en: enMessages, zh: zhMessages }
	const { title, description } = (
		messages[language].projects as Record<
			string,
			{ title: string; description: string }
		>
	)[id]

	return (
		<motion.div
			style={{ scale, y: translateY, opacity }}
			transition={{ type: 'spring', stiffness: 100, damping: 20 }}
			className="h-[85vh] sticky top-[100px] flex items-center justify-center"
		>
			<div className="relative h-[500px] w-full max-w-[1000px] rounded-[25px] p-[50px] flex flex-col bg-white dark:bg-slate-800 shadow-md border dark:border-white/10 transition overflow-hidden">
				<h2 className="text-center text-[24px] text-zinc-900 dark:text-white font-bold whitespace-nowrap">
					{title}
				</h2>

				<div className="flex flex-col sm:flex-row h-full mt-[50px] gap-6 sm:gap-[50px] overflow-hidden">
					{/* Left: Description + Buttons */}
					<div className="w-full sm:w-2/5 flex flex-col justify-between text-gray-700 dark:text-white/90 text-md leading-relaxed">
						<p className="whitespace-pre-line mb-4 line-clamp-6 sm:line-clamp-none">
							{description.split('\n')[0]}
						</p>

						<div className="mt-6 flex gap-3 sm:gap-4">
							<a
								href={demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-zinc-800 text-white text-sm font-medium 
									hover:bg-zinc-700 transition min-w-[96px] whitespace-nowrap dark:bg-slate-200 dark:text-gray-800 dark:hover:bg-white"
							>
								<FaExternalLinkAlt className="text-base" />
								{language === 'zh' ? '前往網站' : 'Live Site'}
							</a>

							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-sm font-semibold transition
									bg-black/5 text-black border-black/30 hover:bg-black/10
									dark:bg-white/5 dark:text-white/90 dark:border-white/30 dark:hover:bg-white/10
									backdrop-blur-md min-w-[88px] whitespace-nowrap"
							>
								<FaGithub className="text-base" />
								GitHub
							</a>
						</div>
					</div>

					{/* Right: Image with hover effect */}
					<div className="relative w-full sm:w-3/5 h-[250px] sm:h-full rounded-[25px] overflow-hidden group">
						<Image
							src={imageUrl}
							alt={title}
							quality={95}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
						/>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
