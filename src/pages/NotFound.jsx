import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { Button } from '../components/atoms/button'
import pathimg from '../assets/images/404_error.svg'

const NotFound = () => {
	const goBack = () => window.history.back()

	return (
		<section className='flex items-center bg-white'>
			<div className='container lg:flex lg:items-center lg:gap-12'>
				<div className='text-slate-600 lg:w-1/2'>
					<p className='text-md font-bold'>Error 404</p>
					<h1 className='mt-3 text-2xl font-semibold md:text-3xl'>Página no encontrada</h1>

					<p className='mt-4 text-sm font-medium '>
						Lo sentimos, la página que estás buscando no existe. Aquí hay algunos enlaces útiles:
					</p>

					<div className='mt-6 flex items-center gap-x-3'>
						<Link
							to='/'
							className='w-1/2 shrink-0 rounded-md border border-slate-400 bg-slate-400 px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-slate-500 hover:bg-slate-500 sm:w-auto'>
							Llevar al inicio
						</Link>

						<Button variant='outline' onClick={goBack} size='md'>
							<BiArrowBack size={14} className='mr-2' /> Volver atrás
						</Button>
					</div>
				</div>

				<div className='relative mt-12 w-full lg:mt-0 lg:w-1/2'>
					<img className='w-full max-w-lg lg:mx-auto' src={pathimg} alt='' />
				</div>
			</div>
		</section>
	)
}

export default NotFound
