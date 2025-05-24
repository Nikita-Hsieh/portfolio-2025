export async function getUserLocale(): Promise<'en' | 'zh'> {
	const acceptLanguage =
		typeof navigator !== 'undefined' ? navigator.language : 'en'

	if (acceptLanguage.startsWith('zh')) {
		return 'zh'
	}

	return 'en'
}
