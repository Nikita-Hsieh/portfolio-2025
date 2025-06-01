'use client'

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'
import { useLanguage } from '@/context/language-context'
import en from '@/messages/en.json'
import zh from '@/messages/zh.json'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

function SectionDetail({
	section,
}: {
	section: { title: string; items: string[] }
}) {
	const [hovered, setHovered] = useState(false)
	const [clicked, setClicked] = useState(false)
	const shouldShow = hovered || clicked

	return (
		<div
			className="group border-gray-300 dark:border-white/20 pl-4 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-white/10"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<button
				type="button"
				onClick={() => setClicked((prev) => !prev)}
				className="w-full text-sm font-semibold text-left text-gray-800 dark:text-white focus:outline-none flex items-center justify-between"
			>
				<span>{section.title}</span>
				<span className="ml-2 text-gray-400 text-base transition-transform duration-300">
					{shouldShow ? <FiChevronUp /> : <FiChevronDown />}
				</span>
			</button>

			<AnimatePresence initial={false}>
				{shouldShow && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25 }}
					>
						<ul className="list-disc list-inside text-sm text-gray-600 dark:text-white/70 mt-2 space-y-1">
							{section.items.map((line, i) => (
								<li key={i}>{line}</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default function Experience() {
	const { ref } = useSectionInView('Experience', 0.3)
	const { theme } = useTheme()
	const { language } = useLanguage()

	const messages = { en, zh }
	const expMessages = messages[language].experience

	return (
		<section
			ref={ref}
			id="experience"
			className="scroll-mt-[120px] mb-28 sm:mb-40 px-4 max-w-4xl mx-auto text-left"
		>
			<SectionHeading>{messages[language].nav.experience}</SectionHeading>

			{/* Work */}
			<span className="inline-block border border-blue-300 bg-blue-50 dark:border-blue-400/30 dark:bg-blue-500/10 text-blue-700 dark:text-blue-100 text-sm font-normal px-4 py-1 rounded-full mt-10 mb-4">
				{messages[language].experience.work}
			</span>

			<div className="flex flex-col gap-6 md:grid-cols-2">
				{experiencesData
					.filter((item) => item.type === 'work')
					.reverse()
					.map((item, index) => {
						const exp = expMessages[item.id]
						return (
							<motion.div
								key={`work-${index}`}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, amount: 0.3 }}
								className="relative rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm transition-colors"
							>
								<span className="absolute top-4 right-6 text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/10 rounded-full py-1 px-2 text-xs">
									{item.date}
								</span>

								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{exp.title}
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
									{exp.location}
								</p>

								{exp.intro && (
									<p className="text-sm mt-2 text-gray-700 dark:text-white/70 leading-relaxed">
										{exp.intro}
									</p>
								)}

								{Array.isArray(exp.details) && exp.details.length > 0 && (
									<div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-5 py-4 mt-4">
										<ul className="list-disc list-outside pl-5 text-sm text-gray-800 dark:text-white/80 leading-relaxed space-y-2">
											{exp.details.map((item: string, i: number) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</div>
								)}
							</motion.div>
						)
					})}
			</div>

			{/* Education */}
			<span className="inline-block border border-green-300 bg-green-50 dark:border-green-400/30 dark:bg-green-500/10 text-green-700 dark:text-green-100 text-sm font-normal px-4 py-1 rounded-full mt-16 mb-4">
				{messages[language].experience.education}
			</span>

			<VerticalTimeline lineColor="">
				{experiencesData
					.filter((item) => item.type === 'education')
					.map((item, index) => {
						const exp = expMessages[item.id]
						return (
							<VerticalTimelineElement
								key={`edu-${index}`}
								date={item.date}
								icon={item.icon}
								contentStyle={{
									background:
										theme === 'light' ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
									boxShadow: 'none',
									border:
										theme === 'light'
											? '1px solid #e5e7eb'
											: '1px solid rgba(255, 255, 255, 0.1)',
									textAlign: 'left',
									padding: '1.3rem 2rem',
									maxWidth: '900px',
								}}
								contentArrowStyle={{
									borderRight:
										theme === 'light'
											? '0.4rem solid #d1d5db'
											: '0.4rem solid rgba(255, 255, 255, 0.3)',
								}}
								iconStyle={{
									background:
										theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.15)',
									fontSize: '1.5rem',
								}}
							>
								<h3 className="font-semibold capitalize text-gray-900 dark:text-white">
									{exp.title}
								</h3>
								<p className="font-normal !mt-0 text-gray-500 dark:text-gray-400">
									{exp.location}
								</p>
								<p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
									{exp.description}
								</p>

								{'details' in exp &&
									Array.isArray(exp.details) &&
									exp.details.length > 0 && (
										<div className="mt-6 space-y-6 px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
											{exp.details.map((section, i) => (
												<SectionDetail key={i} section={section} />
											))}
										</div>
									)}
							</VerticalTimelineElement>
						)
					})}
			</VerticalTimeline>
		</section>
	)
}
