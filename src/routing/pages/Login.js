import React, { useContext } from 'react'
import MyInput from '../../components/UI/input/MyInput'
import MyButton from '../../components/UI/button/MyButton'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/Authentification/Authentification.slice';


const Login = () => {

  const isAuth = useSelector(state => state)
  const dispatch = useDispatch()
  const openAcces = actions.openAccess;

  const login = event => {
    event.preventDefault()
    dispatch(openAcces())
    localStorage.setItem('auth', 'true')
  }


  return (
    <div>
        <h1>Login page</h1>
        <form>
            <MyInput type='text' placeholder='enter the login'></MyInput>
            <MyInput type='password' placeholder='enter the password'></MyInput>
            <MyButton onClick={login}>enter</MyButton>
        </form>
    </div>
  )
}

export default Login