import React, { useContext, useState } from 'react'
import { useAxios, API } from './AxiosFunc/Func'
import { materiaContext, answerContext } from './Context/UserContext'
import { FiCircle } from "react-icons/fi"
import { IoMdCheckmarkCircle } from "react-icons/io"
import Timer from "react-compound-timer"
import Modal from 'react-modal';

import "../../sass/Exam.scss"
import { customStyles } from './ModalContent'

const Exam = () => {

    const { materiaQuery } = useContext(materiaContext)
    const { exam, setExam } = useContext(answerContext)
    const { data, loading } = useAxios(`${API}questions/${materiaQuery.materiaId}`)


    const [questNum, setQuestNum] = useState(0)
    const [select, setSelect] = useState(0)
    const [modalIsOpen, setIsOpen] = useState(false);
    const { title } = data[questNum] ? data[questNum] : "this is the question"

    const handlerExam = async (questId, resId) => {

        const res = Object.values(data[questNum].options).filter((el, index) =>
            index === resId)
        const value = questId + 1
        const newValue = { question: value, option: res.toString() }
        setExam(exam.map(el => el.question === value ? newValue : el))
        setIsOpen(false)
    }

    const finishExam = () => {
        console.log()
    }
    console.log(exam)


    return (
        <div className="examClass">
            <div className="examCenterBox">
                <div className="questionsBox">
                    <h3 className="register">Preguntas</h3>
                    <div className="quest">
                        {loading !== true ? data.map((el, index) =>
                            <div key={index} className={questNum === index ? "questBox acitveQues" : "questBox"}
                                onClick={() => setQuestNum(index)}>
                                <h4>{el.id}</h4>
                                <h4 className="text">{el.title}</h4>
                                <div className="optionsQuant">
                                    {
                                        Object.values(el.options).map((el, index) =>
                                            <div className="quantItem" key={index}>
                                                <h4>{String.fromCharCode(index + 65)}</h4>
                                                {exam.question === (index + 1) && exam.options !== ""
                                                    ? <IoMdCheckmarkCircle className="circle" />
                                                    : <FiCircle className="circle" />}</div>)
                                    }
                                </div>
                            </div>)
                            : "Loading..."}
                    </div>
                </div>
                <div className="questionsBox questionsData">
                    <h3 className="register">Revise sus repuestas antes de finalizar</h3>
                    <div className="quest">
                        <div className="timmerBox">
                            <div className="timmer">
                                <Timer
                                    initialTime={0}
                                    direction="forward"
                                    formatValue={(value) => `${(value < 10 ? `0${value}` : `0${value}`)} units `}
                                    checkpoints={[
                                        {
                                            time: 3600,
                                            callback: () => finishExam(),
                                        }]}>
                                    <Timer.Hours formatValue={value => (value < 10 ? `0${value}:` : value)} />
                                    <Timer.Minutes formatValue={value => (value < 10 ? `0${value}:` : `${value}:`)} />
                                    <Timer.Seconds formatValue={value => (value < 10 ? `0${value}` : value)} />
                                </Timer>
                            </div>
                            <h4 className="alert">Al llegar a la hora, el examen terminara automaticamente</h4>
                        </div>
                        <button className="generalBtn">Finalizar Examen</button>
                        <div className="questDis">
                            {data.map((el, index) =>
                                <h4 className="resNum" key={index}>{index + 1}</h4>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="examQuestions">
                <h3>{title}</h3>
                {data[questNum] !== undefined ? Object.values(data[questNum].options).map((el, index) =>
                    <div className="resBox" key={index}>
                        <h4>{index + 1} </h4>
                        {select === index ? <IoMdCheckmarkCircle className="circle active" />
                            : <FiCircle className="circle" onClick={() => setSelect(index)} />}
                        <h4>{el}</h4>
                    </div>) : "No hay respuestas"}
            </div>
            <div className="footBtn">
                <button className="generalBtn submit"
                    onClick={() => setIsOpen(true)}>Entregar Respuesta</button>
                <Modal isOpen={modalIsOpen} style={customStyles}>
                    <h4>¿Desea entregar esa respuesta?</h4>
                    <div>
                        <button onClick={() => handlerExam(questNum, select)}>Si</button>
                        <button onClick={() => setIsOpen(false)}>No</button>
                    </div>
                </Modal>
                <input type="checkbox" className="inpMar" />
                <label className="inpLabel">Marcar para revisar</label>
            </div>
        </div>
    )
}

export default Exam


/*
  {Object.values(options).map(el =>
                    <h4>{el}</h4>)}*/
