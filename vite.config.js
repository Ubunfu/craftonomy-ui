import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    server: {
      port: 8080
    },
    resolve: {
        alias: {
            // util: "util/",
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

