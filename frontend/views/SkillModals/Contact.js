import React, { Component } from 'react'
import { Button, Modal, Form, Input, TextArea } from 'semantic-ui-react'
import { data } from '../json.js'

export default class ContactAboutSkills extends Component {
    constructor(){
        super()
        this.state = {
            data: data[0]
        }
    }
    render(){
        return(
            <Modal 
            size='small'
            trigger={<Button>Send a Message to {this.state.data.username}</Button>}
            dimmer='blurring'
            >
            <Modal.Header>Contact {this.state.data.username}</Modal.Header>
             <Modal.Content>
             <Form>
             <TextArea autoHeight placeholder='Type Message Here' style={{ minHeight: 100 }} />
             </Form>
             </Modal.Content>
             <Modal.Actions>
             <Button>Connect-Will Need onClick fn</Button>
             </Modal.Actions>
            </Modal>
            )
        
    }
    
}  