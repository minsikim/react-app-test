import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle={'This a a prop from index.js'}/>, document.getElementById('root'));
registerServiceWorker();
