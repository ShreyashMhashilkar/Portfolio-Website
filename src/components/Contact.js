import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Contact = () => {
  return (
    <>
            <AnimatedOnScroll animationIn="bounceInRight">

      <div className='container'>
      <h1 className="about-heading" id='contact' style={{color:"#ffffff"}}>CONTACT</h1>
        <form>
          <div class="form-outline mb-4">
          <label class="form-label" for="form4Example1" style={{color:"#ffffff"}}>Name</label>

            <input type="text" id="form4Example1" class="form-control" />
          </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form4Example2" style={{color:"#ffffff"}}>Email address</label>

            <input type="email" id="form4Example2" class="form-control" />
          </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form4Example3" style={{color:"#ffffff"}}>Message</label>

            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          </div>

          

          <button type="submit" class="btn btn-warning btn-block mb-4">Send</button>
        </form>
      </div>
      </AnimatedOnScroll>
    </>
  )
}

export default Contact