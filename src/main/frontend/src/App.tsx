import React, { useEffect, useState } from 'react';
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
import { AuthModel } from './model/AuthModel';

function App() {
  const defaultAuth = {
    token: localStorage.getItem('token') ?? '',
    name: localStorage.getItem('username') ?? '',
    userId: parseInt(localStorage.getItem('userId') ?? '-1')
  }
  const [auth, setAuth] = useState<AuthModel>(defaultAuth)

  useEffect(() => {
    setAuth(defaultAuth)
    
    console.log('render APP. auth:', auth)
    
    return () => {
      
    }
  }, [])
  

  const onLogin = (auth: AuthModel) => {
    setAuth(auth)
    localStorage.setItem('token', auth.token)
    localStorage.setItem('username', auth.name)
    localStorage.setItem('userId', '' + auth.userId)
  }

  const onRegister = (auth: AuthModel) => {
    setAuth(auth)
    localStorage.setItem('token', auth.token)
    localStorage.setItem('username', auth.name)
    localStorage.setItem('userId', '' + auth.userId)
  }

  const onLogout = () => {

  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={ 
              <MainPage auth={auth} /> 
            } />
          <Route path='login' element= { 
              <LoginPage onLogin={(auth: AuthModel) => onLogin(auth)} 
                      onRegister={(auth: AuthModel) => onRegister(auth)} 
                      onLogout={() => onLogout()} /> 
            } />

          <Route path='register' element= { 
              <RegisterPage onLogin={(auth: AuthModel) => onLogin(auth)} 
                      onRegister={(auth: AuthModel) => onRegister(auth)} 
                      onLogout={() => onLogout()} /> 
            } />

          <Route path='cart' element= { 
              <ShoppingCartPage auth={auth} /> 
            } />

          <Route path='orders' element= { 
              <OrdersPage auth={auth} /> 
            } />

          <Route path='error' element= { 
              <ErrorPage auth={auth} /> 
            } />

          <Route path='*' element= { 
              <NotFoundPage auth={auth} /> 
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
