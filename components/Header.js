import Link from "next/link";
import React from "react";

import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => (
  <div className="container-fluid header">
    <div className="row">
      <div className="col-8 d-flex flex-column">
        <div className="row mb-auto">
          <div className="col-2">
            <Link href="/"><a><img src="/logo.png" alt="Logo" /></a></Link>
          </div>
          <div className="col-10 pl-0">
            <div className="row h-100 d-flex align-items-center align-items-center">
              <div className="col-12">
                <h3 className="header-name font-weight-bold mb-0 mt-1">Indiana General Assembly</h3>
              </div>
              <div className="col-12">
                <h4 className="header-name">2020 Session</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="col">
        <Search/>
      </div>
    </div>

    <style jsx>{`
      .header {
        background-color: #c9cad8;
      }
      
      .header-name {
        color: rgb(5, 24, 54)
      }
    `}</style>
  </div>
);

export default Header;