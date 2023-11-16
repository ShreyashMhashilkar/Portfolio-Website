import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Education = () => {
    return (

<>
<AnimatedOnScroll animationIn="bounceInRight">

          <h1 className="about-heading" id='education' style={{color:"#ffffff"}}>EDUCATION</h1>

<section class="design-section">
<div class="timeline">

        
                  <div class="timeline-empty">
                  </div>



               <div class="timeline-middle">
                   <div class="timeline-circle"></div>
               </div>
               <div class="timeline-component timeline-content">
                <h3>SSC</h3>
                <p>St.Aloysius High School</p>
           </div>
                <div class="timeline-component timeline-content">
                         <h3>HSS</h3>
                         <p>Utkarsha Vidyalaya & Junior College</p>
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
                <h4>Bachelor's of Engineering in Information Technology</h4>
                <p>Vidyavardhini's College of Engineering and Technology</p>
           </div>

       </div>
    
</section>
</AnimatedOnScroll>
</>
    )
}

export default Education