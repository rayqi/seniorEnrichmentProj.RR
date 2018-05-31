import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleCampusThunk, deleteCampusThunk, editCampusThunk } from '../reducers/CampusReducer'
import EditCampus from './EditCampus'
import { Link } from 'react-router-dom'

export class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.toDelete = this.toDelete.bind(this)
        this.toEdit = this.toEdit.bind(this)
    }

    componentDidMount() {
        this.props.getSingleCampus(this.props.match.params.id)
    }

    toEdit = function () {
        this.setState({ toggle: !false })
    }

    toDelete = function () {
        this.props.deleteCampus(this.props.match.params.id)
        this.props.history.push('/')
    }

    render() {
        let singleCampusObj, studentArray ;
        if(this.props.singleCampus){
            singleCampusObj = this.props.singleCampus
        }
        if(this.props.singleCampus.students){
            studentArray = this.props.singleCampus.students
        }
        console.log(studentArray)
        return (
            <div>
                <h1>CAMPUS: {singleCampusObj.name}</h1>
                <ul>image: {singleCampusObj.imageURL}</ul>
                <ul>description: {singleCampusObj.description}</ul>
                <button onClick={this.toEdit}>edit</button>
                {this.state.toggle !== false ? <EditCampus id={this.props}/> : null}
                <button onClick={this.toDelete}>delete</button>
                <h3>STUDENTS</h3>
                {studentArray ? studentArray.map(student => 
                    <li key={student.id}>
                    <Link to={`/student/${student.id}`}>{student.fullName}</Link>
                    </li>
                ): <div className="alert alert-warning">There are no students in this campus</div>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        singleCampus: state.campus.singleCampus,
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        getSingleCampus: (campus) => {
            dispatch(getSingleCampusThunk(campus))

        },
        deleteCampus: (campus) => {
            dispatch(deleteCampusThunk(campus))
        },
        editCampus: (campus) => {
            dispatch(editCampusThunk(campus))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)



// export class AllCampuses extends Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         this.props.getAllCampuses()
//         console.log('CDM...', this.props)
//     }


//     render() {
//         return this.props.allCampuses.map(campus => {
//             console.log('inside mapping props', campus)
//             return(
//                 <Campus key={campus.id} name={campus.name} description={campus.description}/>
//             )
//         })
//     }
// }