const baseUrlCategory = 'http://localhost:8080/api/category'
const baseUrlProduct= 'http://localhost:8080/api/products'


const getCategories = (token: string) => {
    return fetch(baseUrlCategory, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    })
}

const getProducts = (token: string, num: number | 0, count: number | 50, categoryId?: number) => {
    return fetch(`${baseUrlProduct}?num=${num}&count=${count}&categoryId=${categoryId ?? ''}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
    })
}

export default {
    getProducts: getProducts,
    getCategories: getCategories
}