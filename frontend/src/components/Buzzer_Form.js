import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import "../styles/Buzzer_Form.css"

const initialFormData = Object.freeze({
  username: "",
  email: "",
  mobile: "",
  query: "",
  date: "",
  time: ""
});

class Buzzer_Form extends Component {

  state = {
    formData: initialFormData
  };

  sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
      serviceID, templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      .catch(err => console.error('There has been an Error.', err))
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value.trim()
      }
    });
  };

  handleSubmit = (e) => {
    alert(`Message sent successfully`);
    const templateId = 'template_ihh4hyw';
    const serviceID = "service_xig2bbs";
    this.sendFeedback(serviceID, templateId, { from_name: this.state.formData.name, mobile: this.state.formData.mobile, message_html: this.state.formData.query, email: this.state.formData.email, date: this.state.formData.date, time: this.state.formData.time });

    console.log(this.state.formData);
    this.state = this.state.formData;
    e.preventDefault();
  };

  render() {
    return (
      <section>
        <div className="buzzer_form">
          <Form>
            <div className="buzzer_col">
              <Form.Group controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control onChange={this.handleChange} name="name" type="name" placeholder="Name" required/>
              </Form.Group>
            </div>

            <div className="buzzer_col">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email" required/>
              </Form.Group>
            </div>

            <div className="buzzer_col">
              <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control onChange={this.handleChange} name="mobile" placeholder="" required/>
              </Form.Group>
            </div>

            <div className="buzzer_col">
              <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Message</Form.Label>
                <Form.Control onChange={this.handleChange} name="query" as="textarea" rows={3} />
              </Form.Group>
            </div>

            <div className="buzzer_col">
              <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={this.handleChange} name="date" type="date" rows={3} required/>
              </Form.Group>
            </div>

            <div className="buzzer_col">
              <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Time</Form.Label>
                <Form.Control onChange={this.handleChange} name="time" type="time" rows={3} required/>
              </Form.Group>
            </div>
            <Button onClick={this.handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    );
  }
}

export default Buzzer_Form;
