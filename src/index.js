import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import AuthProvider from './Context/AuthContext';
import SalesProvider from './Context/SalesContext';
import MapProvider from './Context/MapContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SalesProvider>
     <MapProvider>
      <AuthProvider>
        <App /> 
      </AuthProvider>
    </MapProvider> 
    </SalesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
