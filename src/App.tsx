import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './AppStyles';
import { Account } from './pages/Account/Account';
import { Item } from './pages/Content/components/Item/Item';
import { List } from './pages/Content/components/List/List';
import { Content } from './pages/Content/Content';
import { Header } from './pages/Header/Header';
import { Main } from './pages/Main//Main';
import store from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const isAuthorized = true;

function App() {
  return (
    <div style={{ margin: 20 }}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
              <Route
                path='/'
                element={
                  <Navigate replace to={isAuthorized ? 'home' : 'account'} />
                }
              />
              <Route path='home' element={<Main />} />

              <Route path='content' element={<Content />}>
                <Route index element={<List />} />
                <Route path=':id' element={<Item />} />
              </Route>
              <Route path='account' element={<Account />} />
              <Route path='*' element={<h2>Ресурс не найден</h2>} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
