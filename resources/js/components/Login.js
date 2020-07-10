import React from 'react'
import { useForm } from 'react-hook-form';
import { fetchMaterias } from "./AxiosFunc/Func"

import "../../sass/Login.scss"
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => handlerLog(data)

    const handlerLog = async data => {
        const id = await fetchUser(data)
        const materias = await fetchMaterias(id)
        history.push("/dash")
    }

    return (
        <div className="logBox">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="register">Login</h3>
                <div className="formBox">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" ref={register} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" ref={register} />
                    <button className="logBtn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
