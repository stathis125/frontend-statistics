import React, { Component } from 'react';
import {
    Box,
    Card,
    Anchor
} from 'grommet';
import logo from './logo.svg';
import 'grommet/grommet.min.css';

const Employee = () => {
    return (
        <Box>
            <Card thumbnail='/img/carousel-1.png'
                label='Empoyee something'
                heading='Something else'
                description='Sample description providing more details.'
                link={<Anchor href=''
                    label='edit' />}
            />
        </Box>
    );
};

export default Employee;