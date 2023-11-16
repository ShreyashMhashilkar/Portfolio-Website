import movie from '../Images/movieapp.png';
import invitation from '../Images/invitation.png'
import pizza from '../Images/pizza.png'
import wheretowatch from '../Images/wheretowatch.png'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Projects = () => {
  return (
    <>
            <AnimatedOnScroll animationIn="bounceInLeft">

      <h1 className="about-heading mt-5" id='project' style={{color:'#ffffff'}}>PROJECTS</h1>
      

      <div class="container">
     

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" >
            <div class="card h-100 border_shadow"  style={{backgroundColor:'black'}}>
              <img src={movie} style={{ height: '70%', width: '90%' }} class="card-img-top m-3" alt="..." />
              <div class="card-body" >
                <h5 class="card-title" style={{color:'#ffffff'}}>MOVIE BOOKING APP</h5>
                <p>
                <span class="badge rounded-pill text-bg-primary mx-1 ">ReactJS</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">Material UI</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">HTML</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">CSS</span>
                </p>
                <a href = "https://github.com/ShreyashMhashilkar/Movie-Ticket-Booking-App"><button type="button" class="btn btn-outline-primary btn-sm" ><i class="bi bi-github mx-2"></i>CODE</button></a>
                <a href = "https://shreyash-movie-ticket-booking-app.netlify.app/"><button type="button" class="btn btn-primary btn-sm mx-2"><span class="dot mx-2"></span>LIVE</button></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border_shadow" style={{backgroundColor:'black'}}>
              <img src={invitation} style={{ height: '70%', width: '90%' }} class="card-img-top m-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{color:'#ffffff'}}>INVITATION CARD MAKER</h5>
                <p>
                <span class="badge rounded-pill text-bg-primary mx-1 ">ReactJS</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">Bootstrap</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">HTML</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">CSS</span>
                </p>
                <a href = "https://github.com/ShreyashMhashilkar/Invitation-Card-Maker"><button type="button" class="btn btn-outline-primary btn-sm" ><i class="bi bi-github mx-2"></i>CODE</button></a>
                <a href = "https://shreyash-invitation-card-maker.netlify.app/"><button type="button" class="btn btn-primary btn-sm mx-2"><span class="dot mx-2"></span>LIVE</button></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border_shadow" style={{backgroundColor:'black'}}>
              <img src={pizza} style={{ height: '70%', width: '90%' }} class="card-img-top m-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{color:'#ffffff'}}>PIZZA ORDERING APP</h5>
                <p>
                <span class="badge rounded-pill text-bg-primary mx-1 ">ReactJS</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">Bootstrap</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">HTML</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">CSS</span>
                </p>
                <a href = "https://github.com/ShreyashMhashilkar/Pizza-Ordering-App"><button type="button" class="btn btn-outline-primary btn-sm" ><i class="bi bi-github mx-2"></i>CODE</button></a>
                <a href = "https://shreyash-pizza-ordering-app.netlify.app/"><button type="button" class="btn btn-primary btn-sm mx-2"><span class="dot mx-2"></span>LIVE</button></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border_shadow" style={{backgroundColor:'black'}}>
              <img src={wheretowatch} style={{ height: '70%', width: '90%' }} class="card-img-top m-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{color:'#ffffff'}}>WHERE TO WATCH</h5>
                <p>
                <span class="badge rounded-pill text-bg-primary mx-1 ">ReactJS</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">Django</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">Python</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">Bootstrap</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">HTML</span>
                <span class="badge rounded-pill text-bg-primary mx-1 ">CSS</span>
                </p>
                <a href = "https://github.com/ShreyashMhashilkar/Where-To-Watch"><button type="button" class="btn btn-outline-primary btn-sm" ><i class="bi bi-github mx-2"></i>CODE</button></a>
                {/* <a href = "https://shreyash-movie-ticket-booking-app.netlify.app/"><button type="button" class="btn btn-primary btn-sm mx-2"><span class="dot mx-2"></span>LIVE</button></a> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      </AnimatedOnScroll>
    </>
  )
}


export default Projects