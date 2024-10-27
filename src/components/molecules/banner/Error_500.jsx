import img_500_server from '../../../assets/images/500_server.svg'

const Error500 = () => {
	return (
		<div className='container mx-auto py-14 lg:flex lg:items-center lg:gap-12'>
			<div className='text-amapola-00 dark:text-amapola-200 w-full lg:w-1/2'>
				<p className='text-md font-bold'>Error 500</p>
				<h1 className='mt-3 text-2xl font-semibold text-amber-400 md:text-3xl'>Error interno del servidor</h1>
				<p className='dark:text-amapola-300 mt-4 font-medium'>
					Estimado usuario, lamentamos informarte que ha ocurrido un error en nuestro sistema. Nuestro equipo está
					trabajando arduamente para resolverlo lo más pronto posible. Agradecemos tu comprensión y paciencia :)
				</p>
			</div>

			<div className='relative mt-12 w-full lg:mt-0 lg:w-1/2'>
				<img className='w-full max-w-lg lg:mx-auto' src={img_500_server} alt='Error 500' />
			</div>
		</div>
	)
}

export { Error500 }
