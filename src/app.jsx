import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles.scss';

global.jQuery = require('jquery');

ReactDOM.render(
    <h1>Hello From React JSX!</h1>,
    document.getElementById("root")
);