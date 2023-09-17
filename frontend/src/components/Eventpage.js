import React, { Component } from 'react'

class Eventpage extends Component {
    render() {
        // const data = this.props.data
        const hostname = this.props.hostname;
        console.log(hostname);
        const imgURL = this.props.imgURL;
        const about = this.props.about;
        const date = this.props.date;
        const title = this.props.title;
        const location = this.props.location;
        const time = this.props.time;
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td className='text-red-900'>{hostname}</td>
                    </tr>
                    <tr>
                        <img
                            src={imgURL}
                            className="rounded-full object-cover w-[120px] h-[120px]"
                            alt="imagehd"
                        />
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{about}</td>
                    </tr>
                    <tr>
                        <td>location</td>
                        <td>{location}</td>
                    </tr>
                    <tr>
                        <td>time</td>
                        <td>{time}</td>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td>{date}</td>
                    </tr>
                </tbody>

            </table>
        )
    }
}

export default Eventpage