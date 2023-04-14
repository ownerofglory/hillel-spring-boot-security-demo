import { Product } from "../model/Product"

const getCart = (userId: number, token: string) => {
    return fetch(`http://localhost:8080/api/cart/${userId}`, {
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

const addToCart = (userId: number, product: Product, token: string) => {
    fetch(`http://localhost:8080/api/cart/${userId}`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(resp => {
        if (resp.ok) {}
    })
}

const getCartSize = (userId: number, token: string) => {
    return fetch(`http://localhost:8080/api/cart/${userId}/size`, {
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

export default {
    getCart: getCart,
    addToCart: addToCart,
    getCartSize: getCartSize
}