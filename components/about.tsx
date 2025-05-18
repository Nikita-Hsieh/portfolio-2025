'use client'
import React from 'react'
import Image from 'next/image'
import Profile from '@/public/profile.png'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
	const { ref } = useSectionInView('About')

	return (
		<motion.section
			ref={ref}
			id="about"
			className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.17 }}
		>
			<SectionHeading>About Me</SectionHeading>
			<div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
				<div className="flex-shrink-0">
					<Image
						src={Profile}
						alt="profile image"
						className="w-40 h-40 rounded-xl object-cover sm:w-48 sm:h-48"
					/>
				</div>
				<div className="text-left">
					<p className="mb-3">
						Hi, I'm Nikita Hsieh, a UI/UX designer and frontend developer with a
						strong focus on user experience and interface design. With a
						background in both design and technology, I specialize in bridging
						the gap between visual thinking and functional execution.
					</p>
					<p className="mb-3">
						My work includes system interfaces, platform tools, and backend
						management dashboards. From understanding user needs and structuring
						information to designing intuitive interfaces and turning them into
						interactive products, I move confidently between design and
						development.
					</p>
					<p>
						I'm passionate about system-based applications and creating
						experiences that are not only visually clear but also context-aware
						and user-centered. By combining design thinking with frontend
						capabilities, I aim to bring ideas to life in ways that are both
						meaningful and practical.
					</p>
				</div>
			</div>
		</motion.section>
	)
}
