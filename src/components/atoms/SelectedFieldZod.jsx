import { BiInfoCircle } from 'react-icons/bi'

const SelectFieldZod = ({ id, label, options, register, error, loading, placeholder = 'Seleccione una opción' }) => (
	<div className='flex flex-col gap-y-2 pb-4'>
		<div className='flex gap-x-2'>
			<label htmlFor={id} className={`${error ? 'text-red-500 dark:text-red-500' : ''}`}>
				{label}
			</label>
			<span className='text-red-500'>*</span>
		</div>
		<select
			id={id}
			className='w-full rounded-md border-amapola-300 px-2 py-2 text-sm text-amapola-600 placeholder-amapola-400 outline-none transition-colors duration-200 focus:border-amapola-500 focus:ring-0 focus:ring-amapola-500 dark:border-amapola-400 dark:bg-amapola-500/70 dark:text-amapola-200 dark:focus:border-b-amapola-300'
			{...register}>
			<option value='' disabled selected hidden>
				{placeholder}
			</option>
			{loading ? (
				<option>Cargando...</option>
			) : (
				options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))
			)}
		</select>
		{error && (
			<div className='flex flex-row items-center gap-1 text-red-400'>
				<BiInfoCircle size={16} />
				<p className='text-xs'>{error.message}</p>
			</div>
		)}
	</div>
)

export { SelectFieldZod }
