import { Toaster } from 'sonner'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar.jsx'

const Layout = () => {
	return (
		<main className='flex flex-col min-h-screen md:px-36 px-8'>
			<Navbar />

			<div className='flex-grow py-10'>
				<Outlet />
			</div>

			<div className='py-8'>
				<Footer />
			</div>

			<Toaster richColors />
		</main>
	)
}

export default Layout
