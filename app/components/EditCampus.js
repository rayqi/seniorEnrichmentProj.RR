import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editCampusThunk } from '../reducers/CampusReducer'

export class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageURL: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log('props in constructor ORIG CAMPUS', this.props.id.singleCampus)
    }

    handleChange(event) {
        const origCampus = this.props.id.singleCampus
        let campusKey = Object.values(this.state)
        console.log('handleChange', event.target.value)
        console.log('event target name', event.target.name)
        console.log('origCampus', this.props.id.singleCampus)
        if (origCampus.campusKey && event.target.name.length === 0) {
            event.target.name = origCampus.campusKey
        }
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const newCampus = this.state
        const campusId = this.props.id.singleCampus.id
        console.log('newCampus', newCampus)
        this.props.editCampus(campusId, newCampus)
        // this.props.history.push(`/campuses/${campusId}`)
    }

    render() {
        return (
            <div>
                <h3>EDIT CAMPUS FORM</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>CAMPUS NAME: </label>
                        <input type='text' name='name' onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>CAMPUS IMAGEURL: </label>
                        <input type='text' name='imageURL' onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>CAMPUS DESCRIPTION: </label>
                        <input type='text' name='description' onChange={this.handleChange} />
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export const mapStateToProps = function (state) {
    return {
        singleCampus: state.campus.newCampus
    }
}
export const mapDispatchToProps = function (dispatch) {
    return {
        editCampus: (campusId, campus) => {
            dispatch(editCampusThunk(campusId, campus))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)