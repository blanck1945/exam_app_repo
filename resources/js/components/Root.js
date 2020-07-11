import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login';
import Exam from './Exam';
import Navbar from './Layout/Navbar';

import "../../sass/Root.scss"
import Footer from './Layout/Footer';
import Dash from './Dash/Dash';
import { userContext, materiaContext, answerContext } from './Context/UserContext';


import "../../sass/Globals.scss"
const Root = () => {

    const [user, setUser] = useState({
        name: "Morton",
        id: 1
    })

    const [materiaQuery, setMateriaQuery] = useState({
        materiaId: null
    })

    const [exam, setExam] = useState([
        {
            question: 1,
            option: ""
        },
        {
            question: 2,
            option: ""
        }
    ])

    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])
    const materiaValue = useMemo(() => ({ materiaQuery, setMateriaQuery }), [materiaQuery, setMateriaQuery])
    const examValue = useMemo(() => ({ exam, setExam }), [exam, setExam])


    return (
        <Router>
            <div className="container">
                <Navbar />
                <Switch>
                    <userContext.Provider value={providerValue}>
                        <Route exact path="/" component={Login} />
                        <materiaContext.Provider value={materiaValue} >
                            <answerContext.Provider value={examValue}>
                                <Route path="/dash" component={Dash} />
                                <Route path="/exam" component={Exam} />
                            </answerContext.Provider>
                        </materiaContext.Provider>
                    </userContext.Provider>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
