import React from "react";
import "./../styles/UrgentSupport.css";
// import Urgentlargescreen from "./Urgentlargescreen";
// import Urgentsmallscreen from "./Urgentsmallscreen";
//
const UrgentSupport = () => {
  return (
    <div className="backimage">
      {/* Contact Address Area */}
      <section className="contact-address-area">
        <div className="container1  border-blue-800 ">
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
                    <td className="text-white ml-2">Service</td>
                    <td className="text-white ml-2">Contact</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-xl font-semibold mt-3">
                      Health Emergency
                    </td>
                    <td className="text-white ml-2">Hospital</td>
                    <td className="text-white ml-2">
                      T: 022-2567051/53 <br /> M: 9920147050
                    </td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-xl font-semibold mt-3">
                      Quick Response
                    </td>
                    <td className="text-white ml-2">Security</td>
                    <td className="text-white ml-2">
                      Male : 9920141517
                      <br /> Female :9920141517{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Single Contact Address Box */}
            {/* Single Contact Address Box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box main-branch div2">
              <h3>Indian Institute Of Informatin Technology, Nagpur</h3>
              <div className="inner">
                <ul>
                  <li>
                    <div className="title">
                      <h4>Address:</h4>
                    </div>
                    <div className="text">
                      <p>
                        Survey No. 140,141/1 behind Br. Sheshrao Wankhade
                        Shetkari Sahkari Soot Girni, Village - Waranga, PO -
                        Dongargaon(Butibori),
                        <br /> Tahsil- Nagpur (Rural), District Nagpur,
                        Maharashtra- 441108
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Ph & Mail</h4>
                    </div>
                    <div class="text">
                      <p>
                        9405215010 <br /> registrar@iiitn.ac.in
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
            <div className="col-sm-12 col-md-4 single-contact-address-box div1">
              <table className="lastone mb-2">
                <tbody>
                  <tr className="mt-4">
                    <td className="text-white text-2xl font-semibold mt-3">
                      Kind Of Assistance
                    </td>
                    <td className="text-white ml-2">Service</td>
                    <td className="text-white ml-2">Contact</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-2xl font-semibold mt-3">
                      Crisis
                    </td>
                    <td className="text-white ml-2">Ambulance</td>
                    <td className="text-white ml-2">T : 101</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-white text-2xl font-semibold mt-3">
                      Counsellor
                    </td>
                    <td className="text-white ml-2">Individual Counselling</td>
                    <td className="text-white ml-2">M : 9912179020</td>
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
