import React, { useEffect, useState, useContext } from 'react'

import "../../sass/Exam.scss"
import { fetchQuestions } from './AxiosFunc/Func'
import { materiaContext } from './Context/UserContext'

const Exam = () => {

    const [questions, setQuestions] = useState()
    const { materiaQuery } = useContext(materiaContext)
    const [loading, setLoading] = useState(false)
    console.log(materiaQuery.id)

    useEffect(() => {
        axiosEffect(1)
    }, [])

    const axiosEffect = async materiaId => {
        console.log(materiaId)
        setLoading(true)
        setQuestions(await fetchQuestions(materiaId))
        setLoading(false)
    }

    console.log(questions)
    return (
        <div className="examClass">
            <div className="examCenterBox">
                <div className="questionsBox">
                    <h3 className="register">Preguntas</h3>
                    <div className="quest">

                    </div>
                </div>
                <div className="questionsData">
                    <h3 className="register">Revise sus repuestas antes de finalizar</h3>
                </div>
            </div>
            <div className="examQuestions">

            </div>
        </div>
    )
}

export default Exam
