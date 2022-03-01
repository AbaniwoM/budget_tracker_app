import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider }  from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="b8def5aa-1c17-4e14-8418-5481347eabb1" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);