import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import filmApp from '@/public/film-app.png'
import nexter from '@/public/nexter.png'
import calculator from '@/public/calculator.png'

export const experiencesData = [
	{
		id: 'graphicDesign',
		date: '2015 - 2017',
		icon: React.createElement(LuGraduationCap),
	},
	{
		id: 'ucsdVisualArt',
		date: '2019',
		icon: React.createElement(LuGraduationCap),
	},
	{
		id: 'hunchTech',
		date: '2019 - 2020',
		icon: React.createElement(CgWorkAlt),
	},
	{
		id: 'nadiSystem',
		date: '2020 - 2021',
		icon: React.createElement(CgWorkAlt),
	},
	{
		id: 'rogersAI',
		date: '2021 - 2023',
		icon: React.createElement(CgWorkAlt),
	},
	{
		id: 'woWorld',
		date: '2024 - 2025',
		icon: React.createElement(FaReact),
	},
] as const

export const projectsData = [
	{
		id: 'corpComment',
		imageUrl: filmApp,
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
	},
	{
		id: 'rmtDev',
		imageUrl: nexter,
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
	},
	{
		id: 'wordAnalytics',
		imageUrl: calculator,
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
	},
]

export const skillsData = [
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
	'Figma',
	'Wix',
	'Whimsical',
	'Photoshop',
	'Draw.io',
	'Sketch',
	'Zeplin',
	'Miro',
	'Trello',
	'Jira',
	'GraphQL',
] as const
