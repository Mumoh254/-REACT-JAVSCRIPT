import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

// change  port  number 
server:{
  // vite  please   dont  use  your  default  port  number   use  my  port  number 
  port:5000
}
})
