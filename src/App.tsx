import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './AppStyles';
import { Account } from './pages/Account/Account';
import { Item } from './pages/Content/components/Movie/Movie';
import { MovieList } from './pages/Content/components/MovieList/MovieList';
import { Content } from './pages/Content/Content';
import { Header } from './pages/Header/Header';
import { Main } from './pages/Main//Main';
import store from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Actors } from './pages/Content/components/Movie/components/Actors';
import { Collection } from './pages/Content/components/Movie/components/Collection/Collection';
import { InfiniteMovieList } from './pages/InfiniteMovieList/InfiniteMovieList';

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
                <Route index element={<MovieList />} />
                <Route path=':id' element={<Item />} />
                <Route path='actors/:id' element={<Actors />} />
                {/* <Route path=':id' element={<Item />}>
                  <Route path='actors' element={<Actors />} />
                </Route> */}
                <Route path='collection/:id' element={<Collection />} />
              </Route>
              <Route path='infiniteList' element={<InfiniteMovieList />} />
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
