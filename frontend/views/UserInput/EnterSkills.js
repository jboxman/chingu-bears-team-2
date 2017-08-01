import React, { Component } from 'react'
import { Form, Input, Header, Button, Grid, Segment, Icon, Rating } from 'semantic-ui-react'
import { data } from '../json.js'
import App from '../App.js'
import { Heading } from './Heading.js'
import { WelcomeMessage } from './WelcomeMsg.js'
import { SkillMessage } from './SkillMsg.js'



const options = [
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'o', text: 'Other', value: 'other' }
]

export default class MockInputs extends Component {
    constructor(){
        super()
        this.state = {
            data: data[0],
            loading: true,
            form: {
                firstname: '',
                lastname: '',
                gender: '',
                bio: ''
            },
            rates: {
                htmlo: 0,
                htmlf: 0,
                htmls: 0,
                htmlse: 0,
                htmlw: 0,
                csso: 0,
                cssb: 0,
                cssr: 0,
                cssf: 0,
                cssa: 0,
                jso: 0,
                jsr: 0,
                jsa: 0,
                js2: 0,
                jsj: 0
            },
           geo: {
               lat: '',
               lon: ''
           },
           city: ''
            
        }
        this.geoInit = this.geoInit.bind(this)
     
    }
    
    componentWillMount(){
        this.geoInit()
    }
    
