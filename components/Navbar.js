import Link from "next/link";
import React from "react";

const Navbar = () => (
  <ul className="nav nav-tabs nav-fill">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Information</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Session</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link active dropdown-toggle" data-toggle="dropdown" href="#" role="button">Committees</a>
      <div className="dropdown-menu">
        <Link href="/committees"><a className="dropdown-item">All</a></Link>
        <Link href="/committees/standing"><a className="dropdown-item">Standing</a></Link>
        <Link href="/committees/interim"><a className="dropdown-item">Interim</a></Link>
        <Link href="/committees/conference"><a className="dropdown-item">Conference</a></Link>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Legislation</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Laws</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Session</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Publications</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Login</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>

    <style jsx>{`
      .nav-tabs, .nav-link {
        border: none;
        margin-bottom: -1px;
      }
    
      .nav-link.active, .nav-link:hover {
        background-color: white;
        border: none;
        color: rgb(5, 24, 54);
      }
      
      a {
        color: rgb(5, 24, 54);
      }
    `}</style>

  </ul>
);

export default Navbar;