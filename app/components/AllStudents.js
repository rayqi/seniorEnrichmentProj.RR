import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllStudentsThunk } from '../reducers/StudentReducer'
import { connect } from 'react-redux'

export class AllStudents extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllStudentsKey()
    }

    render() {
        let studentArray = this.props.allStudents
        console.log('ALLSTUDENTS,render', studentArray)
        return (
            <div>
                <h1>All Students</h1>
                {studentArray.length > 0 ? studentArray.map(student => {
                    return (
                        <li key={student.id}>
                            <Link to={`/student/${student.id}`}>
                                {student.fullName}
                            </Link>
                        </li>)
                }) : <div className="alert alert-warning">There are no students</div>
                }
                <Link to="/add-student">Add Student</Link>
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    console.log('ALLSTUDENT mapStatetoProps,state', state)
    return {
        allStudents: state.student.allStudents
    }
}
//take redux state (from redux store) and pass down it as props in a react component

const mapDispatchToProps = function (dispatch) {
    return {
        getAllStudentsKey: () => {
            dispatch(getAllStudentsThunk())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)