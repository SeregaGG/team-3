
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

//import Guest from './Desk/Guest'
//import {Switch, Route} from "react-router-dom"

import '../App.css';
import { TextField, Paper, Typography } from '@material-ui/core';
//import { auto } from '@popperjs/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';





/* constructor(props) {
super(props);
this.handleSubmit = this.handleSubmit.bind(this);
this.state = {login: '', password: ''};

};


handleSubmit = () => {
    //window.location.assign('http://localhost:3000/guests');
}; */
const useStyles = makeStyles({
    tocenterstyle:{
      display: "flex",
      width: 100
    },
    paperstyle:{
      height: 450,
      width: 400,
      
    },
    typostyle:{
      align: 'center',
      fontSize: 24
    },

    buttonstyle:
    {
      background: "ff3366"
    },

    paperimgstyle:
    {
      height: 100,
      width: 100,
      
    },

    roundtry:{
      borderRadius: 25,
    }

  });

  const theme = createMuiTheme({
    palette: {
      primary: red,
    }

  }) ;




export default function LogIn(){

    const regstyles = useStyles();;


return (

    <div className="flx1">
    <div className="flx2">
    <Paper elevation = {3} className={regstyles.roundtry} variant = "elevation" theme={theme}>
        
        <div className="flx4">
          <div>
            <form style = {{padding: "40px"}} className="flx3" >
              
              {/* <p className = "divvv"  ><label className = "inputs" > Логин: <input type="text" name="login" value={this.state.login}  onChange={this.onChangeLogin}/></label></p>
              <p className = "divvv" > <label className = "inputs" > Email: <input type="text" name="email" value={this.state.email}  onChange={this.onChangeEmail}/></label></p>
              <p className = "divvv" ><label className = "inputs" > Пароль: <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword}/></label></p>  */}
              <Typography variant="h6"  className={regstyles.typostyle}>Авторизация</Typography>
              <p style = {{paddingBottom: "1%" }} ><TextField id="standerd-basic" label = "Логин" type="text" name = "login" /></p>
              <p style = {{paddingBottom: "1%" }}><TextField id="standerd-basic" label = "Пароль" type="password" name = "password"/></p>
              <div style = {{paddingTop: "10%"}}>
                  <Button style = {{marginRight: "3%"}} className={regstyles.buttonstyle}variant="outlined" color="primary">Вход</Button>
                  
              </div>
              
            </form>
          </div>
          {/* <div>
            <Paper className={regstyles.paperimgstyle} elevation = {12}>
              <Typography></Typography>
            </Paper>
          </div> */}
         
          
        </div>
        
      


    </Paper>
    <div className="regimg">

    </div>
    </div>
    
  </div>
    /* <div>

    <form className="but" action="/auth/:id">      

        <p><TextField id="standerd-basic" label = "Логин" type="text" name = "login" /></p>
        <p><TextField id="standerd-basic" label = "Пароль" type="password" name = "password"/></p>
        <p style = {{padding: 30}}></p>
        <Button style = {{alignItems: 'center'}} type="submit" onclick={this.handleSubmit} variant="contained">Войти</Button>
        <Button style = {{alignItems: 'center'}}  href='/' variant="contained">Отмена</Button>
        
    </form>

</div> */
);
}
