import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import OrdersPage from './pages/OrdersPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={ <MainPage /> } />
          <Route path='login' element= { <LoginPage/> } />
          <Route path='register' element= { <RegisterPage/> } />
          <Route path='cart' element= { <ShoppingCartPage/> } />
          <Route path='orders' element= { <OrdersPage/> } />
          <Route path='error' element= { <ErrorPage/> } />
          <Route path='*' element= { <NotFoundPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
