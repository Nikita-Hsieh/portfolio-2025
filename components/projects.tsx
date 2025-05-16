import React from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'

export default function Projects() {
	return (
		<section className="py-10 scroll-my-28" id="projects">
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
