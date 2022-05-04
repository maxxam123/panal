// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/userContext/UserContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { SlidersContextProvider } from './context/sliderContext/SlidersContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <UserContextProvider>
          <SlidersContextProvider>
            <App />
          </SlidersContextProvider>
        </UserContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
