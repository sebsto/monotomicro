import { Cart, Item, ItemInCart } from '../context/Types'

import config from '../config.json' 

export class Backend {
    // private static BASE_URL: string = 'http://localhost:8888'
    private static BASE_URL= config.backend_url

    constructor() {
        console.log(`Using backend server at ${Backend.BASE_URL}`)
    }

    public async loadItems(): Promise<Item[]> {

        console.log('Backend.loadItems : GET items')
        const response = await fetch(`${Backend.BASE_URL}/products`)
        const jsonResponse = await response.json()
        let items: Item[] = jsonResponse.items
        return items
    }

    public async loadCart(): Promise<Cart> {
        console.log('Backend.loadCart : GET cart')
        const response = await fetch(`${Backend.BASE_URL}/cart`)
        const jsonResponse = await response.json()
        // console.log('******')
        // console.log(jsonResponse)
        return new Cart(jsonResponse.cart)
    }

    public async addItemToCart(item: Item, quantity: number): Promise<Cart> {

        const data: ItemInCart = { item: item, quantity: quantity }
        const response = await fetch(`${Backend.BASE_URL}/cart`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header

        })

        const jsonResponse = await response.json()
        // console.log('******')
        // console.log(jsonResponse)
        return new Cart(jsonResponse.cart)
    }

}