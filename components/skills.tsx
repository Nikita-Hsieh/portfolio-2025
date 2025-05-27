'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsGrouped } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInGroup = (index: number) => ({
	initial: { opacity: 0, y: 60 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * index,
			duration: 0.5,
			ease: 'easeOut',
		},
	},
})

export default function Skills() {
	const { ref } = useSectionInView('Skills')

	return (
		<section
			ref={ref}
			id="skills"
			className="relative mb-28 max-w-4xl scroll-mt-28 text-left sm:mb-40 px-4"
		>
			<SectionHeading>Skills</SectionHeading>

			<div className="mt-10 grid grid-cols-1 sm:grid-cols-[minmax(auto,_max-content)_1fr] gap-y-6 gap-x-8 text-sm sm:text-base transition-all duration-300">
				{skillsGrouped.map(({ category, items }, groupIndex) => (
					<React.Fragment key={category}>
						<motion.h3
							className="font-semibold text-gray-800 dark:text-white/80 whitespace-nowrap"
							variants={fadeInGroup(groupIndex)}
							initial="initial"
							whileInView="whileInView"
							viewport={{ once: true }}
						>
							{category}
						</motion.h3>
						<motion.ul
							className="flex flex-wrap gap-2"
							variants={fadeInGroup(groupIndex)}
							initial="initial"
							whileInView="whileInView"
							viewport={{ once: true }}
						>
							{items.map((skill) => (
								<li
									key={skill}
									className="rounded-lg bg-white border border-black/10 px-3 py-1.5 text-gray-700 dark:bg-white/10 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20 transition"
								>
									{skill}
								</li>
							))}
						</motion.ul>
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
