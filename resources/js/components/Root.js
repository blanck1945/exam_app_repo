import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login';
import Exam from './Exam';
import Navbar from './Layout/Navbar';

import "../../sass/Root.scss"
import Footer from './Layout/Footer';
import Dash from './Dash/Dash';
import { userContext, materiaContext } from './Context/UserContext';


import "../../sass/Globals.scss"
const Root = () => {

    const [user, setUser] = useState({
        name: "Morton",
        id: 1
    })

    const [materiaQuery, setMateriaQuery] = useState(0)

    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])
    const materiaValue = useMemo(() => ({ materiaQuery, setMateriaQuery }), [materiaQuery, setMateriaQuery])
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Switch>
                    <userContext.Provider value={providerValue}>
                        <Route exact path="/" component={Login} />
                        <materiaContext.Provider value={materiaValue} >
                            <Route path="/dash" component={Dash} />
                            <Route path="/exam" component={Exam} />
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
