import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    root: 'src',
    build: {
        outDir: '../../dist',
        emptyOutDir: true,
        sourcemap: 'hidden',
        lib: {
            entry: path.resolve(__dirname, 'src/index.jsx'),
            name: 'App',
            fileName: 'index'
        },
        rollupOptions: {
            output: {
                // Define process.env.NODE_ENV in the UMD build
                banner: 'var process = { env: { NODE_ENV: "production" } };'
            }
        }
    },
    define: {
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }
})