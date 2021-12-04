import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './AppStyles';
import { Content } from './pages/Content/Content';
import { Header } from './pages/Header/Header';
import { Main } from './pages/Main//Main';
import store from './store/store';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/content/:id' element={<Content />} />
            <Route path='*' element={<h2>Ресурс не найден</h2>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
