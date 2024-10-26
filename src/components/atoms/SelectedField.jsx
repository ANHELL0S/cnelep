const SelectedField = ({ type, value = '', onChange, name_field, placeholder, options }) => {
	return (
		<div className='flex flex-col items-start text-amapola-600 dark:text-amapola-200'>
			<label className='flex items-center text-sm font-medium'>{name_field}</label>
			{options ? (
				<select
					className='my-2 w-full rounded-md border-amapola-300 border-transparent border-x-transparent px-3 py-1.5 text-sm text-amapola-100 placeholder-amapola-400 outline-none transition-colors duration-200 focus:border-amapola-500 focus:ring-0 focus:ring-amapola-500 dark:border-amapola-400 dark:border-x-transparent dark:border-t-transparent dark:bg-amapola-600 dark:focus:border-b-amapola-300'
					value={value}
					onChange={onChange}>
					<option value='' disabled>
						{placeholder || 'Selecciona una opción'}
					</option>
					{options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			) : (
				<input
					className='w-full border border-amapola-300 border-transparent border-x-transparent py-1.5 text-sm text-amapola-100 placeholder-amapola-400 outline-none transition-colors duration-200 focus:border-amapola-500 focus:ring-0 focus:ring-amapola-500 dark:border-amapola-400 dark:border-x-transparent dark:border-t-transparent dark:bg-amapola-600 dark:focus:border-b-amapola-300'
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
			)}
		</div>
	)
}

export { SelectedField }
