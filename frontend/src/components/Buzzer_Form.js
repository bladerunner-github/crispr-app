import React, { Component } from "react";
import "../styles/Buzzer_Form.css"

class Buzzer_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rollNo: "",
      phoneNumber: "",
      picture: null,
      message: "",
    };
  }

  handleChange = (e) => {
    const { name, value, type } = e.target;
    this.setState({
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
        name: "",
        rollNo: "",
        phoneNumber: "",
        picture: null,
        message: "",
      }));
    alert("Form submitted");
  };

  render() {
    return (<section>
     
      <div className="form-title">Form Title</div>
      <div className="form_container">
        <form className="form" onSubmit={this.handleSubmit}>
          
          <div className="input-box">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Roll Number:</label>
            <input
              type="text"
              name="rollNo"
              value={this.state.rollNo}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Upload Picture:</label>
            <input
              type="file"
              name="picture"
              onChange={this.handleChange}
              accept=".jpg, .jpeg, .png"
            />
          </div>

          <div className="input-box">
            <label>Message:</label>
            <br></br>
           
            <input type="textarea" name="message"
              value={this.state.message}
              onChange={this.handleChange}></input>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </section>
    );
  }
}

export default Buzzer_Form;
