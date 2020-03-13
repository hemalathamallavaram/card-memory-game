import React from 'react';

const Header = ()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/"><i class="fa fa-gamepad" aria-hidden="true"></i></a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Memory Game <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header;