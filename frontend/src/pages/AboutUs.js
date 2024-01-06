import React from "react";
import "../styles/AboutUsPage.css";
export const AboutUs = () => {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  // window.onscroll = function () {
  //   jet();
  // };

  // function jet() {
  //   var ilake = document.getElementById("head");
  //   ilake.style.top = "0px";
  //   ilake.style.position = "sticky";
  // }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

  return (
    <div classNameName="App">
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>About Us</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p>
            MANAS, or “Mental Health Assistance for Navigating Academic Success”
            is an initiative by the students and administrators of IIIT Nagpur
            to identify and effectively tackle any social, mental or depressing
            issue that concerns any given student of the IIITN, it relies on
            trust, empathy and bond that the students of our college share
            within the community, and the support that students give to the
            programme and to each other.
            <br />
            <br />
            A brief breakdown of the name can lead to a crisp and clear answer
            to the question, “What is Manas?”. Mental Health is a pressing issue
            that is often ignored and stereotyped as a taboo, people take a
            shame in accepting their concerning conditions, however such
            ignorance can lead to even ‘fatal’ outcomes. Assisting those with
            such issues is a need of the hour, however many challenges lie
            within front of many who even try to address the problem.
            <br />
            <br />
            In order to tackle such problem which appears solely personal at
            first glance, first and foremost step is “Reporting”, MANAS provides
            “The buzzer”, a smoke signal, a warning that can be pressed by
            someone who sees the concern with someone else, it is usually seen
            that people with mental issues never self report, buzzer can be
            pressed by any roommate or friend who see the person behaving
            unusual, abnormal eating/sleeping habits, deviations in grades or
            being unusually dull.
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <p>
              MANAS also provides a framework for Mentors and Mentees, assigned
              mentors work in coordination with the mentees, psychiatrist and
              the administration to ensure mental well being of everyone
              <br />
              <br />
              The most pressing effect depression has on the person is the
              Academic Performance, after the buzzer is pressed the person
              pressing the buzzer briefly describes the issue, it is referred to
              the psychiatrist, MANAS ensures that the privacy of the issue and
              the concerned person is solely maintained and no one other than
              the psychiatrist gets hold on the issue, if the issue is found
              cornering, it is reported to Associate Dean and the assigned
              mentor, mentor investigates the behavior of the student by
              consulting the roommates/friends, while the role of the Associate
              Dean is to ask respective FA to review the academic records of the
              student, if a suspicious drop or unevenness is found, it is an
              ultimate red flag, the issue is considered serious and it allows
              authorities to take proper actions.
              <br />
              <br />
              MANAS is an initiative that is meant to be a part of our college
              and culture and identity, success of such programs relies on the
              support, reliability and trust amongst the student community
              towards itself and towards the program, it has a capability of
              transforming numerous lives, such programs not only uphold
              academic performances but focus over all mental well being of a
              community, because building a calm and capable workforce is a huge
              contribution that we can make towards the IIITN and the broader
              society.
            </p>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h1 style={{ color: "white" }}>MENTOR MENTEE PROGRAMME</h1>
          <h2 style={{ color: "white" }}>
            At IIITN, we are dedicated to providing a transformative and
            inclusive mentorship experience, to ensure a seamless transition for
            students from various backgrounds into the unique culture of our
            institution.
          </h2>
          {/* <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>DATA ANALYTICS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>UI/UX DESIGN</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>WEB DEVELOPEMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>Q&A TESTING</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div> */}
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>What's the Scoop:</h1>
              <h2>
                Imagine having a wise and experienced guide to help you ease
                into college life. That's exactly what our Mentorship Program is
                all about. Our seniors (they're basically campus wizards) are
                here to make sure your transition to IIIITN is as smooth as
                butter.
              </h2>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>Insider Info on What They Do:</h1>
              <h2>
                <li>
                  They're your go-to buddies for academic questions, campus
                  quirks, and life advice.
                </li>
                <br />
                <li>
                  Each mentor has a squad of first-year students, creating your
                  very own support crew.
                </li>
                <br />
                <li>
                  They cook up awesome events and activities with the Mentor
                  Heads to keep the good vibes flowing.
                </li>
              </h2>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>Perks of Being a Mentor:</h1>
              <h2>
                <li>
                  Learn social skills and master the art of people management.
                </li>
                <br />
                <li>Grow into a more confident version of yourself.</li>
                <br />
                <li>
                  Get insider tips on handling everyday stress from pro
                  counselors.
                </li>
                <br />
                <li>
                  Earn bragging rights with features like "Mentor of the Month"
                  and "Mentor Spotlight."
                </li>
                <br />
                <li>
                  Walk away with a shiny certificate and a glowing
                  recommendation letter.
                </li>
              </h2>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h2>
                Excited much? So are we! Cheers to new friendships, exciting
                adventures, and a rock-solid support system. Your mentor is
                waiting to make your college journey legendary! 🚀✨ See you
                around, The IIITN Mentorship Team
              </h2>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h1 style={{ textAlign: "center" }}>GUARDIAN ALERT SYSTEM</h1>
          <h3 style={{ textAlign: "center" }}>
            At IIITN, we prioritize the well-being of our community members.
            Introducing the Guardian Alert System, a discreet and secure
            mechanism designed to support and protect each other.
          </h3>
          <div id="third_cards">
            <div>
              <h2>How it Works:</h2>

              <li>
                Anonymous Reporting: If you notice a friend in distress, simply
                press the discreet Guardian Alert button on our dedicated mobile
                app or website.
              </li>
              <li>
                Secure Encryption: Your report is encrypted end-to-end to ensure
                the utmost confidentiality. This advanced encryption guarantees
                that your identity remains completely confidential.
              </li>
              <li>
                No Personal Details: The system is designed to omit any personal
                identifiers. Your friend's privacy is of the utmost importance,
                and no names or specific details will be disclosed.
              </li>
              <li>
                Real-time Notification: Our dedicated support team receives a
                real-time notification, ensuring swift and appropriate action.
              </li>
            </div>
            <div>
              <h2>Why Guardian Alert?</h2>
              <li>
                Swift Intervention: In emergencies, every second counts.
                Guardian Alert enables a rapid response to ensure the safety and
                well-being of your friend.
              </li>
              <li>
                Strict Anonymity: We understand the sensitivity of these
                situations. Guardian Alert prioritizes your privacy, and your
                identity is safeguarded throughout the process.
              </li>
              <li>
                Community Support: By using this system, you contribute to
                creating a caring and supportive community, fostering an
                environment where everyone looks out for one another.
              </li>
            </div>
            <div>
              <h2>How to Access Guardian Alert:</h2>
              <li>visit our Secure website.</li>
              <li>Access the Guardian Alert feature.</li>
              <li>Follow the simple steps to submit a discreet report.</li>
			  <h2>Your Guardian, Your Protector:</h2>
			  <li>The Guardian Alert System is not just a reporting tool; it's a commitment to the safety and well-being of our community. Together, we create a space where everyone can thrive, supported by a network that cares.</li>
			  <li>Remember, your concern and compassion make a difference. Let Guardian Alert be your way to lend a helping hand when it's needed most.</li>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
