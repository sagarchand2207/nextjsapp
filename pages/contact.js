import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { saveForm } from "../redux/actions";
import Router from 'next/router';


export default function Contact(props) {
  const dispatch = useDispatch();
  const formData = useSelector(state=>state.form)
  const[state, setStates] = useState({name:"", email:"", subject:"", message:""})
  const handleChange=(e)=>{
    let obj = state
    obj[e.target.name] = e.target.value
    setStates({...obj})
  }
  useEffect(() => {
    if(Object.keys(formData.data).length){
      Router.push("/contact-details")
    }
    
  }, [formData.data])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveForm(state));
  }
  
  return (
    <div>
      <main>
        <Navbar />
        <section className="contact-section mt-3" id="contact-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center">
                <span className="subheading">Contact</span>
                <h2 className="mb-4">Contact Me</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>

            <div className="row block-9">
              <div className="col-md-7 order-md-last d-flex">
                <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      onChange={handleChange}
                      value={state.name}
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      value={state.email}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={state.subject}
                      onChange={handleChange}
                      name="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      value={state.message}
                      onChange={handleChange}
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>

              <div className="col-md-5 d-flex">
                <div className="row d-flex contact-info mb-5">
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <i
                          className="fas fa-map-marked-alt"
                          style={{ color: "#033fff" }}
                        ></i>
                      </div>
                      <div>
                        <h3 className="mb-3">Address</h3>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <i
                          className="fas fa-phone-alt"
                          style={{ color: "#033fff" }}
                        ></i>
                      </div>
                      <div>
                        <h3 className="mb-3">Contact Number</h3>
                        <p>
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <i
                          className="fab fa-telegram-plane"
                          style={{ color: "#033fff" }}
                        ></i>
                      </div>
                      <div>
                        <h3 className="mb-3">Email Address</h3>
                        <p>
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <i
                          className="fas fa-globe-americas"
                          style={{ color: "#033fff" }}
                        ></i>
                      </div>
                      <div>
                        <h3 className="mb-3">Website</h3>
                        <p>
                          <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
