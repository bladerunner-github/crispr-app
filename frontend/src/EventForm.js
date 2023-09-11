import React, { Component } from 'react';
import EventCard from './EventCard';
import { setGlobalData, getGlobalData } from './globalState';

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', title: '', description: '', location: '', time: '', date: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    async handleSubmit(evt) {
        evt.preventDefault()
        const component = this.state;
        const data = getGlobalData();
        data.push(component)
        setGlobalData(data)
        const response = await fetch('http://localhost:8080/demo', {      //fetch will fetch the given api
            method: 'POST',                                                 //method that is used to send data should be same only
            headers : {
                'Content-Type' : 'application/json'                            //we're sending JSON data in the request with the Content-Type header.
            },
            body : JSON.stringify(this.state)                       //ou also need to provide a body property in the options object with the data you want to send, usually as a JSON string.
        })
        // const info = await response.json()
        // console.log(info)
    }

    render() {
        const formDetails = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} method='POST'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' value={this.state.name} onChange={this.handleChange} />

                    <label htmlFor='title'>Title of the Event</label>
                    <input type='text' name='title' id='title' value={this.state.title} onChange={this.handleChange} />

                    <label htmlFor='description'>description</label>
                    <input type='text' name='description' id='description' value={this.state.description} onChange={this.handleChange} />

                    <label htmlFor='location'>location</label>
                    <input type='text' name='location' id='location' value={this.state.location} onChange={this.handleChange} />

                    <label htmlFor='date'>date</label>
                    <input type='date' name='date' id='date' value={this.state.date} onChange={this.handleChange} />

                    <label htmlFor='time'>time</label>
                    <input type='text' name='time' id='time' value={this.state.time} onChange={this.handleChange} />
                    <button>
                        click to submit
                    </button>
                </form>

            </div>
        )
    }
}

export default EventForm