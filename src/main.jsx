import React from 'react';
import ReactDOM from 'react-dom/client'; // Mudei aqui, vai que dá algo

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// ReactDOM.render(
//   <App />, document.getElementById('root'),
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);