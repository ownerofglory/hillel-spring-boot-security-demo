import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthProps } from '../model/props/AuthProps'
import authService from '../service/authService'

const LogoutPage: React.FC<AuthProps> = ({onLogout}) => {
    const navigate = useNavigate()
    useEffect(() => {
        authService.logout(onLogout).then(resp => {
            if (resp.ok) {
                onLogout()
                navigate('/')
            } else {
                navigate('/error')
            }
        })
        navigate('/')
    
      return () => {
        
      }
    }, [])
    

  return (
    <div></div>
  )
}

export default LogoutPage