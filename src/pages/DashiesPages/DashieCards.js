import React, { useState } from 'react';
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function DashieCards() {
    return (
        <div class="card">
            <div class="content">
                <div class="header">
                    Koyuki
                </div>
                <div class="description">
                    Koyuki has requested for: Insurance A Policy B
                </div>
                <div class="extra content">
                    <Button color="green" floated="right" as={Link} to="/customers" animated>
                        <Button.Content visible>
                        Check
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow right" />
                        </Button.Content>
                        
                        
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DashieCards;