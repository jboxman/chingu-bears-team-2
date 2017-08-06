import React, { Component } from 'react'
import {Modal, Button, Form, Input } from 'semantic-ui-react'

import App from '../App.js' 

export default class UserLogin extends Component {
    constructor(){
        super()
        this.state = {
            error: '',
            errore: '',
            emailerror: false,
            passworderror: false,
            form: {
                email:'',
                password: ''
            }
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    handleChange(prop,e){
        const form = this.state.form
        form[prop] = e.target.value
        this.setState({form:form})
    }
    handleLogin(){
        let e = this.state.form.email
        let p = this.state.form.password
        
        if(p.length<8){
            this.setState({
                error: "password to short",
                passworderror: true
            })
        }
        if(e.includes('@')===false){
            this.setState({
                errore: "email is not valid",
                emailerror: true
            })
        }
    }
    render(){
        return(
            <div id='login-wrapper'>
            <App/>
            <Modal defaultOpen size='tiny'>
            <Modal.Header>Mock Login</Modal.Header>
            <Modal.Content>
            <Form>
            <Form.Input label='Email' 
                        type='email' 
                        placeholder='Enter your email' 
                        onChange={this.handleChange.bind(this,'email')} 
                        value={this.state.form.email}
                        error={this.state.emailerror}/>
            <Form.Input label='Password' 
                        type='password' 
                        placeholder='Enter your password' 
                        onChange={this.handleChange.bind(this,'password')} 
                        value={this.state.form.password}
                        error={this.state.passworderror}/>
            <Button onClick={this.handleLogin}>Login</Button>
            <p>{this.state.error}</p>
            <p>{this.state.errore}</p>
            </Form>
            </Modal.Content>
            </Modal>
            </div>
            )
    }
}