import React from 'react'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="text-center py-6 text-sm text-gray-500">
			<small>&copy; {currentYear} Nikita Hsieh. All Rights Reserved.</small>
		</footer>
	)
}
