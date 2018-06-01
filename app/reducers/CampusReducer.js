import axios from 'axios'
import store from '../store'


// `combineReducers` is not currently used, but eventually should be for modular code :D
// When you're ready to use it, un-comment the line below!
// import {combineReducers} from 'redux'

const initialState = {
    allCampuses: [],
    singleCampus: {},
    newCampus: {}
}

//action types
const GET_ALL_CAMPUSES = "GET_ALL_CAMPUSES";
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS"

//action creators
export const getAllCampuses = function (campuses) {
    return {
        type: GET_ALL_CAMPUSES,
        payload: campuses
    }
}

export const getSingleCampus = function (campus) {
    return {
        type: GET_SINGLE_CAMPUS,
        payload: campus
    }
}

export const addCampus = function (campus) {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

export const editCampus = function (campus) {
    return {
        type: EDIT_CAMPUS,
        payload: campus
    }
}

export const deleteCampus = function (campus) {
    return {
        type: DELETE_CAMPUS,
        payload: campus
    }
}

//THUNKS

export const getAllCampusesThunk = () => dispatch => {
    axios.get('/api/campuses')
        .then(res =>
            dispatch(getAllCampuses(res.data)))
        .catch(err => console.error('fetching campuses unsuccessful', err))
}

//action creator uses dispatch to go to the reducer 

export const getSingleCampusThunk = (campusId) => dispatch => {
    axios.get(`/api/campuses/${campusId}`)
        .then(res => dispatch(getSingleCampus(res.data)))
        .catch(err => console.error('fetch single campus not working', err))
}

export const addCampusThunk = (campusObj) => dispatch => {
    axios.post('/api/campuses', campusObj)
        .then(res => res.data)
        .then(newCampus => dispatch(addCampus(newCampus)))
        .catch(err => console.error('error adding campus', err))
}

export const deleteCampusThunk = (campusId) => dispatch => {
    console.log('Capus Reducer, deleteThunk.....', campusId)
    axios.delete(`/api/campuses/${campusId}`)
        .then(res => dispatch(deleteCampus(res.data)))
}

export const editCampusThunk = (campusId, campus) => dispatch => {
    console.log('Campusreducer editCampus Thunk.........campus', campus)
    console.log('Campusreducer editCampus Thunk.........campusId', campusId)
    axios.put(`/api/campuses/${campusId}`, campus)
        .then(res => dispatch(editCampus(res.data)))  
}

//reducer
export const CampusReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            console.log('get all campus action creator in reducer')
            return Object.assign({}, state, { allCampuses: action.payload })
        case GET_SINGLE_CAMPUS:
            return Object.assign({}, state, { singleCampus: action.payload })
        case ADD_CAMPUS:
            console.log('working?')
            return Object.assign({}, state, { allCampuses: state.allCampuses.concat(action.payload) })
        case EDIT_CAMPUS:
            return Object.assign({}, state, { singleCampus: action.payload })
        case DELETE_CAMPUS:
            return Object.assign({}, state, {})
        default:
            return state
    }
}

export default CampusReducer;
