import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";


const Experience = () => {
    return (

      
        <>
        <AnimatedOnScroll animationIn="bounceInRight">
                        <h1 className="about-heading" style={{color:"#ffffff"}} id='experience'>EXPERIENCE</h1>

            <section class="design-section">
                <div class="timeline">


                    <div class="timeline-empty">
                    </div>



                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>Larsen and Toubro Infotech</h3>
                        <p>Graduate Engineer Trainee</p>
                        <p>2021</p>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>LTIMindtree</h3>
                        <p>Consultant</p>
                        <p>2021-2023</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>LTIMindtree</h3>
                        <p>Senior Consultant</p>
                        <p>2023</p>
                    </div>

                </div>

            </section>
            </AnimatedOnScroll>
        </>


    )
}

export default Experience