import { toast } from 'sonner'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isValidCI } from '../utils/cli.validator'
import path_img from '../assets/images/banner_home.svg'

const HomePage = () => {
	const navigate = useNavigate()
	const [identificacion, setIdentificacion] = useState('')
	const [hasIdentificacion, setHasIdentificacion] = useState(false)

	useEffect(() => {
		const storedIdentificacion = localStorage.getItem('identificacion')
		if (storedIdentificacion) {
			setIdentificacion(storedIdentificacion)
			setHasIdentificacion(true)
		}
	}, [])

	const handleConsultar = () => {
		if (!identificacion) {
			toast.error('Por favor, ingrese tu cédula')
		} else if (!isValidCI(identificacion)) {
			toast.error('La cédula ingresada no es válida')
		} else {
			localStorage.setItem('identificacion', identificacion)
			navigate(`/consultar-corte`)
		}
	}

	return (
		<section className='text-slate-700'>
			<div className='container mx-auto flex md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-semibold text-slate-600'>
						Consulta tu horario de corte de luz
					</h1>

					<p className='mb-8 leading-relaxed text-sm text-slate-500 font-medium'>
						Mantente al tanto sobre los cortes de luz programados y emergentes en tu zona. Solo ingresa el número de
						cédula asociado a tu planilla de luz.
					</p>

					{hasIdentificacion ? (
						<Link to='/#/consultar-corte'>
							<button className='inline-flex text-white bg-slate-500 border-0 py-2 px-4 focus:outline-none hover:bg-slate-600 rounded'>
								Mostar mi horario de corte
							</button>
						</Link>
					) : (
						<div className='flex justify-center items-center gap-4 text-sm'>
							<input
								type='text'
								value={identificacion}
								onChange={e => setIdentificacion(e.target.value)}
								placeholder='Ingresa tu cédula'
								className='px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500'
							/>
							<button
								onClick={handleConsultar}
								className='inline-flex text-white bg-slate-500 border-0 py-2 px-4 focus:outline-none hover:bg-slate-600 rounded'>
								Consultar mi horario
							</button>
						</div>
					)}
				</div>

				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img className='object-cover object-center rounded' alt='Cortes de Luz' src={path_img} />
				</div>
			</div>
		</section>
	)
}

export default HomePage
