import Axios from "axios"
import { useState, useEffect } from "react"

export const fetchMaterias = async id => {
    try {
        const res = await Axios.get(`http://localhost:8000/api/student_materia/${id}`)
        return [...res.data]
    }
    catch (err) {
        console.log(err)
    }
}

export const API = `http://localhost:8000/api/`

export const useAxios = (url) => {
    const [state, setState] = useState({ data: [], loading: true })

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }))

        Axios.get(url)
            .then(res => setState({ data: res.data, loading: false }))
            .catch(err => console.log(err))

    }, [url, setState])
    return state
}

export const usePost = (url, answer, questionId) => {
    const [state, setState] = useState({ answer: null, questionId: null, loading: false })
    const [value, setValue] = useState({ data: [] })

    useEffect(() => {
        setState(state => ({ answer: answer, questionId: questionId, loading: true }))

        Axios.post(url, state)
            .then(res => setValue({ data: res.data }))
            .catch(err => console.log(err))
    })
    return value
}
