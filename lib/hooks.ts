import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import type { SectionName } from './types'

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	const { ref, inView } = useInView({
		threshold,
		triggerOnce: false,
		initialInView: false,
	})

	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	useEffect(() => {
		if (!hasMounted) return

		const now = Date.now()
		if (inView && now - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, hasMounted, setActiveSection, timeOfLastClick, sectionName])

	return { ref }
}
