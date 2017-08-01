import React, { Component } from 'react'
import { Header, Message, Icon } from 'semantic-ui-react'

const list = [
    'Rate yourself on a scale of 0 to 5 stars',
    'Zero means that you have no knowledge of, or experience in the given sub-skill',
    'Five stars mean that you are a modern day master of that given sub-skill',
    'Obviously, these ratings a subjective, just do your best',
    'You can always come back and change these as you learn and grow'
    ]
const header = 'Testing shorthand'

export const SkillMessage = () => {
    return(
        <div id='mock-skill-msg'>
        <Header as='h1' textAlign='center'>Skill Tree - Front End Fundementals</Header>
        <Message icon>
        <Icon name='slack'/>
        <Message.List items={list}/>
        </Message>
        </div>
        )
}