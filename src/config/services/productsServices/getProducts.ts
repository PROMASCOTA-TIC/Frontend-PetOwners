import HttpService from "../httpsService"


const getProductsList = async (type: string) => {
    if (type === 'nuevos') {
        const resp = await HttpService.get('/products')

        if (resp.status === 200) {
            console.log(resp.data)
            return resp.data
        } else {
            console.log('Error al obtener los productos')
        }
    } else if (type === 'mas vendidos') {
        const resp = await HttpService.get('/products')

        if (resp.status === 200) {
            console.log(resp.data)
            return resp.data
        } else {
            console.log('Error al obtener los productos')
        }
    }
}

export {
    getProductsList,
}