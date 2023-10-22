import React from "react";
import "./About.css";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="con">
      <div className="about">CONTACT</div>

      <div className="forms">
        <form
          target="_blank"
          action="https://formsubmit.co/mankalavaishnavi2004@gmail.com"
          method="POST"
        >
          <div>
            <div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </div>
  );
}
