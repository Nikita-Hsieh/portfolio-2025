'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function Contact() {
	const { ref } = useSectionInView('Contact')

	return (
		<section
			ref={ref}
			id="contact"
			className="mt-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
		>
			<SectionHeading>Contact Me</SectionHeading>
			
		</section>
	)
}
