import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/uchiru-catinterest/' : '/', // Устанавливаем base только для production
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/styles/variables.scss";`,
      },
    },
  },
}))
