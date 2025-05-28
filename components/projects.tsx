'use client'

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useScroll } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import en from '@/messages/en.json'
import zh from '@/messages/zh.json'

export default function Projects() {
	const sectionRef = useSectionInView('Projects', 0.5).ref
	const { language } = useLanguage()

	const messages = { en, zh }
	const expMessages = messages[language].projects

	const containerRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	})

	return (
		<section ref={sectionRef} className="scroll-my-28" id="projects">
			<SectionHeading>{messages[language].nav.projects}</SectionHeading>

			<div ref={containerRef} className="space-y-10">
				{projectsData.map((project, index) => {
					const targetScale = 1 - (projectsData.length - index) * 0.05
					const range: [number, number] = [index * 0.2, 1]

					return (
						<Project
							key={project.id}
							{...project}
							index={index}
							progress={scrollYProgress}
							range={range}
							targetScale={targetScale}
						/>
					)
				})}
			</div>
		</section>
	)
}
