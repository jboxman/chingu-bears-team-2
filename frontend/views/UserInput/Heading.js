import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export const Heading = (props) => {
    return(
        <Header as='h1' className='mock-inputs-header' textAlign='center' size='huge'>Welcome to THIS SITE? {props.username}!<br/> </Header>
        )
}