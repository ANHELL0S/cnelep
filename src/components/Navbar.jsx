import { useState } from 'react'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { LuMenu } from 'react-icons/lu'

const Navbar = () => {
	const navigate = useNavigate()
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const handleConsultarCorteClick = () => {
		if (!localStorage.getItem('identificacion')) {
			toast.error('No tienes una identificación almacenada.')
		} else {
			navigate(`/consultar-corte`)
			setDropdownOpen(false) // Close dropdown after navigation
		}
	}

	const handleLinkClick = () => {
		setDropdownOpen(false) // Close dropdown when a link is clicked
	}

	const toggleDropdown = () => {
		setDropdownOpen(prev => !prev)
	}

	return (
		<header className='py-8 sm:py-10 sticky left-0 right-0 top-0 flex items-center bg-white text-slate-600 w-full z-50'>
			<div className='container mx-auto flex items-center justify-between'>
				<Link to='/'>
					<div className='font-black text-slate-700 text-2xl flex items-start'>PUI</div>
				</Link>

				<div className='flex items-center'>
					<nav className='text-slate-600 text-sm hidden lg:flex items-center space-x-6'>
						<Link to='/sobre-nosotros' onClick={handleLinkClick}>
							Sobre nosotros
						</Link>
						<button onClick={handleConsultarCorteClick} className='text-slate-600'>
							Consultar corte
						</button>
					</nav>

					<div className='lg:hidden'>
						<button onClick={toggleDropdown} className='text-slate-600 p-2'>
							<LuMenu size={24} />
						</button>

						{dropdownOpen && (
							<div className='absolute right-0 bg-white shadow-lg rounded-lg mt-2 z-50'>
								<nav className='flex flex-col p-2'>
									<Link to='/sobre-nosotros' className='py-2 px-4 hover:bg-slate-100' onClick={handleLinkClick}>
										Sobre nosotros
									</Link>
									<button onClick={handleConsultarCorteClick} className='py-2 px-4 text-left w-full hover:bg-slate-100'>
										Consultar corte
									</button>
								</nav>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export { Navbar }
