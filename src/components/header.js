
import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import styles from './components.css'

function Headies() {
    return (
        <div>
            <div class="ui big secondary menu" style={{backgroundColor: "#ededed"}}>
            <a class="item" style={{color: "green"}} href="/home">Lush Greenery Financial Advisor</a>
            <a class="item" href="/home">Home</a>
            <a class="item" href="/customers">Customers</a>
            <a class="item" href="/profile">Profile</a>
            <a class="item" href="/setting">Settings</a>
            <div class="right menu">
                <a class="ui item" href="/login">Log Out</a>
            </div>
        </div>
        </div>
        
    )
}

export default Headies;