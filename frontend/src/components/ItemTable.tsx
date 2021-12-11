// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";

import { ItemDisplay } from "./ItemDisplay";
import { AppContext } from "../context/AppProvider";

export function ItemTable(props: any) {
  const { items } = useContext(AppContext);

  if (items === undefined) {
    
    return (<div>Loading ...</div>)

  } else {

    const productItems = items.map((item) => {
      return <ItemDisplay item={item} key={item.name} />;
    })

    return (
      <Grid stackable divided columns={4}>
        {productItems}
      </Grid>
    )
  }
}

export default ItemTable;
