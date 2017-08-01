import React, { Component } from 'react'
import { Message, Icon } from 'semantic-ui-react'

const list = [
    'Please fill out the following form to create your user profile',
    'You can enter basic information, a bio, a cover photo, a profile photo and more',
    'Make sure to fill out the Front End Framework Skill Tree',
    'Our 5 star system is quick and easy to understand',
    'Everything is optional.  But the more we know the more we can help'
    ]

export const WelcomeMessage = () => {
    return(
    <Message icon compact>
        <Icon name='slack'/>
        <Message.List items={list}/>
    </Message>
             )
}