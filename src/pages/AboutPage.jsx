const AboutPage = () => {
	return (
		<div className='text-slate-600 text-base sm:text-lg'>
			<h1 className='font-bold mb-4'>Sobre Nosotros</h1>
			<p className='mb-4'>
				Somos una plataforma diseñada para ofrecer información clara y precisa sobre los cortes de luz en Ecuador,
				basándonos en la cédula de identidad de los usuarios. Nuestra misión es asegurar que todos los ciudadanos tengan
				acceso a la información sobre interrupciones del servicio eléctrico en tiempo real, lo que les permite
				planificar mejor sus actividades diarias.
			</p>

			<h2 className=' font-semibold mb-2'>Nuestra Misión</h2>
			<p className='mb-4'>
				Facilitar la consulta de cortes de luz a través de un sistema fácil de usar, donde los ciudadanos pueden
				ingresar su número de cédula y obtener información específica sobre su área. Nuestro objetivo es ayudar a los
				usuarios a estar informados sobre el estado del suministro eléctrico en sus hogares.
			</p>

			<h2 className=' font-semibold mb-2'>Cómo Funciona</h2>
			<p className='mb-4'>
				Utilizando la API de la Comisión Nacional de Electricidad y Energía Limpia (CNELEP), nuestra plataforma permite
				a los usuarios ingresar su número de cédula para consultar el estado de los cortes de luz en su sector.
				Proporcionamos información actualizada sobre horarios y áreas afectadas, garantizando que nuestros usuarios
				siempre estén al tanto de cualquier interrupción en el servicio.
			</p>

			<h2 className=' font-semibold mb-2'>Compromiso con la Transparencia</h2>
			<p className='mb-4'>
				Nos comprometemos a proporcionar información precisa y oportuna sobre cortes de luz, basándonos en los datos
				disponibles a través de la CNELEP. La transparencia en la comunicación es fundamental para nosotros, y
				trabajamos arduamente para mantener la confianza de nuestros usuarios.
			</p>

			<h2 className=' font-semibold mb-2'>Contacto</h2>
			<p className='mb-4'>
				Si tienes alguna pregunta o necesitas más información sobre nuestra plataforma y cómo utilizarla, no dudes en{' '}
				<a href='/contacto' className='text-blue-600 underline'>
					contactarnos
				</a>
				. Estamos aquí para ayudarte a mantenerte informado sobre el servicio eléctrico en Ecuador.
			</p>
		</div>
	)
}

export default AboutPage
