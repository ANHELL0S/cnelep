import { BiLoaderAlt } from 'react-icons/bi'

const Button = ({
	type = 'button',
	variant = 'primary',
	size = 'sm',
	loading = false,
	icon: Icon,
	children,
	onClick,
}) => {
	const baseClasses =
		'flex items-center justify-center focus:outline-none transition duration-300 ease-in-out font-medium'
	const variantClasses = {
		primary:
			'bg-neutral-700 dark:bg-neptune-500 text-neutral-50 hover:bg-neutral-600 dark:hover:bg-neptune-400 rounded-md',
		none: 'text-neutral-600 hover:bg-neutral-200/60 rounded-md dark:text-neutral-300 dark:hover:bg-neutral-700/50',
		secondary:
			'bg-neutral-200 text-neutral-600 hover:bg-neutral-100 rounded-md dark:bg-amapola-500 dark:hover:bg-amapola-400/50 dark:text-neutral-50',
		outline:
			'border border-neutral-200 text-neutral-600 dark:text-amapola-200 hover:bg-neutral-200 rounded-md dark:border-amapola-400/60 dark:hover:bg-amapola-500',
		danger: 'bg-red-500 dark:bg-red-500 text-red-50 hover:bg-red-600 dark:hover:bg-red-400 rounded-md',
		success: 'bg-green-500 text-green-100 hover:bg-green-600 rounded-md',
	}
	const sizeClasses = {
		sm: 'px-3 py-2 text-xs',
		md: 'px-4 py-2 text-sm',
		full: 'py-3 w-full text-sm',
	}

	return (
		<button
			type={type}
			className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
				loading ? 'cursor-not-allowed opacity-50' : ''
			}`}
			disabled={loading}
			onClick={onClick}>
			{loading && <BiLoaderAlt className='mr-2 animate-spin' />}
			{Icon && <Icon className='mr-2' size={14} />}
			{children}
		</button>
	)
}

export { Button }
