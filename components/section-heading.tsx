import React from 'react'

type SectionHeadingProps = {
	children: React.ReactNode
	className?: string
}

export default function SectionHeading({
	children,
	className = '',
}: SectionHeadingProps) {
	return (
		<h2
			className={`text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight mb-10 text-center ${className}`}
		>
			{children}
		</h2>
	)
}
