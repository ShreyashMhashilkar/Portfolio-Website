import { AnimatedOnScroll } from "react-animated-css-onscroll";


const Home = () => {
  return (
    <>
    <AnimatedOnScroll animationIn="fadeIn">
<div id="home">
  <br/><br/><br/><br/><br/><br/><br/>
  <div className="text-center mt-5" >
    <h1 style={{fontSize:'70px',color:'#ffffff'}}>HELLO, I AM </h1>
    <h1 style={{fontSize:'50px',color:'#FFFF00'}}>SHREYASH MHASHILKAR </h1>

  </div>

  <br/><br/><br/><br/>
  </div>
</AnimatedOnScroll>
    </>
  )
}

export default Home