import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Import FCC Test Suite
const fcc = document.createElement('script');
fcc.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
document.head.appendChild(fcc);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
