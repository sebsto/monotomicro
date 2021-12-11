import React, { ReactElement, useState, useContext } from 'react';
import '../App.css';
import { Container, Header } from 'semantic-ui-react'

import { Cart } from '../context/Types'
import { AppContext } from "../context/AppProvider"
import { TopMenu } from '../components/TopMenu'
import { ItemTable } from '../components/ItemTable'


export function Main() : ReactElement {
  
  console.log('Main')

  const [ cart ] = useState<Cart>(useContext(AppContext).cart);
  console.log('Main - Cart from context')
  console.log(cart)


  return (
      <div style={styles}>
          <TopMenu cart={ cart }/>
          <Container text style={{ marginBottom: '1em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}>My AWSome Unicorn Accessories Store</Header>
          </Container>   
          <Container style={{ marginTop: '2em' }}>
                <ItemTable type='echo' />
          </Container>                 
      </div>
  );
}

const styles = {
  marginLeft: '1em',
  marginRight: '1em'
}

