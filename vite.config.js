import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build : {
    rollupOptions: {
      input: {
        index: 'index.html',
        hello: "hello.html",
        counter: "counter.html",
        inputan: "inputan.html",
        style: "style.html",
        conditional: "conditional.html",
        todolist: "list.html",
        contact: "contact.html",
        product: "product.html",
        noteref: "noteref.html",
      }
    }
  }
})
