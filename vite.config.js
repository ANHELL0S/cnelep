import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	//base: '/', // TODO Necesario para poder servir las rutas usando nginx
})
