/* eslint-disable no-unused-vars */
import Heading from '../shared/Heading'
import Divider from '../shared/Divider'
import Input from '../shared/Input'
import Textarea from '../shared/Textarea'
import {useForm} from 'react-hook-form'

const Contact = () => {
    const {handleSubmit, register, formState:{errors}} = useForm({mode:'all'});

    const onSubmit = (data)=>{
        console.log(data)
    }

  return (
    <section className="page-section" id="contact">
            <div className="container">

            <Heading color={'dark'} body={'Contact me'}/>
  
            <Divider color={'dark'}/>
 
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
    
                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>

                            <Input id={'name'} type={'text'} label={'Full name'} placeholder={'Enter your name...'}  register={register} errors={errors}/>

                            <Input id={'email'} type={'email'} label={'Email address'} placeholder={'name@example.com'} register={register} errors={errors}/>

                            <Input id={'phone'} type={'tel'} label={'Phone number'} placeholder={'(123) 456-7890'}  register={register} errors={errors}/>

                            <Textarea style={{height:'10rem'}} id={'message'} type={'text'} label={'Message'} placeholder={'Enter your message here'} register={register} errors={errors}/> 

                          
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
          
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                
                            <button className="btn btn-primary btn-xl" disabled={Object.values(errors).length>0}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact