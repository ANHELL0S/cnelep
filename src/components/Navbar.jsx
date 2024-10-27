import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const handleConsultarCorteClick = () => {
		navigate(`/consultar-corte`)
		setDropdownOpen(false)
	}

	const handleLinkClick = () => setDropdownOpen(false)
	const toggleDropdown = () => setDropdownOpen(prev => !prev)

	return (
		<header className='py-6 fixed top-0 left-0 w-full md:px-36 px-8 bg-white'>
			<div className='container mx-auto flex items-center justify-between'>
				<Link to='/'>
					<div className='font-black text-slate-700 text-2xl flex items-start'>PUI</div>
				</Link>

				<div className='flex items-center'>
					<nav className='text-slate-500 text-sm hidden lg:flex items-center space-x-6 font-medium'>
						<Link to='/sobre-nosotros' onClick={handleLinkClick}>
							Sobre nosotros
						</Link>
						<button onClick={handleConsultarCorteClick}>Consultar mi horario</button>
					</nav>

					<div className='lg:hidden'>
						<button onClick={toggleDropdown} className='text-slate-600 p-2'>
							<LuMenu size={24} />
						</button>

						{dropdownOpen && (
							<div className='fixed inset-0 bg-white text-slate-600 z-50 flex flex-col p-4'>
								<button onClick={toggleDropdown} className='self-end text-slate-600 px-5 py-4'>
									<LuX size={24} />
								</button>

								<nav className='flex flex-col items-start mt-4 space-y-4'>
									<Link
										to='/sobre-nosotros'
										className='text-lg py-2 px-4 hover:bg-slate-100 w-full rounded-md'
										onClick={handleLinkClick}>
										Sobre nosotros
									</Link>
									<button
										onClick={handleConsultarCorteClick}
										className='text-lg py-2 px-4 hover:bg-slate-100 w-full text-left rounded-md'>
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
