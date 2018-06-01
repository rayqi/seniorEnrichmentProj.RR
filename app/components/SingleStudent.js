import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSingleStudentThunk, deleteStudentThunk, editStudentThunk } from '../reducers/StudentReducer';
import EditStudent from './EditStudent'

export class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.toDelete = this.toDelete.bind(this)
        this.toEdit = this.toEdit.bind(this)
    }

    componentDidMount() {
        console.log('SingleStudent, this.props', this.props)
        this.props.getSingleCampusKey(this.props.match.params.id)
    }

    toEdit = function () {
        this.setState({ toggle: !false })
    }

    toDelete = function () {
        this.props.deleteStudentKey(this.props.match.params.id)
        this.props.history.push('/')
    }

    render() {
        let studentObj = this.props.singleStudent
        return (
            <div>
                <h1>{studentObj.fullName}</h1>
                <ul>GPA: {studentObj.gpa}</ul>
                <ul>EMAIL :{studentObj.email}</ul>
                <ul>CAMPUS ID:{studentObj.campusId}</ul>
                <button onClick={this.toEdit}>edit</button>
                {this.state.toggle !== false ? <EditStudent id={this.props} /> : null}
                <button onClick={this.toDelete}>delete</button>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    console.log('mapStatetoProps', state)
    return {
        singleStudent: state.student.singleStudent
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        getSingleCampusKey: (student) => {
            dispatch(getSingleStudentThunk(student))
        },
        deleteStudentKey: (student) => {
            dispatch(deleteStudentThunk(student))
        },
        editCampus: (student) => {
            dispatch(editStudentThunk(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)