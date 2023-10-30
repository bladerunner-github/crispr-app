import React, { Component } from 'react';
import EventCard from './EventCard';
import { setGlobalData, getGlobalData } from './globalState';
import './styles/Eventcreation.css'
import login_img from "./assets/user-login.png"
import menu from './assets/menu.png'
import ImageUploadForm from './components/ImageUploadForm';

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', title: '', description: '', location: '', time: '', date: '', ishidden: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dashboard = this.dashboard.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    dashboard() {
        this.setState({ ishidden: this.state.ishidden ? false : true })
    }
    async handleSubmit(evt) {
        evt.preventDefault()
        const component = this.state;
        const data = getGlobalData();
        data.push(component)
        setGlobalData(data)
        const response = await fetch('http://localhost:8080/demo', {      //fetch will fetch the given api
            method: 'POST',                                                 //method that is used to send data should be same only
            headers: {
                'Content-Type': 'application/json'                            //we're sending JSON data in the request with the Content-Type header.
            },
            body: JSON.stringify(this.state)                       //ou also need to provide a body property in the options object with the data you want to send, usually as a JSON string.
        })
        // const info = await response.json()
        // console.log(info)
    }

    render() {
        const formDetails = this.state
        return (
            <div className='p-6 container-fluid main'>
                {/* <form onSubmit={this.handleSubmit} method='POST'>
                    <label htmlFor='name' className=' bg-black caret-yellow-400'>Name</label>
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
                </form> */}




                <div className="row generalrow border-2 border-slate-400 nav-row">
                    <div className="col-lg-12 col-md-12 col-12 h-16  w-full nav-row-first-div">
                        <div className="border-bottom pb-4 mb-4 flex flex-row nav-row-contents">
                            {/* <h1 className="mb-0 md:font-bold fon text-4xl sm:text-xl mt-2 ml-2">General</h1> */}
                            <div className='menudiv'><img src={menu} className='menu' onClick={this.dashboard} alt='' /></div>
                            <div className='w-[40%] nav-row-search' > <input type="text" className="search form-control ml-32 mt-2 w-4" placeholder="Search here" id="fullName" required="" /></div>
                            <div className='login-profile ml-[53rem] w-20'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgx-hu6OR-5p3liCUhudEwxmOKRL7kQv3Bw&usqp=CAU" className='login-image-profile ml-1 mt-1 w-14' alt='' /></div>
                        </div>
                    </div>

                </div>
                <hr />
                {/* first row ends */}
                {/* second row starts */}
                <div className='mb-8 row mt-1  flex flex-row w-full overall-card '>
                    <div className='hidden-menubar'> {this.state.ishidden ?
                        (
                            <div className="dash col-xl-3 col-lg-4 col-md-12 col-12 mr-6 w-[22rem] h-[90%]  ml-3 bg-[#212b36] flex flex-col">
                                {/* <div className="mb-4 mb-lg-0 mt-3">

                                    <h2 className="mb-0 fs-5 text-muted text-slate-500 text-xl"> hi how are you</h2>
                                </div> */}
                                <h2 className='all texts text-4xl font-bold text-white ml-5 mt-8'>Dash</h2>
                                <div className='mt-16 ml-6 flex flex-row'>
                                    <img src='https://thumbs.dreamstime.com/b/%E5%9C%A8%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%E7%9A%84%E8%81%AA%E6%98%8E%E7%9A%84%E5%AE%B6%E5%BA%AD%E6%8E%A7%E5%88%B6%E4%BB%AA%E8%A1%A8%E6%9D%BF%E8%B1%A1%E5%9B%BE%E8%A1%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E8%AE%BE%E8%AE%A1%E7%9A%84%EF%BC%8C%E7%8E%B0%E4%BB%A3%E7%AE%80%E5%8D%95%E7%9A%84%E4%BC%A0%E6%9F%93%E5%AA%92%E4%BB%8B%E6%A0%87%E5%BF%97-132865658.jpg' className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4'>Dashboard</h2>
                                </div>
                                <h2 className='all texts ml-5 mt-16 text-2xl text-gray-600'><u>Layouts & pages</u></h2>
                                <div className='flex flex-row mt-20 ml-8'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIjgyp8lpXGK6nk94XbPxiNFoufFFnojXnBzwM9va2nxv04G5_Jb4z-kk6DjjVoMR2_E&usqp=CAU" className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4'><u><i>pages</i></u></h2>
                                </div>
                                <div className='flex flex-row mt-20 ml-8'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEzOye8c2sK-5dp--meLzCsfd4cUmmYgPjw&usqp=CAU" className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4'><u><i>Authentication</i></u></h2>
                                </div>
                                <div className='flex flex-row mt-20 ml-8'>
                                    <img src="https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif" className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4'><u><i>Approval</i></u></h2>
                                </div>
                                <div className='flex flex-row mt-20 ml-8'>
                                    <img src='https://static.vecteezy.com/system/resources/thumbnails/000/552/589/small/fireworks_041.jpg' className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4'><u><i>Events</i ></u>  </h2>
                                </div>
                                <div className='flex flex-row mt-20 ml-8'>
                                    <img src='https://cdn2.hubspot.net/hub/100473/file-406599611-jpg/images/Blog.jpg' className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4'><u><i>Blogs</i ></u></h2>
                                </div>
                                <div className='flex flex-row mt-20 ml-8'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIG9PKnDZVdoTLIJyuxty_T4T_YY4up6-iIg&usqp=CAU' className='w-12' />
                                    <h2 className='all texts mt-3 text-xl text-blue-200 ml-4 mb-0'>Logout</h2>
                                </div>

                            </div>
                        ) : <div className='w-0'></div>}
                    </div>


                    <div className='parent-card col-xl-9 col-lg-8 col-md-12 col-12 w-[70%] m-auto'>
                        <div className='card bg-fuchsia-900'>
                            <div className='card-body  bg-fuchsia-100 border-2 border-red-100'>

                                <div className=" mb-6">
                                    <h4 className="mb-1 text-xl sm:text-lg">General Settings</h4>

                                </div>
                                {/* avatar row starts */}
                                <div className="align-items-center mb-8 row flex flex-row avatar-row">
                                    <div className="mb-3 mb-md-0 col-md-3 avtar-heading">
                                        <h5 className="mb-0 font-semibold text-lg mt-2 ml-6">Avatar</h5>
                                    </div>
                                    <div className="col-md-9 ml-32 avatar">
                                        <div className="avatarimagediv d-flex align-items-center flex flex-row ">
                                            <div className="me-3 w-28 avatarimage">
                                                <img src="https://thumbs.dreamstime.com/z/user-profile-my-account-avatar-login-icon-man-male-face-smile-symbol-flat-vector-human-person-member-sign-user-profile-182815734.jpg" alt="" className="w-24 h-20 mb-2 rounded-full mx-auto" />
                                            </div>
                                            <div className='mt-6 ml-3 avatar-buttons'>
                                                <button type="submit" className="  me-2 btn btn-primary border-red-500 text-xl hover:bg-blue-800 hover:text-white w-40 h-10 ml-4 mr-3">Change
                                                </button>
                                                <button type="submit" className=" buttons1 btn btn-primary  text-xl hover:bg-blue-800 hover:text-white w-40 h-10">Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar row done */}
                                {/* cover photo row starts */}
                                <div className="mb-8 flex flex-row">
                                    <div className="mb-3 mb-md-0 col-md-3 w-80 photos">
                                        <h5 className="mb-0 font-semibold text-slate-700">Cover photo</h5>
                                    </div>
                                    <ImageUploadForm />
                                </div>
                                {/* blog photo */}
                                <div className="mb-8 flex flex-row">
                                    <div className="mb-3 mb-md-0 col-md-3 w-80">
                                        <h5 className="mb-0 font-semibold text-slate-700">blog photo</h5>
                                    </div>
                                    <ImageUploadForm />
                                </div>
                                {/* basic information row */}
                                <div className='flex flex-col'>
                                    <div className="mb-6 w-64">
                                        <h4 className="mb-1 text-xl">Basic information</h4>
                                    </div>
                                    <form>
                                        <div className="mb-3 row basicinfo">
                                            <label htmlfor="Title of the event" className="col-sm-4 col-form-label form-label w-64">Title of the event</label>
                                            <div className="col-md-8 col-12 w-[39.6rem]">
                                                <input type="text" className="form-control" placeholder="Title of the event" id="eventtitle" required="" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row basicinfo name-div">
                                            <label htmlfor="fullName" className="col-sm-4 col-form-label form-label text-lg w-64 name-time">Full name  </label>
                                            <div className="col-sm-4 mb-3 mb-lg-0 mt-1 ml-2 mr-2 w-80 displaying">
                                                <input type="text" className="form-control" placeholder="First name" id="fullName" required="" />
                                            </div>
                                            <div className="col-sm-4 ml-2 mr-2 mt-1 w-72 displaying">
                                                <input type="text" className="form-control" placeholder="Last name" id="lastName" required="" />
                                            </div>
                                        </div>
                                        <div class="mb-3 row basicinfo">
                                            <label htmlfor="description" className="col-sm-4 col-form-label form-label w-64">Description</label>
                                            <div className="col-md-8 col-12 w-[39.6rem] ">
                                                <input type="textarea" className="form-control h-32" placeholder="Description" id="description" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row basicinfo">
                                            <label className="col-sm-4 form-label w-64" htmlfor="country">Location</label>
                                            <div class="col-md-8 col-12  w-[39.6rem] ">
                                                <input placeholder="Location" required="" type="text" id="Location" className="form-control" />
                                            </div>
                                        </div>
                                        {/* <div className="mb-3 row basicinfo">
                                            <label className="col-sm-4 form-label w-64" htmlfor="addressLine">Address line 1</label>
                                            <div className="col-md-8 col-12  w-[39.6rem]">
                                                <input placeholder="Enter Address line 1" required="" type="text" id="addressLine" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row basicinfo">
                                            <label className="col-sm-4 form-label w-64" htmlfor="addressLineTwo">Address line 2</label>
                                            <div className="col-md-8 col-12  w-[39.6rem]"><input placeholder="Enter Address line 2" required="" type="text" id="addressLineTwo" className="form-control" />
                                            </div>
                                        </div> */}
                                        <div className="mb-3 row basicinfo Time">
                                            <label htmlfor="Timing" className="col-sm-4 col-form-label form-label text-lg w-64 name-time">Time</label>
                                            <div className="col-sm-4 mb-3 mb-lg-0 mt-1 ml-2 mr-2 w-80 displaying">
                                                <input type="date" className="form-control" placeholder="date" id="date" required="" />
                                            </div>
                                            <div className="col-sm-4 ml-2 mr-2 mt-1 w-72 displaying">
                                                <input type="time" className="form-control" placeholder="time" id="time" required="" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row basicinfo">
                                            <label htmlfor="email" className="col-sm-4 col-form-label form-label w-64">Email</label>
                                            <div className="col-md-8 col-12 w-[39.6rem]">
                                                <input type="email" className="form-control" placeholder="Email" id="email" required="" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row basicinfo">
                                            <label className="col-sm-4 form-label  w-64" htmlfor="phone">Phone <span className="text-muted"></span></label>
                                            <div className="col-md-8 col-12  w-[39.6rem]">
                                                <input placeholder="Enter Phone" type="number" id="phone" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="align-items-center row basicinfo">
                                            {/* <label className="col-sm-4 form-label w-64" htmlfor="zipcode">Zip code<i className="fe fe-info fs-4 me-2 text-muted icon-xs"></i></label> */}
                                            <div>
                                                <div className="col-md-8 col-12  w-[39.6rem] zip">
                                                    {/* <input placeholder="Enter Zip code" required="" type="text" id="zipcode" className="form-control" /> */}
                                                </div>
                                                <div className="mt-0 col-md-8 col-12 offset-md-4 border-1">
                                                    <button type="submit" className="btn btn-primary bg-blue-600 text-white text-xl hover:bg-blue-800 w-44">Save Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                            </div>

                        </div >

                    </div >

                </div >

            </div >
        )
    }
}

export default EventForm