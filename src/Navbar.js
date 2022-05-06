import React from 'react';
function Navbar(){
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Our Products</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.google.co.in/maps/dir/18.581,73.7830858/vandana+misal+indapur/@18.3303028,73.8516886,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc479b8c73ad659:0xc1f6c043e6002352!2m2!1d75.0432971!2d18.1047422">How to reach</a>
      </li>
    </ul>
    <span className="navbar-text">
       #Good food is Good mood
    </span>
  </div>
</nav>
)}

export default Navbar;