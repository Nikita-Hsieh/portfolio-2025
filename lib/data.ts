import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import invoiceImage from '@/public/invoice-app.png'
import jsModuleImage from '@/public/js-module.png'
import saasImage from '@/public/saas-app.png'
import shopImage from '@/public/shop-app.png'
import filmImage from '@/public/film-app.png'

export const links = [
	{ name: 'Home', hash: '#home' },
	{ name: 'About Me', hash: '#about' },
	{ name: 'Experience', hash: '#experience' },
	{ name: 'Skills', hash: '#skills' },
	{ name: 'Projects', hash: '#projects' },
] satisfies { name: string; hash: string }[]

export const experiencesData = [
	{
		id: 'graphicDesign',
		date: '2015 - 2017',
		icon: React.createElement(LuGraduationCap),
		type: 'education',
	},
	{
		id: 'ucsdVisualArt',
		date: '2017 - 2019',
		icon: React.createElement(LuGraduationCap),
		type: 'education',
	},
	{
		id: 'hunchTech',
		date: '2019 - 2020',
		icon: React.createElement(CgWorkAlt),
		type: 'work',
	},
	{
		id: 'nadiSystem',
		date: '2020 - 2021',
		icon: React.createElement(CgWorkAlt),
		type: 'work',
	},
	{
		id: 'rogersAI',
		date: '2021 - 2023',
		icon: React.createElement(CgWorkAlt),
		type: 'work',
	},
	{
		id: 'woWorld',
		date: '2024 - 2025',
		icon: React.createElement(FaReact),
		type: 'work',
	},
] as const

export const skillsGrouped = [
	{
		category: 'Frontend',
		items: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue3',
			'Quasar',
			'React',
			'SCSS',
			'Tailwind',
			'Framer Motion',
			'style-component',
			'GSAP',
			'Typescript',
			'Next.js',
			'Laravel',
			'Unity',
		],
	},
	{
		category: 'Dev Tools',
		items: ['Git', 'Vercel', 'Firebase'],
	},
	{
		category: 'Design',
		items: [
			'Figma',
			'Whimsical',
			'Photoshop',
			'Sketch',
			'Zeplin',
			'Draw.io',
			'Miro',
			'Wix',
		],
	},
	{
		category: 'Others',
		items: ['Jira', 'Trello'],
	},
] as const

export const projectsData = [
	{
		id: 'invoice',
		imageUrl: invoiceImage,
		demoUrl: 'https://nikita-hsieh.github.io/invoice-app/#/',
		githubUrl: 'https://github.com/Nikita-Hsieh/invoice-app',
		tags: ['Vue 3', 'Firebase', 'Vuex', 'SCSS'],
	},
	{
		id: 'jsModule',
		imageUrl: jsModuleImage,
		demoUrl: 'https://nikita-hsieh.github.io/Practice-JS-Module/',
		githubUrl: 'https://github.com/Nikita-Hsieh/Practice-JS-Module',
		tags: ['JavaScript', 'Modules', 'DOM'],
	},
	{
		id: 'saas',
		imageUrl: saasImage,
		demoUrl: 'https://saas-landing-page-project.vercel.app/',
		githubUrl: 'https://github.com/Nikita-Hsieh/saas-landing-page',
		tags: ['Next.js', 'React', 'Tailwind', 'Framer Motion', 'Vercel'],
	},
	{
		id: 'shop',
		imageUrl: shopImage,
		demoUrl: 'https://nikita-hsieh.github.io/shop-products/',
		githubUrl: 'https://github.com/Nikita-Hsieh/shop-products',
		tags: ['JavaScript', 'Dom'],
	},
	{
		id: 'film',
		imageUrl: filmImage,
		demoUrl: 'https://nikita-hsieh.github.io/practice-film-app/index.html',
		githubUrl: 'https://github.com/Nikita-Hsieh/practice-film-app',
		tags: ['JavaScript', 'API', 'Swiper'],
	},
]
