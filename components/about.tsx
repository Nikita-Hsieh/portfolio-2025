'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import Image from 'next/image'
import Profile from '@/public/profile.png'
import SectionHeading from './section-heading'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'

export default function About() {
	const { ref } = useSectionInView('About')
	const { language } = useLanguage()
	const messages = { en: enMessages, zh: zhMessages }
	const t = messages[language].about

	return (
		<motion.section
			ref={ref}
			id="about"
			className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.17 }}
		>
			<SectionHeading>{t.title}</SectionHeading>

			<div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
				<motion.div
					className="flex-shrink-0"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Image
						src={Profile}
						alt="profile image"
						className="w-40 h-40 rounded-xl object-cover sm:w-48 sm:h-48"
					/>
				</motion.div>

				<motion.div
					className="text-left text-gray-600 dark:text-gray-300"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<p className="mb-3">{t.paragraph1}</p>
					<p className="mb-3">{t.paragraph2}</p>
					<p className="mb-3">{t.paragraph3}</p>
					<p>{t.paragraph4}</p>
				</motion.div>
			</div>
		</motion.section>
	)
}
