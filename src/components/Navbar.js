const Navbar = ()=>{

  
    return(
        <>
<nav class="navbar navbar-expand-lg fixed-top navbarScroll" >
        <div class="container">
          <a class="navbar-brand" href="#" style={{ color: "white" }}>Shreyash</a>
          <button style={{ color: "white" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home" style={{ color: "white" }}>HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" style={{ color: "white" }}>ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education" style={{ color: "white" }}>EDUCATION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skill" style={{ color: "white" }}>SKILLS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience" style={{ color: "white" }}>EXPERIENCE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#project" style={{ color: "white" }}>PROJECT</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

        </>
    )
}

export default Navbar