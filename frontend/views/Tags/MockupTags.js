import React, { Component } from 'react'
import { Icon, Label, Button, Input } from 'semantic-ui-react'
import { data } from '../json.js'


class MockTags extends Component {
    constructor(){
        super()
        this.state = {
            tags: data[0].tags,
            value: ''
        }
        this.addTags = this.addTags.bind(this)
        this.rmTags = this.rmTags.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e,d){
    let newState = d.value
    this.setState({
        value: newState
    })
    }
    addTags(){
    console.log(this.state.tags)
    let temp = this.state.value
    let newState =  this.state.tags.push(temp)
    this.setState({newState})
    this.setState({value: ''})
    }
    rmTags(e,d){
     let tag = d.children[0]
     console.log(tag)
     let arr = this.state.tags
     let newState = arr.filter(function(el){
         return el != tag
     })
     this.setState({tags: newState})
    }
   
   
    render(){
        
            
        return(
            <div className='mock-tags'>
            {this.state.tags.map((tag,i) => <Label key={i} onClick={this.rmTags}>{tag}<Icon name='delete'/></Label> )}
            <div id="mock-tag-edit">
            <Input value={this.state.value} onChange={this.handleChange.bind(this)}/>
            <Button onClick={this.addTags.bind(this)}>Add Tags</Button>
            </div>
            </div>
            )
    }
}

export default MockTags