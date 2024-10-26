import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import NotificationSearch from './pages/NotificationSearch'

export function RoutesConfig() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/consultar-corte' element={<NotificationSearch />} />
				<Route path='/sobre-nosotros' element={<AboutPage />} />
			</Route>
		</Routes>
	)
}
