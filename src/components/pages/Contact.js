import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div  className="wl container mb-5">
      <h1>Contact</h1>
      <li><label>Email: </label> d8328827238@me.com</li>
                    <li><label>Cell Phone: </label> 832-882-7238</li>
                    <li><a class="btn btn-primary m-1" href="https://www.linkedin.com/in/dhbhernandez/" target="_blank">
                            <i class="diegolinkedin"></i> | Linkedin </a></li>
                    <li><a class="btn btn-success m-1" href="https://github.com/dhbhernandez" target="_blank">
                            <i class="di-github"></i> | Github </a></li>
      
                            <h2 class="mt-5">Leave a message:</h2>
                    <hr />
                    <form>
                        <div class="form-group">
                            <label for="name">Name: </label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name here..." />
                        </div>
                        <div class="form-group">
                            <label for="email">Email: </label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email here..." />
                        </div>
                        <div class="form-group">
                            <label class="form-check-label" for="message">Message: </label>
                            <textarea class="form-control" id="message" rows="5" placeholder="leave a message here..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary float-right">Submit</button>
                    </form>
      

    </div>

  );
}

export default Contact;
