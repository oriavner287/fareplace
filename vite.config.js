import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    plugins: [reactRefresh(), eslintPlugin({ exclude: ['node_modules', '**.scss'] })],
    resolve: {
        alias: [
            {
                find: '@src',
                replacement: path.join(process.cwd(), 'src')
            },
            {
                find: '@styles',
                replacement: path.join(process.cwd(), 'src/styles')
            },
            {
                find: '@fonts',
                replacement: path.join(process.cwd(), 'src/public/fonts')
            }
        ]
    }
})
