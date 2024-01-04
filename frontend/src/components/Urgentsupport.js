import React, { Component } from "react";
import "./../styles/UrgentSupport.css";
import pic from "./../assets/xyz.jpg";
class Urgentsupport extends Component {
  render() {
    return (
      <div>
        <div className="image-divs h-50%">
          {/* <div>Nedkjbdf</div> */}
          <div class="col-xs-6 col-xs-offset-3 col text-container">
            <h2 className="font-bold text-[3.6rem]">Contact&nbsp;Us</h2>
            <p className="text-white text-xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              <br /> ever since the 1500s, when an unknown printer <br />
              galley of type and scrambled it to make
              <br /> a type specimen book.
            </p>
          </div>
          {/* <h1>Need an Urgent support Please</h1> */}
          {/* <img
            src="https://www.filepicker.io/api/file/6tXGehKbQ3q4dfBl2LRi"
            alt=""
            className="w-[97%] ml-7 mt-5 slantedimage"
          /> */}
        </div>
        <div className="flex flex-row">
          <div className="contactimage1 border-2 border-blue-800 w-[19.8rem] mt-7 ml-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2XZO_OCBZFc4TMxGkX43Hqe0zYD9BQM7pWjp1s8VmFj7oEgwjAaOErSKU1glu4DLdOk&usqp=CAU"
              alt=""
              className=" w-full"
            />
          </div>
          <div className="border border-black w-[60%] mt-7 ml-20">
            <table className="mt-5">
              <tr>
                <td className="text-[2.4rem] text-black assistance mr-3">
                  Kind of Assistance
                </td>
                <td className="text-[2.4rem] text-black services">
                  <p className="m-auto border-2 border-black w-[50%]">
                    Service
                  </p>
                </td>
                <td className="text-[2.4rem] text-black contactss">
                  {" "}
                  <p className="m-auto border-2 border-black w-[50%]">
                    contact
                  </p>
                </td>
              </tr>
              <tr>
                <td>Health Emergency</td>
                <td>Hospital</td>
                <td>T:05414-25050 M:291343242</td>
              </tr>
              <tr>
                <td>crisis</td>
                <td>Ambulance</td>
                <td>T:101</td>
              </tr>
              <tr>
                <td>Quick Response</td>
                <td>Security</td>
                <td>shashik:398532985</td>
              </tr>
            </table>
          </div>
        </div>
        <div>loremlwenfoawenfsk</div>
      </div>
    );
  }
}

export default Urgentsupport;
