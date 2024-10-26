import React from 'react'

const CardTitle = ({ Icon, text, className = '' }) => {
	return (
		<div className={`text-sdm flex items-center font-medium ${className}`}>
			{Icon && (
				<div className='mr-4 rounded-md border p-2 dark:border-neutral-700'>
					<Icon size={18} />
				</div>
			)}
			<h2 className={Icon ? '' : 'ml-4'}>{text}</h2>
		</div>
	)
}

export { CardTitle }
