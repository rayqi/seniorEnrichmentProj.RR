import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSingleStudentThunk } from '../reducers/StudentReducer';

export class SingleStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }
    this.toDelete = this.toDelete.bind(this)
    this.toEdit = this.toEdit.bind(this)
    }

    componentDidMount(){
        console.log('SingleStudent, this.props', this.props)
        this.props.getSingleCampus()
    }

    toEdit = function(){

    }

    toDelete = function(){

    }

    render(){
        return(
            <h1>hello</h1>
        )
    }
}

const mapStateToProps = function(state){
    console.log('state', state)
    return {
        singleStudent: state.student.singleStudent
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getSingleCampus: (student) => {
            dispatch(getSingleStudentThunk(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)