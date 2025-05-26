'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '@/context/language-context'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'
import type { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
	id,
	tags,
	imageUrl,
	demoUrl,
	githubUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

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
			ref={ref}
			style={{ scale, opacity }}
			className="group mb-6 sm:mb-10 last:mb-0"
		>
			<div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition hover:shadow-md">
				<div className="flex-1">
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
						{title}
					</h3>
					<ul className="text-gray-700 dark:text-white/90 text-sm space-y-1 mb-4 leading-relaxed list-disc list-inside">
						{description.split('\n').map((line, index) => (
							<li key={index}>{line}</li>
						))}
					</ul>

					<div className="flex flex-wrap gap-2 mb-4">
						{tags.map((tag, index) => (
							<span
								key={index}
								className="px-3 py-1 rounded-full bg-gray-200 dark:bg-zinc-700 text-xs font-medium text-gray-800 dark:text-white"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex gap-4 mt-2">
						<a
							href={demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition cursor-pointer"
						>
							<FaExternalLinkAlt className="text-base" />
							Live Site
						</a>

						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-semibold transition cursor-pointer
		bg-black/5 text-black border-black/30 hover:bg-black/10
		dark:bg-white/5 dark:text-white/90 dark:border-white/30 dark:hover:bg-white/10 backdrop-blur-md"
						>
							<FaGithub className="text-base" />
							GitHub
						</a>
					</div>
				</div>

				<div className="w-full sm:w-[300px]">
					<Image
						src={imageUrl}
						alt={title}
						quality={95}
						className="w-full rounded-xl shadow-md transition group-hover:scale-[1.02]"
					/>
				</div>
			</div>
		</motion.div>
	)
}
