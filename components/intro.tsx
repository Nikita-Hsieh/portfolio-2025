'use client'
import React from 'react'
import Image from 'next/image'
import Portrait from '@/public/portrait_2.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
			{/* Profile Image  */}
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'tween', duration: 0.2 }}
					>
						<Image
							src={Portrait}
							width="192"
							height="192"
							quality={95}
							alt="portrait"
							priority={true}
							className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white/75 shadow-md "
						/>
					</motion.div>
				</div>
			</div>

			<motion.p
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Nikita.</span>
				<span className="">I'm a frontend developer & UX/UI designer</span>{' '}
			</motion.p>

			<div>
				<Link href="#projects">View Projects</Link>
			</div>
		</section>
	)
}
