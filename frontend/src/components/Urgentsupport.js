import React from "react";
import "./../styles/UrgentSupport.css";
import Urgentlargescreen from "./Urgentlargescreen";
import Urgentsmallscreen from "./Urgentsmallscreen";

const UrgentSupport = () => {
  return (
    <div className="backimage">
      {/* Contact Address Area */}
      <section className="contact-address-area">
        <div className="container  border-blue-800 ">
          <div className="sec-title-style1 text-center max-width">
            <div className="title">Urgent Support</div>
            <div className="text">
              <div className="decor-left">
                <span></span>
              </div>
              <p>24 * 7 Emergency Lines</p>
              <div className="decor-right">
                <span></span>
              </div>
            </div>
          </div>
          <div className="contact-address-box row">
            {/* Single Contact Address Box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box text-center div1">
              {/* <div className="icon-holder">
                <span className="icon-clock-1"></span>
              </div>
              <h3>Lorem Ipsum</h3>
              <h2>Lorem Ipsum is simply dummy</h2> */}
              <table>
                <tbody>
                  <tr className="mt-4">
                    <td className="text-white text-xl font-semibold mt-3">
                      Kind Of Assistance
                    </td>
                    <td className="text-white ml-2">Health Emergency</td>
                    <td className="text-white ml-2">Health Emergency</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-xl font-semibold mt-3">
                      Service
                    </td>
                    <td className="text-white ml-2">Hospital</td>
                    <td className="text-white ml-2">Health Emergency</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-xl font-semibold mt-3">
                      Contact
                    </td>
                    <td className="text-white ml-2">
                      T: 022-2567051/53 M: 9920147050
                    </td>
                    <td className="text-white ml-2">Health Emergency</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Single Contact Address Box */}
            {/* Single Contact Address Box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box main-branch div2">
              <h3>Lorem Ipsum</h3>
              <div class="inner">
                <ul>
                  <li>
                    <div class="title">
                      <h4>Address:</h4>
                    </div>
                    <div class="text">
                      <p>
                        Lorem Ipsum, 40C, Lorem Ipsum dummy,
                        <br /> Lorem Ipsum, Ch 98054
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Ph & Fax:</h4>
                    </div>
                    <div class="text">
                      <p>
                        +123 456 789 <br /> test@info.com
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Office Hrs:</h4>
                    </div>
                    <div class="text">
                      <p>
                        Mon-Fri: 9:30am - 6:30pm
                        <br /> Sat-Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Contact Address Box */}
            {/* Single Contact Address Box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box text-center div1">
              <table className="mt-1 center">
                <tbody>
                  <tr className="mt-4">
                    <td className="text-white text-2xl font-semibold mt-3">
                      Kind Of Assistance
                    </td>
                    <td className="text-white ml-2">Health Emergency</td>
                    <td className="text-white ml-2">Health Emergency</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-2xl font-semibold mt-3">
                      Service
                    </td>
                    <td className="text-white ml-2">Hospital</td>
                    <td className="text-white ml-2">Health Emergency</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-2xl font-semibold mt-3">
                      Contact
                    </td>
                    <td className="text-white ml-2">
                      T: 022-2567051/53 M: 9920147050
                    </td>
                    <td className="text-white ml-2">Health Emergency</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Single Contact Address Box */}
          </div>

          {/*new triple box */}
        </div>
      </section>
    </div>
  );
};

export default UrgentSupport;
