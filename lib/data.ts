import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import invoiceImage from '@/public/invoice-app.png'
import jsModuleImage from '@/public/js-module.png'
import saasImage from '@/public/saas-app.png'
import shopImage from '@/public/shop-app.png'
import filmImage from '@/public/film-app.png'

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

export const skillsGrouped = [
	{
		category: 'Frontend',
		items: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue3',
			'React',
			'Quasar',
			'Tailwind',
			'Framer Motion',
			'GSAP',
			'SCSS',
			'Laravel',
			'style-component',
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
		tags: ['Next.js', 'Tailwind', 'Framer Motion', 'i18n'],
	},
	{
		id: 'shop',
		imageUrl: shopImage,
		demoUrl: 'https://nikita-hsieh.github.io/shop-products/',
		githubUrl: 'https://github.com/Nikita-Hsieh/shop-products',
		tags: ['JavaScript', 'Cart', 'Toast', 'Sidebar'],
	},
	{
		id: 'film',
		imageUrl: filmImage,
		demoUrl: 'https://nikita-hsieh.github.io/practice-film-app/index.html',
		githubUrl: 'https://github.com/Nikita-Hsieh/practice-film-app',
		tags: ['JavaScript', 'API', 'Slider'],
	},
]
