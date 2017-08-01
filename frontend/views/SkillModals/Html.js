import React, { Component } from 'react'
import { Button, Modal, Progress, Grid, Popup } from 'semantic-ui-react'
import { data } from '../json.js'

export default class HTMLSkillsModal extends Component {
    constructor(){
        super()
        this.state = {
            data: data[0]
        }
    }
    render(){
        return(  
   <Modal size='small'
          dimmer='blurring'
          closeIcon
          className='skill-modal'
          trigger={<Button>{this.state.data.username+"'s"} HTML Skills</Button>}>
    <Modal.Header>HTML Skills Breakdown</Modal.Header>
    <Modal.Content>
    <Grid stackable>
    <Grid.Row columns={2}>
    <Grid.Column>
      <Progress value={this.state.data.html[0].forms} 
                label='HTML5 Forms'
                total={5} />
      <Progress value={this.state.data.html[0].webapis} 
                label='Web Apis - Audio, Canvas, Etc...'
                total={5} />
    </Grid.Column>
  
    <Grid.Column>
      <Progress value={this.state.data.html[0].svg} 
                label='SVG - Scalable Vector Graphics'
                total={5} />
      <Progress value={this.state.data.html[0].semantic} 
                label='HTML5 Semantics'
                total={5} /> 
    </Grid.Column>
    </Grid.Row>
    </Grid>
      <Modal.Description>

      </Modal.Description>
      
    </Modal.Content>
  </Modal>
            )
    }
}