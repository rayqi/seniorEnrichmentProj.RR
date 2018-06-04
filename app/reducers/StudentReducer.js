import axios from 'axios'
import store from '../store'

const initialState = {
    allStudents: [],
    singleStudent: {},
    newStudent: {}
}
//ACTION TYPES
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT"
const EDIT_STUDENT = "EDIT_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT"


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

export const editStudent = function (student) {
    return {
        type: EDIT_STUDENT,
        payload: student
    }
}

export const deleteStudent = function (student) {
    return {
        type: DELETE_STUDENT,
        payload: student
    }
}

//THUNKS
// export function getAllStudentsThunk() {
//     return axios.get('/api/students')
//         .then(res => res.data)
// }

export const getAllStudentsThunk = () => dispatch => {
    axios.get('/api/students')
        .then(res =>
            dispatch(getAllStudents(res.data)))
        .catch(err => console.error('fetching students unsuccessful', err))
}

export const getSingleStudentThunk = (studentId) => dispatch => {
    axios.get(`/api/students/${studentId}`)
        .then(res => dispatch(getSingleStudent(res.data)))
        .catch(err => console.error('fetch single student', err))
}

export const addNewStudentThunk = (studentObj,history) => dispatch => {
    axios.post('/api/students', studentObj)
        .then(res => res.data)
        .then(newStudent => {dispatch(addStudent(newStudent));
        history.push(`student/${newStudent.id}`);
    })
    .catch(err => console.error('fetch single student', err))
}

export const deleteStudentThunk = (studentId) => dispatch => {
    axios.delete(`/api/students/${studentId}`)
        .then(res => dispatch(deleteStudent(res.data)))
}

export const editStudentThunk = (studentId, student) => dispatch => {
    axios.put(`/api/students/${studentId}`, student)
        .then(res => dispatch(editStudent(res.data)))
}

export const StudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return Object.assign({}, state, { allStudents: action.payload })
        case GET_SINGLE_STUDENT:
            return Object.assign({}, state, { singleStudent: action.payload })
        case ADD_STUDENT:
            return Object.assign({}, state, { allStudents: state.allStudents.concat(action.payload) })
        case EDIT_STUDENT:
            return Object.assign({},state, { singleStudent: action.payload})
        case DELETE_STUDENT:
            return Object.assign({}, state, {})
        default:
            return state
    }
}

export default StudentReducer;