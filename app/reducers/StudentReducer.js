import axios from 'axios'
import store from '../store'

const initialState = {
    allStudents: [],
    singleStudent: {}
}
//ACTION TYPES
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT"

//ACTION CREATORS
export const getAllStudents = function (students) {
    return {
        type: GET_ALL_STUDENTS,
        payload: students
    }
}

export const getSingleStudent = function (student) {
    return {
        type: GET_SINGLE_STUDENT,
        payload: student
    }
}

export const addStudent = function (student) {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

//THUNKS
export function getAllStudentsThunk() {
    return axios.get('/api/students')
        .then(res => res.data)
}

export function getSingleStudentThunk(studentId) {
    return axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
}

export const StudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return Object.assign({}, state, { allStudents: action.payload })
        case GET_SINGLE_STUDENT:
            return Object.assign({}, state, { singleStudent: action.payload })
        case ADD_STUDENT:
            return Object.assign({}, state, { allStudents: state.allStudents.concat(action.payload) })
        default:
            return state
    }
}

export default StudentReducer;