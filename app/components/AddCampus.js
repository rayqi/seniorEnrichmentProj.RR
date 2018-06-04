import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampusThunk } from '../reducers/CampusReducer'
import { push } from 'react-router-redux'

export class AddCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageURL: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newCampus = this.state
        console.log('props', this.props)
        this.props.addCampus(newCampus)
    }

    render() {
        return (
            <div>
                <h3>ADD CAMPUS FORM</h3>
                <form action="/" onSubmit={this.handleSubmit}>
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
    console.log('ADD_CAMPUS, mapStatetoProps', state)
    return {
        newCampus: state.campus.newCampus
    }
}
export const mapDispatchToProps = function (dispatch, ownProps) {
    console.log('mapDispatchToProps, did this hit?')
    return {
        addCampus: (campus) => {
            dispatch(addCampusThunk(campus, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)