     geoInit(){
          let lat;
         let lon;
         let reverse;
          function reverseGeo(){
     window.fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBLlSizwtPwzALlGiLL-f5JhCLCTC8ZqUA`)
.then( res => res.json() )
.then( data => reverse=data)
.then( data => this.setState({
    city: reverse.results[1].formatted_address
}))
 }
        
         if ("geolocation" in window.navigator) {
        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
              lat = position.coords.latitude
              lon = position.coords.longitude
            let geo = {lat: lat,lon:lon}
           this.setState({geo})
           this.setState({loading: false})
           setTimeout(reverseGeo.bind(this),1000)
});
         
} else {
    alert("you dont have geolocation")
    /*let geo;
     window.fetch('http://ip-api.com/json')
     .then( res => res.json() )
     .then( data => geo = data)
     .then( data => this.setState({
      lat: geo.lat,
      lon: geo.lon,
      city: geo.city,
      zip: geo.zip,
      loading: false
     }))
     .catch( err => console.log(err))*/
  }
}
  handleChange(prop,e){
        const form = this.state.form
        form[prop] = e.target.value
        this.setState({form:form})
    }
    
  handleSelect(prop,e,d){
     let form = this.state.form
     form[prop] = d.value
      this.setState({form:form})
  }
  
  handleRate(prop,e,d){
      let rates = this.state.rates
      rates[prop] = d.rating
      this.setState({rates:rates})
  }
  
  handleData(){
    console.log(this.state.rates)  
    let file = document.getElementById('cover-photo').files[0].name
    console.log(file)
  }
    render(){
        return(
    <div id='mock-inputs-wrap'>
      
        <App/>
      
        <Grid columns={1} centered>
        
         <Grid.Column width={12}>
         
            <Heading username={this.state.data.username}/>
            <WelcomeMessage/>
            
            <Form id='mock-input-form' loading={this.state.loading}>
              <Header as='h3'>Biographical Information</Header>
              <Form.Group widths='equal'>
                <Form.Input label='First name' placeholder='First name' onChange={this.handleChange.bind(this,'firstname')} value={this.state.form.firstname} />
                <Form.Input label='Last name' placeholder='Last name' onChange={this.handleChange.bind(this,'lastname')} value={this.state.form.lastname}/>
                <Form.Select label='Gender' options={options} placeholder='Gender' onChange={this.handleSelect.bind(this,'gender')} value={this.state.form.gender} />
              </Form.Group>
               
                <Form.TextArea label='Tell Us A Little Bit About Yourself' 
                            placeholder='We should set a limit here for formatting reasons in the profile'
                            onChange={this.handleChange.bind(this,'bio')}
                            value={this.state.form.bio}/>
                
                <Header as='h3'>Photo Uploads</Header>
                <div id='mock-photo-uploads'>
                <Input id='cover-photo' type='file' as='Button' label='Cover Photo' labelPosition='right corner'/>
                <Input type='file' as='Button' label='Profile Photo' labelPosition='right corner'/>
                </div>
                
                <Header as='h3'>Location Information</Header>
                <Segment as='h4' raised textAlign='center'>
                 * We attempt to gather location data to help connect you in your community&nbsp;
                 <Icon name='users'/>
                </Segment>
             
              <Form.Group>
                <Form.Input label='City' width={8} value={this.state.city} readOnly={this.state.city.length>0}/>
                <Form.Input label='Latitude' width={4} value={this.state.geo.lat} readOnly={this.state.geo.lat.length>0}/>
                <Form.Input label='Longitude' width={4} value={this.state.geo.lon} readOnly={this.state.geo.lon.length>0}/>
              </Form.Group>
              </Form>
              
          
             
             <SkillMessage/>
             <Grid id='ratings-wrapper' columns ={3} relaxed padded stackable container>
             
             <Grid.Column width={5} textAlign='center'>
             <Header as='h2' textAlign='center'>HTML</Header>
             <span>Overall:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.htmlo} onRate={this.handleRate.bind(this,'htmlo')}/>
             </span>
             <br/>
             <span>Forms:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.htmlf} onRate={this.handleRate.bind(this,'htmlf')}/>
             </span>
             <br/>
             <span>SVG:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.htmls} onRate={this.handleRate.bind(this,'htmls')}/>
             </span>
             <br/>
             <span>Semantic:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.htmlse} onRate={this.handleRate.bind(this,'htmlse')}/>
             </span>
             <br/>
             <span>Web Apis:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.htmlw} onRate={this.handleRate.bind(this,'htmlw')}/>
             </span>
             
             </Grid.Column>
             <Grid.Column width={6} textAlign='center'>
              <Header as='h2' textAlign='center'>CSS</Header>
             <span>Overall:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.csso} onRate={this.handleRate.bind(this,'csso')}/>
             </span>
             <br/>
             <span>Bootstrap:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.cssb} onRate={this.handleRate.bind(this,'cssb')}/>
             </span>
             <br/>
             <span>Responsive:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.cssr} onRate={this.handleRate.bind(this,'cssr')}/>
             </span>
             <br/>
             <span>Flexbox:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.cssf} onRate={this.handleRate.bind(this,'cssf')}/>
             </span>
             <br/>
             <span>Animation:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.cssa} onRate={this.handleRate.bind(this,'cssa')}/>
             </span>
             <br/>
             </Grid.Column>
             
             <Grid.Column width={5} textAlign='center'>
              <Header as='h2' textAlign='center'>Javascript</Header>
              <span>Overall:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.jso} onRate={this.handleRate.bind(this,'jso')}/>
             </span>
             <br/>
             <span>React:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.jsr} onRate={this.handleRate.bind(this,'jsr')}/>
             </span>
             <br/>
             <span>ES2015:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.js2} onRate={this.handleRate.bind(this,'js2')}/>
             </span>
             <br/>
             <span>Arr/Obj:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.jsa} onRate={this.handleRate.bind(this,'jsa')}/>
             </span>
             <br/>
             <span>JQuery:
             <Rating size='massive' clearable icon='star' maxRating={5} rating={this.state.rates.jsj} onRate={this.handleRate.bind(this,'jsj')}/>
             </span>
             <br/>
             
               </Grid.Column>
               <Button fluid onClick={this.handleData.bind(this)}>Save Your User Profile</Button>
               </Grid>
               
             </Grid.Column>
             </Grid>
            
    </div>
            
           
          
            
            )
    }
}
