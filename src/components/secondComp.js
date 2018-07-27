import React from 'react';
import { Link, Route } from 'react-router-dom';
import Third from './thirdComp';

const Second = () => (

    <div>
        <div>
            <Link to="/2/1">To Nested component!</Link>
        </div>
        <hr/>
        <Route path="/2/1" component={Third}/>
    </div>
)

export default Second
