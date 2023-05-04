
import Heading from '../Heading'
import Divider from '../Divider'


const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
 
        <Heading color={'white'} body={'About'}/>
  
        <Divider color={'light'}/>

        <div className="row">
            <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>

        <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
            <i className="fas fa-download me-2"></i>
            Free Download!
        </a>
        </div>
    
    </div>
</section>
  )
}

export default About