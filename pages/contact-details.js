import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearForm } from "../redux/actions";
import Router from "next/router";

export default function ContactDetails(props) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  useEffect(() => {
    if (!Object.keys(formData.data).length) {
      Router.push("/");
    }
  }, [formData.data]);

  return (
    <div>
      <main>
        <Navbar />
        <section className="contact-section mt-3" id="contact-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center">
                <span className="subheading">Contact</span>
                <h2 className="mb-4">Contact Details</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>

            <div className="">
              <div className="d-flex">
                <div className="w-100 row d-flex justify-content-center m-0">
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div>
                        <h3 className="mb-3">Name</h3>
                        <p>{formData.data.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div>
                        <h3 className="mb-3">Email</h3>
                        <p>{formData.data.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div>
                        <h3 className="mb-3">Subject</h3>
                        <p>{formData.data.subject}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div>
                        <h3 className="mb-3">Message</h3>
                        <p>{formData.data.message}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center">
                      <button className="btn btn-primary py-3 px-5"
                      onClick={(e)=>{
                        dispatch(clearForm({}));
                      }}
                      >
                        Clear
                      </button>
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
