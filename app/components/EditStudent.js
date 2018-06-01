import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editStudentThunk } from '../reducers/StudentReducer'

export class EditStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            GPA: '',
            email: '',
            campusID: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        const origStudent = this.props.id.singleStudent
        let studentKey = Object.values(this.state)
        if(origStudent.studentKey && event.target.name.length === 0){
            event.target.name = origStudent.studentKey
        }
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newStudent = this.state
        const studentId = this.props.id.singleStudent.id
        this.props.editStudentKey(studentId, newStudent)
    }

    render(){
        return(
            <div>
            <h1>EDIT STUDENT FORM</h1>
            <form action="/" onSubmit={this.handleSubmit}>
                <div>
                    <label>FIRST NAME :</label>
                    <input type='text' name='firstName' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>LAST NAME :</label>
                    <input type='text' name='lastName' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>GPA :</label>
                    <input type='text' name='GPA' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>EMAIL: </label>
                    <input type='text' name='email' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Campus ID: </label>
                    <input type='text' name='campusID' onChange={this.handleChange}/>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
        )
    }
}

export const mapStateToProps = function (state) {
    return {
        singleStudent: state.student.newStudent
    }
}

export const mapDispatchToProps = function (dispatch) {
    return {
        editStudentKey: (studentId, student) => {
            dispatch(editStudentThunk(studentId, student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)