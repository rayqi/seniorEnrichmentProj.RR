import React from 'react'

const Campus = (props) => {
    console.log('this is campus component props', props)
    return (
    < div >
        <h1>{props.name}</h1>
        {/* <Link to="/add-campus">Add Campus</Link> */}
    </div > )
}

export default Campus;