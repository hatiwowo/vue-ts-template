import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { envParse } from 'vite-plugin-env-parse'
import { viteMockServe } from 'vite-plugin-mock'
import VueRouter from 'unplugin-vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import viteImagemin from 'vite-plugin-imagemin'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({ logs: true, routesFolder: [{ src: 'src/pages' }] }),
    vue(),
    unocss(),
    envParse({ dtsPath: 'src/vite-env.d.ts' }),
    viteMockServe({ mockPath: 'mock', enable: true }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    viteCompression(),
    VueDevTools(),
  ],
  server: {
    port: 8000,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
