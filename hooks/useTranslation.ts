import { useLanguage } from '@/context/language-context'

export function useTranslation() {
	const { messages } = useLanguage()
	return messages
}
