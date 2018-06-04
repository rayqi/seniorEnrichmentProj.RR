import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewStudentThunk } from '../reducers/StudentReducer'


export class AddStudent extends Component {
    constructor(props) {
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
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newStudent = this.state
        console.log('props', this.props)
        this.props.addNewStudentKey(newStudent)
    }

    render() {
        console.log('state', this.state)
        console.log('props', this.props)
        return (
            <div>
                <h1>ADD STUDENT FORM</h1>
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

// export const mapStateToProps = function(){

// }

export const mapStateToProps = (state) => {
    return {
        newStudent: state.student.newStudent
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('ownProps', ownProps)
    return {
        addNewStudentKey: (student) => {
            dispatch(addNewStudentThunk(student,ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)