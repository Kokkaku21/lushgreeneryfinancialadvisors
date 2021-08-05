import React, { useState } from 'react';
import Title from "../components/title";
import Helmet from "react-helmet";
import {Link} from "react-router-dom"





function Login() {


    return (
        <div class="ui container">
            <Title title="Welcome!" />
            <Helmet bodyAttributes={{style:'background-color : #ACD1AF'}}/>
                <div class="ui large container center aligned grid">
                    <div class="column">


                        <h2>
                            <div class="content" id="headlogin" style={{color: "white"}}>Lush Greenery For Financial Advisors</div>
                        </h2>

                        <form class="ui large form">
                            <div class="ui raised segment">
                                <h4 class="ui left floated">Login</h4>
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="user icon"></i>
                                        <input type="text" name="email" placeholder="Email/Username"></input>
                                    </div>

                                </div>
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="lock icon"></i>
                                        <input type="password" name="password" placeholder="Password"></input>
                                    </div>
                                </div>

                                <div class="ui error message"></div>
                            </div>
                        </form>
                        <div class="ui large container center aligned grid">
                            <Link class="ui teal animated left floated submit button" tabindex="0" to="/home">
                                <div class="visible content">Login!</div>
                                <div class="hidden content">
                                    <i class="right arrow icon"></i>
                                </div>
                            </Link>

                            <Link class="ui green animated right floated submit button" tabindex="0" to="/register">
                                <div class="visible content">Register Here!</div>
                                <div class="hidden content">
                                    <i class="right arrow icon"></i>
                                </div>
                            </Link>
                        </div>



                    </div>
                </div>
            

        </div>
    )
}

export default Login;