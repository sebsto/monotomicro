// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Link } from "react-router-dom";
import { Grid, Header, Image } from 'semantic-ui-react'

export function OrderConfirmed() {
    return (
        <Link to="/">
        <Grid columns={2} style={topBanner}>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Image src='/img/store-logo.svg' style={logoStyle} />
                </Grid.Column>
                <Grid.Column width={12} verticalAlign='middle' textAlign='center' style={headerStyle}>
                    <Header as='h1' textAlign='center'>Order Completed</Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Link>
    )
}

const topBanner = {
    background: 'url(/img/header-bkg.png)',
    borderColor: '#DDD',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    height: '73px'
}

const logoStyle = {
    marginRight: '1.5em', 
    marginLeft: '4em', 
    marginTop: '5px'
}

const headerStyle = {
    marginTop: '5px'
}