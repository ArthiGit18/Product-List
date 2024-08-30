import React from 'react'
import {Button, TextField, Link} from '@mui/material'

const Login = () => {
    return (
        <div className='container'>
            <div className='login_wrapper'>
                <div className='login_outlook'>
                    <div className='form_list'>
                        <TextField
                            id="standard-basic"
                            type="text"
                            autoComplete="off"
                            // name="username"
                            // value={this.state.username}
                            // onChange={this.onChange}
                            placeholder="User Name"
                            required
                        />
                        <br /><br />
                        <TextField
                            id="standard-basic"
                            type="password"
                            autoComplete="off"
                            name="password"
                            // value={this.state.password}
                            // onChange={this.onChange}
                            // placeholder="Password"
                            required
                        />
                        <br /><br />
                        <Button
                            className="button_style"
                            variant="contained"
                            color="primary"
                            size="small"
                        // disabled={this.state.username == '' && this.state.password == ''}
                        // onClick={this.login}
                        >
                            Login
                        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link
                            // href="/register"
                            component="button"
                            style={{ fontFamily: "inherit", fontSize: "inherit" }}
                        // onClick={() => {
                        //     this.props.navigate("/register");
                        // }}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login