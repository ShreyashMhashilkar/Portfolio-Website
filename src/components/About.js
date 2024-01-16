import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const About = () => {
    return (

        <>
            <AnimatedOnScroll animationIn="bounceInLeft">
                <section id="about" class="py-3 py-md-5 py-xl-13" >
                    <div class="container">
                        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div class="col-12 col-lg-6 col-xl-5">
                                <img class="img-fluid align-items-lg-center img-section" src="/img/shreyash.jpeg" alt="" />
                            </div>
                            <div class="col-12 col-lg-6 col-xl-7">
                                <div class="row justify-content-xl-center">
                                    <div class="col-12 col-xl-11">
                                        <h2 class="h1 mb-3 text-center" style={{ color: 'red' }}>ABOUT ME</h2>
                                        <h4 style={{ color: '#ffffff' }}>Front-end Developer/Software Developer</h4>
                                        <p class="mb-5" style={{ color: '#ffffff' }}>Hi there, I'm Shreyash Mhashilkar - a full stack developer. I develop aesthetic and user-friendly websites. I like what I’m currently doing (Web Development!…). Challenging myself to learn new things and expanding my skillset - my driving force. Talking about my personality, I describe myself as a result-oriented person, great team player yet competent solo worker and an efficient individual. You can imagine me as a diligent and easygoing person with a good sense of humour.</p>
                                        {/* <br /> */}
                                        <section class="mb-4 text-center">
                                            <a
                                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                                href="https://www.linkedin.com/in/shreyash-mhashilkar/"
                                                role="button"
                                                data-mdb-ripple-color="dark"
                                            ><h2 style={{ color: '#ffffff' }}><FaLinkedin /></h2></a>

                                            <a
                                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                                href="https://github.com/ShreyashMhashilkar"
                                                role="button"
                                                data-mdb-ripple-color="dark"
                                            ><h2 style={{ color: '#ffffff' }}><SiGithub /></h2>
                                            </a>

                                            <a
                                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                                href="https://www.instagram.com/shreyash_3009/"
                                                role="button"
                                                data-mdb-ripple-color="dark"
                                            ><h2 style={{ color: '#ffffff' }}><FaInstagram /></h2></a>

                                            <a
                                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                                href="https://hi-in.facebook.com/shreyash.mhashilkar.9"
                                                role="button"
                                                data-mdb-ripple-color="dark"
                                            ><h2 style={{ color: '#ffffff' }}><FaFacebookSquare /></h2></a>


                                        </section>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </AnimatedOnScroll>


        </>




    )
}

export default About