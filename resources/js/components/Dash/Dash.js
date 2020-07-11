import React, { useContext, useEffect, useState } from 'react'
import { userContext, materiaContext } from '../Context/UserContext'
import { fetchMaterias, useAxios, API } from '../AxiosFunc/Func'
import { useHistory } from 'react-router-dom'

import "./Dash.scss"

const Dash = () => {

    const { user } = useContext(userContext)
    const { setMateriaQuery } = useContext(materiaContext)
    const history = useHistory()

    const { data, loading } = useAxios(`${API}student_materia/${user.id}`)

    const handlerRendir = id => {
        setMateriaQuery({ materiaId: id })
        setTimeout(() => {
            history.push("/exam")
        }, 500)
    }
    return (
        <div className="dash">
            <div className="dashBox">
                <div className="dashSide">
                    <h3 className="register">Bienvenido {user.name}</h3>
                    <div className="sideItems">Reglas</div>
                    <div className="sideItems">Notas</div>
                    <div className="sideItems">Atras</div>
                </div>
                <div className="examBox">
                    <h3 className="register">Examanes para rendir</h3>
                    <div className="examBoxRow first">
                        <h4>Id</h4>
                        <h4>Nombre</h4>
                        <h4>Materia</h4>
                        <h4>Estado</h4>
                    </div>
                    {loading === false ? data.map((el, index) =>
                        <div className="examBoxRow" key={index}>
                            <h4>{el.id}</h4>
                            <h4>{user.name}</h4>
                            <h4>{el.materia_name}</h4>
                            <button className="generalBtn" onClick={() => handlerRendir(el.id)}>Rendir</button>
                        </div>)
                        : "Loading..."
                    }
                </div>
            </div>
        </div>
    )
}

export default Dash
