import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Step } from 'semantic-ui-react';

const Steps = () => (
            <Step.Group ordered size='tiny' style={{marginTop: '20px', width: '100%'}}>
                <Step active >
                    <Step.Content>
                        <Step.Title>Registration</Step.Title>
                        <Step.Description>Fill the fields below</Step.Description>
                    </Step.Content>
                </Step>

                <Step>
                    <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                    </Step.Content>
                </Step>

                <Step>
                    <Step.Content>
                        <Step.Title>Profiles</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
);


Steps.propTypes = {};

export default Steps;
