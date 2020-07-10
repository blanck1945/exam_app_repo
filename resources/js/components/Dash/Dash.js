import React, { useContext, useEffect, useState } from 'react'
import { userContext, materiaContext } from '../Context/UserContext'
import { fetchMaterias } from '../AxiosFunc/Func'
import { useHistory } from 'react-router-dom'

import "./Dash.scss"

const Dash = () => {

    const { user } = useContext(userContext)
    const { setMateriaQuery, materiaQuery } = useContext(materiaContext)
    const [materias, setMaterias] = useState([])
    const history = useHistory()

    useEffect(() => {
        handlerEffect(user)
    }, [])
    const handlerEffect = async user => {
        console.log(user.id)
        const { id } = user
        setMaterias(await fetchMaterias(id))
        setMateriaQuery(await fetchMaterias(id))

    }

    console.log(materias)
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
                    {materias.length !== 0 ? materias.map(el =>
                        <div className="examBoxRow" key={el.id}>
                            <h4>{el.id}</h4>
                            <h4>{user.name}</h4>
                            <h4>{el.materia_name}</h4>
                            <button className="generalBtn" onClick={() =>
                                history.push("/exam")}>Rendir</button>
                        </div>)
                        : []
                    }
                </div>
            </div>
        </div>
    )
}

export default Dash
