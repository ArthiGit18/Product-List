import React from 'react'
import {Button, TextField, Link} from '@mui/material'
import { withRouter } from "./utils";
import swal from "sweetalert";
// const axios = require("axios");
import axios from 'axios';
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    login = () => {
      const pwd = bcrypt.hashSync(this.state.password, salt);
  
      axios.post('http://localhost:2000/login', {
        username: this.state.username,
        password: pwd,
      }).then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.id);
        // this.props.history.push('/dashboard');
        this.props.navigate("/dashboard");
      }).catch((err) => {
        if (err.response && err.response.data && err.response.data.errorMessage) {
          swal({
            text: err.response.data.errorMessage,
            icon: "error",
            type: "error"
          });
        }
      });
    }
  
    render() {
    return (
        <div className='container'>
            <div className='login_wrapper'>
                <div className='login_outlook'>
                    <div className='form_list'>
                        <h2 style={{marginBottom: "20px"}}>Please Login to Continue</h2>
                        <TextField
                            id="standard-basic"
                            type="text"
                            autoComplete="off"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                            placeholder="User Name"
                            required
                        />
                        <br /><br />
                        <TextField
                            id="standard-basic"
                            type="password"
                            autoComplete="off"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Password"
                            required
                        />
                        <br /><br />
                        <Button
                            className="button_style"
                            variant="contained"
                            // color="primary"
                            size="small"
                        disabled={this.state.username == '' && this.state.password == ''}
                        onClick={this.login}
                        >
                            Login
                        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link
                            // href="/register"
                            component="button"
                            style={{ fontFamily: "inherit", fontSize: "inherit" }}
                        onClick={() => {
                            this.props.navigate("/register");
                        }}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default withRouter(Login);