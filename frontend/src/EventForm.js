import React, { Component } from "react";
import "./styles/Eventcreation.css";
import ImageUploadForm from "./components/ImageUploadForm";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      fname: "",
      lname: "",
      title: "",
      description: "",
      location: "",
      time: "",
      date: "",
      email: "",
      phone: null,
      ishidden: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.previousstep = this.previousstep.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      step: 1,
      fname: "",
      lname: "",
      title: "",
      description: "",
      location: "",
      time: "",
      date: "",
      email: "",
      phone: null,
    });
    // console.log(info);
    const response = await fetch("http://localhost:8080/demo", {
      //fetch will fetch the given api
      method: "POST", //method that is used to send data should be same only
      headers: {
        "Content-Type": "application/json", //we're sending JSON data in the request with the Content-Type header.
      },
      body: JSON.stringify(this.state), //ou also need to provide a body property in the options object with the data you want to send, usually as a JSON string.
    });

    const info = await response.text();
  }

  handleNextStep() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }
  previousstep() {
    this.setState((prev) => ({
      step: prev.step - 1,
    }));
  }

  handleReset() {
    this.setState({
      step: 1,
      fname: "",
      lname: "",
      title: "",
      description: "",
      location: "",
      time: "",
      date: "",
      email: "",
      phone: null,
    });
  }

  render() {
    const {
      step,
      title,
      fname,
      lname,
      description,
      location,
      date,
      time,
      email,
      phone,
    } = this.state;

    return (
      <div className="p-6 container-fluid main1234">
        <div className="mb-8 row1 mt-1 flex flex-row w-full overall-card">
          <div className="parent-card col-xl-9 col-lg-8 col-md-12 col-12 w-[70%] m-auto">
            <div className="card bg-fuchsia-900">
              <div className="card-body bg-white">
                <div className="mb-6">
                  <h4 className="mb-0 text-2xl">Event Form - Step {step}</h4>
                </div>

                {step === 1 && (
                  <form onSubmit={this.handleNextStep}>
                    <div className="row1 basicinfo">
                      <label
                        htmlFor="Title of the event"
                        className="col-sm-4 col-form-label text-left form-label w-64 borderadjinfo"
                      >
                        Title of the event
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Title of the event"
                          id="eventtitle"
                          name="title"
                          value={title}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row1 basicinfo ">
                      <label
                        htmlFor="fullName"
                        className="col-sm-4 col-form-label border-2 border-blue-600 form-label borderadjinfo"
                      >
                        First Name{" "}
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          id="fullName"
                          name="fname"
                          value={fname}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row1 basicinfo ">
                      <label
                        htmlFor="fullName"
                        className="col-sm-4 col-form-label form-label text-left w-64 name-time borderadjinfo"
                      >
                        Last Name{" "}
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          id="lastName"
                          name="lname"
                          value={lname}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary  bg-blue-600"
                    >
                      Next
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={this.handleNextStep}>
                    {/* <div className="row1 basicinfo">
                      <label
                        htmlFor="description"
                        className="col-sm-4 col-form-label text-left form-label w-64 borderadjinfo"
                      >
                        Description
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="textarea"
                          className="form-control h-32"
                          placeholder="Description"
                          id="description"
                          name="description"
                          value={description}
                          onChange={this.handleChange}
                          maxLength={200}
                        />
                      </div>
                    </div> */}

                    <div className="row1 basicinfo">
                      <label
                        className="col-sm-4 form-label text-left w-64 borderadjinfo"
                        htmlFor="country"
                      >
                        Location
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          placeholder="Location"
                          required
                          type="text"
                          id="Location"
                          className="form-control"
                          name="location"
                          value={location}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="row1 basicinfo Time">
                      <label
                        htmlFor="Timing"
                        className="col-sm-4 col-form-label form-label text-left w-64 name-time borderadjinfo"
                      >
                        Date
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="date"
                          id="date"
                          required
                          name="date"
                          value={date}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="row1 basicinfo Time">
                      <label
                        htmlFor="Timing"
                        className="col-sm-4 col-form-label text-left form-label w-64 name-time borderadjinfo"
                      >
                        Time
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="time"
                          className="form-control"
                          placeholder="time"
                          id="time"
                          required
                          name="time"
                          value={time}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className=" col-md-8 col-12 offset-md-4 border-1 mt-5">
                      <button
                        type="button"
                        className="btn btn-secondary bg-blue-600 m-2"
                        onClick={this.previousstep}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary  bg-blue-600"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={this.handleNextStep}>
                    <div className="row1 basicinfo">
                      <label
                        htmlFor="email"
                        className="col-sm-4 col-form-label text-left form-label w-64 borderadjinfo"
                      >
                        Email
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          required
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="row1 basicinfo">
                      <label
                        className="col-sm-4 form-label text-left w-64 borderadjinfo"
                        htmlFor="phone"
                      >
                        Phone <span className="text-muted"></span>
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] inputborder">
                        <input
                          placeholder="Enter Phone"
                          type="number"
                          id="phone"
                          className="form-control"
                          name="phone"
                          value={phone}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className=" col-md-8 col-12 offset-md-4 border-1 mt-5">
                      <button
                        type="button"
                        className="btn btn-secondary bg-blue-600 m-2"
                        onClick={this.previousstep}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary  bg-blue-600"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                )}

                {step === 4 && (
                  <form onSubmit={this.handleSubmit}>
                    <div className="row1 basicinfo">
                      <label
                        htmlFor="description"
                        className="col-sm-4 col-form-label text-left form-label w-64 borderadjinfo mt-2"
                      >
                        Description
                      </label>
                      <div className="col-md-8 col-12 w-[39.6rem] h-40">
                        <textarea
                          type="textarea"
                          className=" h-full w-full overflow-hidden border-2 border-red-600 mb-3 "
                          style={{ maxWidth: "100%" }}
                          placeholder="Description"
                          id="description"
                          name="description"
                          value={description}
                          onChange={this.handleChange}
                          maxLength={200}
                        />
                      </div>
                    </div>
                    <div className=" col-md-8 col-12 offset-md-4 border-1 mt-5">
                      <button
                        type="button"
                        className="btn btn-secondary bg-blue-600 m-2"
                        onClick={this.previousstep}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary bg-blue-600 m-2"
                        onClick={this.handleReset}
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary  bg-blue-600 m-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;
