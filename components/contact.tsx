'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
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
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{' '}
				<a href="mailto:nikitahsieh03@gmail.com" className="underline">
					nikitahsieh03@gmail.com
				</a>{' '}
				or through this form
			</p>
			<form className="mt-10 flex flex-col">
				<input
					type="email"
					className="h-14 rounded-lg borderBlack px-4"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 "
					placeholder="Your message"
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all 
                    focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-950
                    active:scale-105 cursor-pointer"
				>
					Submit{' '}
					<FaPaperPlane
						className="text-sm opacity-70 transition-all 
                    group-hover:translate-x-1 group-hover:-translate-y-1 
                   "
					/>
				</button>
			</form>
		</section>
	)
}
