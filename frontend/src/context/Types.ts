export class Item {
    id : string = ""
    name: string = ""
    desc: string = ""
    price: number = 0.0
    stock : number = 0
    image: string = ""
}

export class ItemInCart {
    item?: Item = undefined
    quantity: number = 0
}

export class Cart {
    items: ItemInCart[]

    constructor(itemsInCart: ItemInCart[]) {
        this.items = itemsInCart
    }
    public totalQuantity() : number {
        var totalQuantity = 0
        this.items.forEach(element => {
            totalQuantity += element.quantity
        })
        return totalQuantity
    }
}

// app state / context 
export interface IAppContext {
    // add global app context here
    loading: boolean
    cart: Cart,
    items: Item[],

    //functions to update global context
    //these will be passed down the DOM to allow subcomponent to update the state 
    // setCart: (cart: Cart) => Cart,
    // setItems: (items: Item[]) => Item[]
}
export type IAppState = IAppContext

export const defaultAppState : IAppState = {
    loading: false,
    cart: new Cart([]),
    items: [],

    // setCart: (cart: Cart) : Cart => { return cart },
    // setItems: (items: Item[]) : Item[] => { return items }
}

export interface IItemDisplay {

    // used by ItemDisplay
    item?: Item
    key?: string

}

export interface ITopMenuProp {
    cart: Cart
}