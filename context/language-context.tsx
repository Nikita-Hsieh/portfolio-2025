'use client'

import React, { createContext, useContext, useState } from 'react'
import enMessages from '@/messages/en.json'
import zhMessages from '@/messages/zh.json'

type Language = 'en' | 'zh'

const messages = {
	en: enMessages,
	zh: zhMessages,
}

type LanguageContextType = {
	language: Language
	toggleLanguage: () => void
	messages: typeof enMessages // messages[language]
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>('en')

	const toggleLanguage = () =>
		setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'))

	return (
		<LanguageContext.Provider
			value={{
				language,
				toggleLanguage,
				messages: messages[language],
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context)
		throw new Error('useLanguage must be used inside LanguageProvider')
	return context
}
