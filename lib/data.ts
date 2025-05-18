import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import filmApp from '@/public/film-app.png'
import nexter from '@/public/nexter.png'
import calculator from '@/public/calculator.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Graphic Design',
		location: 'DeAnza College',
		description:
			'Graphic Design and Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.)',
		icon: React.createElement(LuGraduationCap),
		date: '2015 - 2017',
	},
	{
		title: 'Visual Arts - Interdiscip. Computer & Art',
		location: 'University of California - San Diego',
		description:
			'The cross-disciplinary background allows me to approach design and development with both creative insight and technical precision.',
		icon: React.createElement(LuGraduationCap),
		date: '2019',
	},
	{
		title: 'UI/UX Designer',
		location: 'HunchTech',
		description:
			'Skilled in UI/UX design, game design, website creation using Wix, English copywriting, and integrating backend services with Google Firebase.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - 2020',
	},
	{
		title: 'UI/UX Designer',
		location: 'NADI System Corp.',
		description: [
			'Applied user-centered design to projects across smart factory, smart building, and telecom sectors.',
			'Specialized in data visualization, interaction design, and Unity-based prototyping.',
			'Tools & Technologies: Figma, Unity, data dashboards, cross-functional team collaboration.',
			'Key Projects:',
			'• FarEasTone 5G (telecom)',
			'• Foxconn Wisconsin Smart Factory',
			'• Giant Smart HQ',
			'• Cathay United Bank Data Center',
			'• Delta Smart Building (Shanghai)',
		],

		icon: React.createElement(CgWorkAlt),
		date: '2020 - 2021',
	},
	{
		title: 'UI/UX Designer',
		location: 'RogersAI',
		description: [
			'Designed and optimized UI/UX for internal tools and AI interfaces, developed interactive prototypes, conducted usability testing, and planned information architecture and backend workflows. Contributed to improving system models and building scalable interface components.',
		],

		icon: React.createElement(CgWorkAlt),
		date: '2021 - 2023',
	},

	{
		title: 'UI/UX & Frontend Developer',
		location: 'WoWorld',
		description:
			'Developed reusable frontend modules and implemented responsive layouts to support scalable e-commerce workflows. Also contributed to UI/UX design and interface optimization to enhance user experience across the platform.',
		icon: React.createElement(FaReact),
		date: '2024 - 2025',
	},
] as const

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: filmApp,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: nexter,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: calculator,
	},
]

export const skillsData = [
	// Frontend
	'HTML',
	'CSS',
	'JavaScript',
	'Vue3',
	'React',
	'Quasar',
	'Tailwind',
	'Framer Motion',
	'Scss',
	'style-component',
	'gsap',
	'firebase',
	'Unity',
	'git',

	// UI/Ux
	'Figma',
	'Wix',
	'Whimsical',
	'Photoshlp',
	'Draw.io',
	'Sketch',
	'Zepline',
	'Miro',

	// Other
	'Trello',
	'Jira',
	'GraphQL',

	// Tools
	'Git',
] as const
