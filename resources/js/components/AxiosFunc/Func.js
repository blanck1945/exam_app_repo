import Axios from "axios"

export const fetchMaterias = async id => {
    try {
        const res = await Axios.get(`http://localhost:8000/api/student_materia/${id}`)
        return [...res.data]
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchQuestions = async id => {
    try {
        console.log(id)
        const res = await Axios.get(`http://localhost:8000/api/questions/${id}`)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}
