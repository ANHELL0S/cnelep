import axios from 'axios'
import { toast } from 'sonner'
import { useState, useEffect } from 'react'
import { LuAlignCenterVertical, LuCalendar, LuCheckCircle, LuLocate } from 'react-icons/lu'

const NotificationSearch = () => {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [identificacion, setIdentificacion] = useState('')
	const [notificaciones, setNotificaciones] = useState([])

	useEffect(() => {
		const storedIdentificacion = localStorage.getItem('identificacion')
		if (storedIdentificacion) {
			setIdentificacion(storedIdentificacion)
			fetchNotification(storedIdentificacion)
		}
	}, [])

	const fetchNotification = async id => {
		setLoading(true)
		setError('')
		try {
			const response = await axios.get(
				`https://api.cnelep.gob.ec/servicios-linea/v1/notificaciones/consultar/${id}/IDENTIFICACION`
			)
			const data = response.data
			if (data.resp === 'OK' && data.notificaciones) {
				setNotificaciones(data.notificaciones)
			} else {
				toast.warning('No se encontraron notificaciones para esta identificación.')
			}
		} catch (err) {
			setError('Error al obtener los datos.')
		}
		setLoading(false)
	}

	const handleConsultar = () => {
		if (identificacion) {
			localStorage.setItem('identificacion', identificacion)
			fetchNotification(identificacion)
		} else {
			toast.error('Por favor, ingrese una cédula.')
		}
	}

	const handleNewIdentification = () => {
		localStorage.removeItem('identificacion')
		setIdentificacion('')
		setNotificaciones([])
		setError('')
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
			{notificaciones.length === 0 ? (
				<div className='flex flex-col items-center w-full'>
					<div className='flex items-center justify-center flex-col'>
						<label htmlFor='identificacion' className='mb-2 font-medium text-slate-700 text-center'>
							Ingrese Cédula:
						</label>
						<input
							id='identificacion'
							type='text'
							value={identificacion}
							onChange={e => setIdentificacion(e.target.value)}
							className='px-4 py-2 border border-slate-300 text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 w-full mb-4'
						/>
						<button
							onClick={handleConsultar}
							className='px-6 py-2 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 transition duration-200 w-full'
							disabled={loading}>
							{loading ? 'Cargando...' : 'Consultar'}
						</button>
					</div>
				</div>
			) : null}

			{error && <p className='text-red-500 text-center'>{error}</p>}

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

											<div className='flex flex-col gap-2 text-slate-600/90'>
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
