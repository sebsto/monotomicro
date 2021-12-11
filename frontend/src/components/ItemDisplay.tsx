// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import { Grid, Image, Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatCurrency } from "../services/Currency";
import { IItemDisplay } from "../context/Types"

export function ItemDisplay(props: IItemDisplay) {
  if ( props.item === undefined ) {
    return <div>props.item is undefined</div>
  }

  var stars;
  var itemStars = Math.floor(Math.random() * 6);
  var totalChits = 0;
  var i;

  for (i = 0; i < 5; i++) {
    if (i <= itemStars - 1) {
      stars = [stars, <Icon color="yellow" name="star" key={Math.random()} />];
      totalChits++;
    }
  }
  for (i = 0; i < 5 - totalChits; i++) {
    stars = [
      stars,
      <Icon color="yellow" name="star outline" key={Math.random()} />,
    ];
  }

  return (
    <Grid.Column>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Link to={"/product/" + props.item.id}>
              <Image src={"/img/products/" + props.item.image} centered />
            </Link>
            <Container style={{ paddingLeft: "2em" }}>
              <LinkStyle>
                <Link to={"/product/" + props.item.id}>
                  {props.item.name}
                </Link>
              </LinkStyle>
              <StoreText>{props.item.desc}</StoreText>
              {stars}
              <Grid columns={2}>
                <Grid.Column width={3}>
                  <PriceText>{formatCurrency(props.item.price)}</PriceText>
                </Grid.Column>
              </Grid>
              {props.item.stock > 0 && (
                <StockText>{props.item.stock} in stock</StockText>
              )}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
  );
}

const LinkStyle = styled.div`
  font-size: 1em;
`;

const StoreText = styled.div`
  font-size: 10pt;
  padding-top: 1em;
`;

const PriceText = styled.div`
  font-size: 10pt;
  padding-top: 1em;
  color: #b12704;
`;

const StockText = styled.div`
  font-size: 10pt;
  padding-top: 1em;
  color: #008a00;
`;
