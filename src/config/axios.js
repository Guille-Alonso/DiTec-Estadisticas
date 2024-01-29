import axiosOriginal from 'axios'

const axios = axiosOriginal.create({
    baseURL: import.meta.env.VITE_APP_RUTA_BACK
})

export default axios;