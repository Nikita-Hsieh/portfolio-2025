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
			className="h-[80vh] sticky top-[75px] flex items-center justify-center"
		>
			<div
				className="relative w-full max-w-[1000px] rounded-[25px] p-6 sm:p-10 flex flex-col bg-white dark:bg-slate-800 shadow-md border dark:border-white/10 transition overflow-hidden
		min-h-[700px] lg:min-h-[500px]"
			>
				<h2 className="text-center text-[24px] text-zinc-900 dark:text-white font-bold whitespace-nowrap min-h-[32px]">
					{title}
				</h2>

				<div className="flex flex-col lg:flex-row items-stretch h-full mt-10 gap-6 lg:gap-12">
					<div className="w-full lg:w-2/5 flex flex-col justify-between text-gray-700 dark:text-white/90 text-md leading-relaxed">
						<p className="whitespace-pre-line mb-4 line-clamp-6 sm:line-clamp-none min-h-[96px] min-w-[200px]">
							{description.split('\n')[0]}
						</p>
						{/* Tags */}
						<div className="flex flex-wrap gap-2 text-sm text-zinc-700 dark:text-white/70">
							{tags.map((tag, idx) => (
								<span
									key={idx}
									className="px-3 py-1 bg-zinc-100 dark:bg-white/10 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>

						<div className="mt-6 flex gap-3 sm:gap-4">
							<a
								href={demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-[110px] sm:w-[120px] flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-zinc-800 text-white text-sm font-medium 
		hover:bg-zinc-700 transition whitespace-nowrap dark:bg-slate-200 dark:text-gray-800 dark:hover:bg-white"
							>
								<FaExternalLinkAlt className="text-base" />
								{language === 'zh' ? '前往網站' : 'Live Site'}
							</a>

							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-[100px] sm:w-[110px] flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-sm font-semibold transition
		bg-black/5 text-black border-black/30 hover:bg-black/10
		dark:bg-white/5 dark:text-white/90 dark:border-white/30 dark:hover:bg-white/10
		backdrop-blur-md whitespace-nowrap"
							>
								<FaGithub className="text-base" />
								GitHub
							</a>
						</div>
					</div>

					<div className="w-full lg:w-3/5">
						<div className="relative rounded-[10px] overflow-hidden group aspect-[16/9]">
							<Image
								src={imageUrl}
								alt={title}
								fill
								quality={95}
								priority
								className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
