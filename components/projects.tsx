'use client'
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.5,
	})
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection('Projects')
		}
	}, [inView, setActiveSection, timeOfLastClick])
	return (
		<section ref={ref} className="py-10 scroll-my-28" id="projects">
			<SectionHeading>Selected Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
