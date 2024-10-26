import { BiSolidHeart } from 'react-icons/bi'

const Footer = () => {
	return (
		<footer className='text-slate-500 bg-white text-center'>
			<div className='flex flex-col gap-4 items-center justify-between sm:flex-row sm:py-0'>
				<div className='flex flex-col gap-2 text-center sm:flex-row sm:gap-8 sm:text-left'>
					<span className='block text-xs font-medium'>
						&copy; {new Date().getFullYear()} PUI - Consulta cortes de luz. Todos los derechos reservados.
					</span>
				</div>

				<div className='flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left'>
					<div className='border-slate-400 flex flex-row items-center gap-1 pt-2 sm:pt-0'>
						<span className='flex gap-1 text-xs font-medium'>
							Made with
							<BiSolidHeart className='text-red-500' size={14} />
							by
						</span>
						<a
							href='https://www.facebook.com/ANHELL0s'
							className='hover:text-slate-700 block text-xs font-medium underline transition-colors duration-200'
							target='_blank'
							rel='noopener noreferrer'>
							Angelo García
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
