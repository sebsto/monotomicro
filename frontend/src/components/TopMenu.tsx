// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import { Menu, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { ITopMenuProp } from '../context/Types'

export function TopMenu(props: ITopMenuProp) {


  console.log('TopMenu')
  const { cart } = props 
  console.log(cart) 

  // I used reloadDocument as quick hack
  // nice solution would be : 
  // ProductDetails refresh app context after add item to cart 
  return (
    <div style={divStyle}>
      <Menu fixed="top" stackable borderless inverted style={menuStyle}>
        <Menu.Item header>
          <Link to="/" reloadDocument={true}>
            <Button
              circular
              color="yellow"
              icon="world"
            />
          </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <Link to={"/Checkout"}>
            <Button
              color="yellow"
              icon="cart"
              label={"" + cart.totalQuantity()}
              labelPosition="right"
              style={cartStyle}
            />
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

const menuStyle = {
  background: "#232f3e",
};

const divStyle = {
  paddingTop: "6em",
};

const cartStyle = {
  marginRight: "1em",
};