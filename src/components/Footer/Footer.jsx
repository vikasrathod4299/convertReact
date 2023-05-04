import Location from './Location'
import SocialLinks from './SocialLinks'
import AboutFreelancer from './AboutFreelancer'
import Copyright from "./Copyright";

const Footer = () => {
  return (
            <>
                <footer className="footer text-center">
                        <div className="container">
                            <div className="row">

                                <Location/>

                                <SocialLinks/>

                                <AboutFreelancer/>

                            </div>
                        </div>
                </footer>

                <Copyright />

            </>
          )
}

export default Footer