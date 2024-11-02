import axios from 'axios'
import { toast } from 'sonner'
import { useState, useEffect } from 'react'
import { isValidCI } from '../utils/cli.validator'
import { Error500 } from '../components/molecules/banner/Error_500'
import { SpinnerLoading } from '../components/molecules/loaders/SpinnerLoading'
import { LuAlignCenterVertical, LuCalendar, LuCheckCircle, LuLocate } from 'react-icons/lu'

const NotificationSearch = () => {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [identificacion, setIdentificacion] = useState('')
	const [notificaciones, setNotificaciones] = useState([])
	const [hasNotifications, setHasNotifications] = useState(true) // New state variable
	const existStoredIdentificacion = localStorage.getItem('identificacion')

	useEffect(() => {
		const storedIdentificacion = localStorage.getItem('identificacion')
		if (storedIdentificacion) {
			if (isValidCI(storedIdentificacion)) {
				setIdentificacion(storedIdentificacion)
				fetchNotification(storedIdentificacion)
			} else {
				localStorage.removeItem('identificacion')
				setIdentificacion('')
				setNotificaciones([])
				setError('Cédula inválida, por favor ingrese una válida.')
			}
		}
	}, [])

	const fetchNotification = async id => {
		setLoading(true)
		setError('')
		setHasNotifications(true) // Reset state before fetching
		try {
			const response = await axios.get(
				`https://api.cnelep.gob.ec/servicios-linea/v1/notificaciones/consultar/${id}/IDENTIFICACION`
			)
			const data = response.data
			if (data.resp === 'OK' && data.notificaciones && data.notificaciones.length > 0) {
				setNotificaciones(data.notificaciones)
				setHasNotifications(true) // Set to true if there are notifications
			} else {
				//toast.warning('No se encontraron notificaciones para esta identificación.')
				setHasNotifications(false) // Set to false if no notifications
			}
		} catch (err) {
			setError('Error al obtener los datos.')
		}
		setLoading(false)
	}

	const handleConsultar = () => {
		if (isValidCI(identificacion)) {
			localStorage.setItem('identificacion', identificacion)
			fetchNotification(identificacion)
		} else {
			toast.error('Por favor, ingrese una cédula válida.')
		}
	}

	const handleNewIdentification = () => {
		localStorage.removeItem('identificacion')
		setIdentificacion('')
		setNotificaciones([])
		setError('')
		setHasNotifications(true) // Reset notification state
	}

	const groupByDate = detalles => {
		return detalles.reduce((acc, detalle) => {
			const date = detalle.fechaCorte
			if (!acc[date]) {
				acc[date] = []
			}
			acc[date].push(detalle)
			return acc
		}, {})
	}

	return (
		<div>
			{loading && (
				<div className='flex items-center justify-center'>
					<SpinnerLoading text='Cargando, espera un momento :)' />
				</div>
			)}

			{!existStoredIdentificacion ? (
				<div className='container mx-auto flex md:flex-row flex-col items-center justify-center pt-36'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-semibold text-slate-600'>
							Consulta tu horario de corte de luz
						</h1>
						<p className='mb-8 leading-relaxed text-sm text-slate-500 font-medium'>
							Mantente al tanto sobre los cortes de luz programados y emergentes en tu zona. Solo ingresa el número de
							cédula asociado a tu planilla de luz.
						</p>
					</div>

					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<div className='flex justify-center items-center gap-4 text-sm'>
							<div className='flex flex-col text-slate-600 items-start'>
								<label htmlFor='identificacion' className='mb-2 font-medium text-slate-600 text-center'>
									Número de cédula:
								</label>
								<input
									id='identificacion'
									type='text'
									value={identificacion}
									placeholder='Ingresa tu cédula'
									onChange={e => setIdentificacion(e.target.value)}
									className='px-4 py-2 border border-slate-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 w-full mb-4'
								/>
							</div>

							<div className='pt-3'>
								<button
									onClick={handleConsultar}
									className='inline-flex text-white bg-slate-500 border-0 py-2 px-4 focus:outline-none hover:bg-slate-600 rounded'>
									Consultar
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}

			{error && <Error500 />}

			{!hasNotifications && (
				<div className='p-4 text-center text-slate-600 py-40 font-medium text-lg'>
					No hay cortes programados en tu zona suertud@.
				</div>
			)}

			{notificaciones.length > 0 &&
				notificaciones.map((notificacion, index) => (
					<div key={index} className='bg-white w-full sm:flex-row flex-col gap-14 flex items-center justify-center'>
						<div className='flex flex-col gap-4'>
							<div className='flex gap-4 flex-col'>
								<h2 className='text-xl font-semibold text-slate-700'>Cuenta: {notificacion.cuentaContrato}</h2>
								<div className='text-sm'>
									<p className='text-slate-600 mb-2 flex items-center gap-2'>
										<LuLocate /> Dirección:
										<span> {notificacion.direccion}</span>
									</p>
									<p className='text-slate-600 mb-2 flex items-center gap-2'>
										<LuAlignCenterVertical /> Alimentador:
										<span> {notificacion.alimentador}</span>
									</p>
									<p className='text-slate-600 mb-2 flex items-center gap-2'>
										<LuCheckCircle /> Fecha registro:
										<span>{notificacion.fechaRegistro}</span>
									</p>
								</div>

								<div>
									<button
										onClick={handleNewIdentification}
										className='mb-4 px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 transition duration-200'>
										Nueva consulta
									</button>
								</div>
							</div>
						</div>

						<div className='space-y-4'>
							<h2 className='text-lg font-semibold text-slate-600 mb-2'>Tus horarios</h2>
							{notificacion.detallePlanificacion.length > 0 ? (
								Object.entries(groupByDate(notificacion.detallePlanificacion)).map(([date, detalles]) => (
									<div key={date} className='p-4 border border-slate-200 rounded-lg'>
										<div className='text-slate-500/90 space-y-2'>
											<div className='flex items-center text-xs gap-2'>
												<LuCalendar />
												<span>{date}</span>
											</div>

											<div className='flex flex-col gap-2 text-slate-600/90 text-xs'>
												{detalles.map((detalle, idx) => (
													<div key={idx} className='flex gap-2'>
														<h3 className='font-semibold'>{idx + 1} corte: </h3>
														<div className='flex items-center gap-x-2'>
															<span> desde: {detalle.horaDesde}</span>
															<span className='text-slate-400'>-</span>
															<span> hasta: {detalle.horaHasta}</span>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								))
							) : (
								<div className='p-4 border border-slate-200 rounded-lg text-center text-slate-600'>
									No hay cortes programados en tu zona.
								</div>
							)}
						</div>
					</div>
				))}
		</div>
	)
}

export default NotificationSearch
