import React, { Component } from 'react'

class EventCard extends Component {
    render(){
        const data = this.props.data
        return(
            <table>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td>{data.title}</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>{data.description}</td>
                </tr>
                <tr>
                    <td>location</td>
                    <td>{data.location}</td>
                </tr>
                <tr>
                    <td>time</td>
                    <td>{data.time}</td>
                </tr>
                <tr>
                    <td>date</td>
                    <td>{data.date}</td>
                </tr>
                </tbody>

            </table>
        )
    }
}

export default EventCard