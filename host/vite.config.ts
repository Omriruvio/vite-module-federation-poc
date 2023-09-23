import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return ({
    server: {
      host: true,
    },
    plugins: [
      react(),
      federation({
        name: 'app',
        remotes: {
          remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom']
      })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      sourcemap: true,
    },
  })
})