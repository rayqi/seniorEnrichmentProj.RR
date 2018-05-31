import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllCampusesThunk } from '../reducers/CampusReducer'
import { connect } from 'react-redux'


export class AllCampuses extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllCampuses()
    }

    render() {
        let campusArray = this.props.allCampuses
        console.log(this.props)
        return (
            <div>
            <h1>All Campuses</h1>
            {campusArray.length > 0 ? campusArray.map(campus => {
                return (<li key={campus.id}>
                <Link to={`/campus/${campus.id}`}>
                {campus.name}
                </Link>
                </li>)
            }) : <div className="alert alert-warning">There are no campuses</div>
        }   
        <Link to="/add-campus">Add Campus</Link>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        allCampuses: state.campus.allCampuses,
    }
}
//take redux state (from redux store) and pass down it as props in a react component

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        getAllCampuses: () => {
            dispatch(getAllCampusesThunk())

            //dispatch thunk function to the store
            //the key in Object - getAllCampuses, thunk created in mapdispatch 
            //but called in componentdidmount
            

            // .then((res) => {
            // //    console.log('Allcampus_MapDispatchToProps RES', res)
            //  dispatch(getAllCampuses(res)) 
            // })
        }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
//connect is a function takes 2 args from redux
//connect returns another function


// function connect(mapStateToProps,mapDispatchToProps){
//     return function(AllCampuses)
//     //returns  react component object connected to redux store
// }