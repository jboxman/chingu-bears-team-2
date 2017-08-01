import React, { Component } from 'react'
import { Card, Image, Tab, Progress, Button, Grid } from 'semantic-ui-react'
import { data } from './json.js'
import App from './App.js'
import HTMLSkillsModal from './SkillModals/Html.js'
import ContactAboutSkills from './SkillModals/Contact.js'
import MockTags from './Tags/MockupTags.js'
  

  
  
export default class MockProfile extends Component {
    constructor(){
        super();
        this.state = {
            data: data[0]
        }
    }
    
    render(){
        const panes = [
  { menuItem: 'HTML', render: () => 
  <Tab.Pane>
  <Progress value={this.state.data.html[0].overall} total={5} label='Overall'/>
  <HTMLSkillsModal/><ContactAboutSkills/>
  </Tab.Pane> },
  { menuItem: 'CSS', render: () => <Tab.Pane></Tab.Pane> },
  { menuItem: 'Javascript', render: () => <Tab.Pane></Tab.Pane> }
]
        return(
            <div>
            <App/>
            <Grid stackable centered>
            <Grid.Column width={8}>
            <Card id='mock-card' raised>
            <div id='mock-card-cover'>
            <Image src={this.state.data.picture}/>
            </div>
            <Card.Content>
            <Card.Header>{this.state.data.username}</Card.Header>
            <Card.Description>
            {this.state.data.about}
            </Card.Description>
            <Tab panes={panes}/>
             <div className='mock-tags-wrapper'>
            <MockTags/>
           
            </div>
            </Card.Content>
           
            </Card>
            </Grid.Column>
            <Grid.Column width={8}>
            </Grid.Column>
            </Grid>
            </div>
            )
    }
}