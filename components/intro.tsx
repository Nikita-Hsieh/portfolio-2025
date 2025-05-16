'use client'
import React from 'react'
import Image from 'next/image'
import Portrait from '@/public/portrait_2.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDown, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
	return (
		<section
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
			id="home"
		>
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
							className="h-24 w-24 rounded-full border-[0.25rem] object-cover border-white/55 shadow-sm "
						/>
					</motion.div>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-semibold">Hello, I'm Nikita.</span> <br />
				<span className="font-normal">
					I'm a frontend developer & UX/UI designer
				</span>
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-normal"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="#projects"
					className="group text-sm font-medium bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					View Projects{' '}
					<BsArrowDown className="opacity-70 group-hover:translate-y-1 transition" />
				</Link>
				<a
					href="/resume.pdf"
					download
					className="group text-sm font-medium bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
				>
					Download CV{' '}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>
				<a
					href="https://www.linkedin.com/in/chia-jung-nikita-hsieh-07b868187/"
					target="_blank"
					className="bg-white p-4 py-3 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/Nikita-Hsieh"
					target="_blank"
					className="bg-white p-4 py-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	)
}
