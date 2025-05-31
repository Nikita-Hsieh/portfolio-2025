'use client'

import React from 'react'
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
			className="scroll-mt-[120px] mb-28 sm:mb-40"
		>
			<SectionHeading>{messages[language].nav.experience}</SectionHeading>

			{/* Work */}
			<h3 className="text-xl font-bold mt-10 mb-4">Working Experience</h3>
			<div className="flex flex-col gap-6 md:grid-cols-2">
				{experiencesData
					.filter((item) => item.type === 'work')
					.reverse()
					.map((item, index) => {
						const exp = expMessages[item.id]
						return (
							<div
								key={`work-${index}`}
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
								<p className="text-sm mt-2 text-gray-700 dark:text-white/70 leading-relaxed">
									{exp.description}
								</p>
							</div>
						)
					})}
			</div>

			{/* Education */}
			<h3 className="text-xl font-bold mt-16 mb-4">Education Journey</h3>
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
										<div className="mt-4 border-l-2 border-gray-300 dark:border-white/20 pl-4 space-y-4">
											{(
												exp.details as { title: string; items: string[] }[]
											).map((section, i) => (
												<div key={i}>
													<p className="text-sm font-semibold text-gray-800 dark:text-white">
														{section.title}
													</p>
													<ul className="list-disc list-inside text-sm text-gray-600 dark:text-white/70 mt-1 space-y-1">
														{section.items.map((line, j) => (
															<li key={j}>{line}</li>
														))}
													</ul>
												</div>
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
