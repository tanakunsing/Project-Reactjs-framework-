import Layout from "./Layout";
import Stytled from './Layout.module.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e59le4n', 'template_ui6uhnt', form.current, 'YFSw4sVmXRpb89gqN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Layout header={'Contact'}>
      <form ref={form} onSubmit={sendEmail}>
        <section class="mb-4">
          <div className={Stytled.Product_1}>
            <div className="container p-2">
              <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

              <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

              <div class="row">


                <div class="col-md-9 mb-md-0 mb-5">
              


                    <div class="row">
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input type="text" id="name"name="user_name" class="form-control" />
                          <label for="name" class="">Your name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input type="text" id="email" name="user_email" class="form-control" />
                          <label for="email" class="">Your email</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                     
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form">
                          <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                          <label for="message">Your message</label>
                        </div>

                      </div>
                    </div>
                 
                  <div class="text-center text-md-left">
                
                    <input type="submit" value="Send" class="btn btn-primary" />
                  </div>
                  <div class="status"></div>
                </div>
                <div class="col-md-3 text-center">
                  <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>San Francisco, CA 94126, USA</p>
                    </li>
                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 01 234 567 89</p>
                    </li>
                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@mdbootstrap.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </form>
      </Layout>

    </>
  )
}
export default Contact;