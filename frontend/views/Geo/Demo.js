import React,{Component} from 'react'
import App from '../App.js'

export default class Demo extends Component {
    constructor(){
        super()
        this.state = {
            initialState:{
                lat:'',
                lon:''
            }
        }
        this.geoInit = this.geoInit.bind(this)
    }
    componentWillMount(){
        this.geoInit()
    }
    geoInit(){
    if ("geolocation" in window.navigator) {
        window.navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            let initialState = {lat: lat,lon:lon}
           this.setState({initialState})
});
} else {
    alert("you dont have geolocation")
 
}
    }
    render(){
        return(
    <div>
    <App/>
    <h1>your lat is: {this.state.initialState.lat}</h1>
    <h1>your lon is: {this.state.initialState.lon}</h1>
    <h1>GEOLOCATION YES!</h1>
    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.initialState.lat},${this.state.initialState.lon}&zoom=14&size=500x500&sensor=false`}/>
    </div>
            )
    }
}