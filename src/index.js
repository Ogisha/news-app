import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import NewsAppMainRouter from './routers/NewsAppMainRouter';

ReactDOM.render(<NewsAppMainRouter />, document.querySelector("#app"));
