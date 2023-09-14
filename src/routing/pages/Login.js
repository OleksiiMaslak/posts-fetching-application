import React from 'react'
import MyInput from '../../components/UI/input/MyInput'
import MyButton from '../../components/UI/button/MyButton'

const Login = () => {
  return (
    <div>
        <h1>Login page</h1>
        <form>
            <MyInput type='text' placeholder='enter the login'></MyInput>
            <MyInput type='password' placeholder='enter the password'></MyInput>
            <MyButton>enter</MyButton>
        </form>
    </div>
  )
}

export default Login