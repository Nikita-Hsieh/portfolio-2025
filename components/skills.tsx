'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { delay, motion } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
}

export default function Skills() {
	const { ref } = useSectionInView('Skills')

	return (
		<section
			ref={ref}
			id="skills"
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
		>
			<SectionHeading>Tech Stack</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-base text-gray-600">
				{skillsData.map((skill, index) => (
					<motion.li
						key={index}
						className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	)
}
