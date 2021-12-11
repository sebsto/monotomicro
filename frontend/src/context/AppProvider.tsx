// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// see https://felixgerschau.com/react-typescript-context/ 
// see https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
// see https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re

import React, { FC, useState, useEffect } from 'react'
import { Item, Cart, IAppContext, defaultAppState } from "./Types"
import { Backend } from '../services/Backend'

export var AppContext = React.createContext<IAppContext>(defaultAppState);

export const AppProvider: FC = ({ children }) => {

    console.log('AppProvider')

    const [state, setState] = useState<IAppContext>(defaultAppState);

    useEffect( () => {

        console.log('AppProvider : useEffect()')
        const backend = new Backend()

        async function getItems() : Promise<Item[]> {
            const items = await backend.loadItems()
            console.log('AppProvider : getItems()')
            console.log(items)
            return items
        }

        async function loadCart() : Promise<Cart> {
            console.log('AppProvider : loadCart()')
            const cart = await backend.loadCart()
            console.log(cart)
            return cart
        }  

        if (state.items.length === 0 && state.cart.items.length === 0) {
            var p1 = getItems()
            var p2 = loadCart() 

            // wait for the two calls to return 
            Promise.all([p1,p2])
            .then( (value : [Item[],Cart]) => {
                let items = value[0]
                let cart  = value[1]
                console.log("App Provider - setting state and app context")

                // update global app context 
                const appContext: IAppContext = { loading: false, items: items, cart: cart }
                AppContext = React.createContext<IAppContext>(appContext);

                // update this component state 
                setState(appContext)
            })
        }
    }, [ state.items.length, state.cart.items.length ])

    return (
        <AppContext.Provider value={React.useContext(AppContext)}>
            {children}
        </AppContext.Provider>
    )
}
