import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import AllCampuses from './AllCampuses'
import AddCampus from './AddCampus'
import store from '../store'
import SingleCampus from './SingleCampus'
import AddStudent from './AddStudent'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'

export default class Root extends Component {
  constructor() {
    super()
  }

// componentDidMount(){
//   this.props.dispatch()
// }

  render() {

    return (
      <div>
        <nav>
          <ul><Link to="/">HOME</Link></ul>
          <ul><Link to="/allcampuses">All Campuses</Link></ul>
          <ul><Link to="/allstudents">All Students</Link></ul>
        </nav>
        <h1>Welcome to Be Kind University</h1>
        <img src="http://i0.kym-cdn.com/entries/icons/original/000/005/896/Magic-School-Bus.jpg"/>
        <Route path="/allcampuses" component={AllCampuses}/>
        <Route path="/allstudents" component={AllStudents}/>
        <Route path="/add-campus" component={AddCampus} />
        <Route path="/add-student" component={AddStudent} />
        <Route path="/campus/:id" component={SingleCampus} />
        <Route path="/student/:id" component={SingleStudent} />
      </div>
    )
  }
}



// export default connect(mapStateToProps, mapDispatchToProps)(root)