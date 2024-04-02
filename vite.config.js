import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(
    {
        root: resolve(__dirname, 'src'),
        resolve: {
            alias: {
                '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            }
        },
        server: {
            port: 8080,
            hot: true,
            open: 'index.html'
        },
        build:{
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'src/index.html'),
                    about: resolve(__dirname, 'src/about.html')
                }
            }
        }
    }
) 