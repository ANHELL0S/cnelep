import { BiInfoCircle } from 'react-icons/bi'

const InputFieldZod = ({ label, placeholder, type = 'text', register, error }) => (
	<div className='flex w-full flex-col gap-y-0.5 text-amapola-600 dark:text-amapola-200/80'>
		<div className='flex gap-x-2'>
			<label className={`${error ? 'text-red-500 dark:text-red-500' : ''}`}>{label}</label>
			<span className='text-red-500'>*</span>
		</div>

		<input
			{...register}
			type={type}
			placeholder={placeholder}
			className={`w-full border border-amapola-300 border-transparent border-x-transparent py-1.5 text-sm text-amapola-600 placeholder-amapola-400 outline-none transition-colors duration-200 focus:border-amapola-500 focus:ring-0 focus:ring-amapola-500 dark:border-amapola-400 dark:border-x-transparent dark:border-t-transparent dark:bg-amapola-800 dark:text-amapola-200 dark:focus:border-b-amapola-300 ${error ? 'border-red-500' : ''}`}
		/>

		<div className='flex flex-row items-center gap-1 pt-1.5 text-red-400'>
			{error && (
				<>
					<BiInfoCircle size={16} /> <p>{error.message}</p>
				</>
			)}
		</div>
	</div>
)

export { InputFieldZod }
