import React, { useState } from 'react';
import Title from '../../components/title';
import Headers from '../../components/header'
import { Button } from 'semantic-ui-react';
import VisitorItems from './VisitorItems';


function Visitor() {
    

    return (
        <div>
            <Title title="View Customers" />
            <Headers />
            <div class="ui container">
                <h1 class="welcome">View Customers</h1>
                <div class="ui raised segment divided items">
                    <VisitorItems />
                    <VisitorItems />
                    <VisitorItems />
                    <VisitorItems />
                    

                </div>
            </div>

        </div>
    )
}

export default Visitor;