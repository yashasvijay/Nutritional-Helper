// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>
);

reportWebVitals();