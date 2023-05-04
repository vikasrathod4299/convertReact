import Heading from '../Heading'
import Divider from '../Divider'
import Input from '../Input'
import Textarea from '../Textarea'

const Contact = () => {
  return (
    <section className="page-section" id="contact">
            <div className="container">

 
            <Heading color={'black'} body={'Contact me'}/>
  
            <Divider color={'dark'}/>
 
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
    
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                            <Input id={'name'} type={'text'} label={'Full name'} placeholder={'Enter your name...'} validations={'required'}/>

                            <Input id={'email'} type={'email'} label={'Email address'} placeholder={'name@example.com'} validations={'required,email'}/>

                            <Input id={'phone'} type={'tel'} label={'Phone number'} placeholder={'(123) 456-7890'} validations={'required'}/>

                            <Textarea style={{height:'10rem'}} id={'message'} type={'text'} label={'Message'} placeholder={'Enter your message here'} validations={'required'}/>

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