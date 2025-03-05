import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '', // /path-to-repo/
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/_config.scss";',
      },
    },
  },
});

/** ---------------------------------------------------------------------- 
* Alternativ:
* ------------------------------------------------------------------------
*/


import { defineConfig } from 'vite';

export default defineConfig ({
	'base': '/namn på repo/'
});


/** ---------------------------------------------------------------------- 
* Detta är om man använder sass och vill använda variabler:
* ------------------------------------------------------------------------
*/

css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/_variables.scss";`,
      },
    },
  },
