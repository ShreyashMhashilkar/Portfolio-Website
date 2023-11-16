import { AnimatedOnScroll } from "react-animated-css-onscroll";


const Skills = () => {

    const skills = ['HTML', 'REACT.JS',  'CSS','MATERIAL UI', 'BOOTSTRAP', 'PYTHON', 'JAVASCRIPT']
    return (
        <>

            <h1 className="about-heading mt-5" id="skill" style={{color:"#ffffff"}}>Skills</h1>


           
             <AnimatedOnScroll animationIn="bounceInLeft">
            <div className="container">
            <div class="row">

                    <div class="col-sm-6">
                        <div class="card border_shadow">
                            <div class="card-body">



                                <h4 className="h4-white">HTML</h4>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar " style={{ width: '90%' }}>90%</div>
                                </div>
                                
                                <h4 className="h4-white">CSS</h4>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar " style={{ width: '90%' }}>90%</div>
                                </div>
                                <h4 className="h4-white">BOOTSTRAP</h4>
                                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar " style={{ width: '80%' }}>80%</div>
                                </div>
                                <h4 className="h4-white">REACT JS</h4>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar " style={{ width: '90%' }}>90%</div>
                                </div>
                                <h4 className="h4-white">MATERAIL UI</h4>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar " style={{ width: '85%' }}>85%</div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-6">
                        <div class="card border_shadow">
                            <div class="card-body">
                                <h4 className="h4-white">PYTHON</h4>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning " style={{ width: '80%' }}>90%</div>
                                </div>
                                <h4 className="h4-white">JAVASCRIPT</h4>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style={{ width: '70%' }}>85%</div>
                                </div>
                                <h4 className="h4-white">REDUX</h4>
                                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning " style={{ width: '75%' }}>75%</div>
                                </div>
                                <h4 className="h4-white">DJANGO</h4>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style={{ width: '80%' }}>80%</div>
                                </div>
                                <h4 className="h4-white">SELENIUM</h4>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style={{ width: '80%' }}>75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            <br />
            </AnimatedOnScroll>
        </>
    )
}

export default Skills