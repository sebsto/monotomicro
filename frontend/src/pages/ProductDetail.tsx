// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { useState, useContext, ReactElement } from "react";
import { Button, Grid, Icon, Image, Header, Card, Divider, Dropdown } from "semantic-ui-react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import { AppContext } from "../context/AppProvider"
import { TopMenu } from "../components/TopMenu"
import { formatCurrency } from "../services/Currency"
import { Backend } from '../services/Backend'
import { Item, Cart } from "../context/Types"

export function ProductDetail(props: any): ReactElement {

  console.log('ProductDetail')

  const backend = new Backend()

  // control the quantity dropdown menu 
  const [quantity, setQuantity] = useState(1);

  const [ cart, setCart ] = useState<Cart>(useContext(AppContext).cart);
  console.log('ProductDetail - Cart from context')
  console.log(cart)

  const [items ] = useState<Item[]>(useContext(AppContext).items);
  console.log('ProductDetail - Items from context')
  console.log(items)

  let params = useParams();
  console.log('ProductDetails : params')
  console.log(params)

  if (items.length === 0) {
    console.log("no items received, maybe page has been reloaded out of context")
    console.log("display a wait message while useEffect() kicks in ")
    return (<div style={styles}> Loading items ... </div>)
  }

  var filteredItems: Item[] = items.filter(function (el) {
    return el.id === params.id;
  });

  var product: Item = filteredItems[0];
  console.log('ProductDetails : filtered products')
  console.log(product)

  var quant = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    return { key: item, value: item, text: item };
  });

  const addItemToCart = async (item: Item, quantity: number) : Promise<Cart> =>  {
    let c = await backend.addItemToCart(item, quantity)
    setCart(c)
    // TODO Should refresh app context 
    //const appContext: IAppContext = { loading: false, items: items, cart: c }
 
    return c
  }

  return (
    <div style={styles}>
      <TopMenu cart={ cart } />
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <Image src={"/img/products/" + product.image} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h2">{product.name}</Header>
            <InfoText>{product.desc}</InfoText>
            <Divider />
            <Grid columns={3}>
              <Grid.Column width={1} style={{ marginRight: "5px" }}>
                Price:{' '}
              </Grid.Column>
              <Grid.Column width={2} textAlign="left">
                <PriceText>{formatCurrency(product.price)}</PriceText>
              </Grid.Column>
            </Grid>
            <StockText>{product.stock} items in stock</StockText>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card fluid>
              <Card.Content>
                <div>
                  I'd like{" "}
                  <Dropdown
                    floating
                    inline
                    options={quant}
                    defaultValue={1}
                    onChange={(e, { value }) => { if (typeof value === 'number') { setQuantity(value) } }}
                  />{" "}
                  item, please.
                </div>
                <Divider />
                <Button
                  icon
                  labelPosition="left"
                  color="orange"
                  fluid
                  onClick={async () => await addItemToCart(product, quantity) }
                >
                  <Icon name="cart" />
                  <ButtonStyle>Add to Cart</ButtonStyle>
                </Button>
                <Divider />
                <Button icon labelPosition="left" color="grey" fluid>
                  <Icon name="list" />
                  <ButtonStyle>Add to Wish List</ButtonStyle>
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

const styles = {
  marginLeft: "1em",
  marginRight: "1em",
  marginTop: "2em",
};

const PriceText = styled.div`
  font-size: 14pt;
  color: #b12704;
`;

const StockText = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 14pt;
  color: #008a00;
`;

const InfoText = styled.div`
  font-size: 10pt;
`;

const ButtonStyle = styled.div`
  padding-left: 2em;
`;
