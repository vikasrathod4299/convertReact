import Heading from '../Util/Heading'
import Divider from '../Util/Divider'
import Input from '../Util/Input'
import Textarea from '../Util/Textarea'

const Contact = () => {
  return (
    <section className="page-section" id="contact">
            <div className="container">

 
            <Heading color={'dark'} body={'Contact me'}/>
  
            <Divider color={'dark'}/>
 
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
    
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                            {/* <Input id={'name'} type={'text'} label={'Full name'} placeholder={'Enter your name...'} validations={'required'}/>

                            <Input id={'email'} type={'email'} label={'Email address'} placeholder={'name@example.com'} validations={'required,email'}/>

                            <Input id={'phone'} type={'tel'} label={'Phone number'} placeholder={'(123) 456-7890'} validations={'required'}/>

                            <Textarea style={{height:'10rem'}} id={'message'} type={'text'} label={'Message'} placeholder={'Enter your message here'} validations={'required'}/> */}

                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>

                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
          
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact