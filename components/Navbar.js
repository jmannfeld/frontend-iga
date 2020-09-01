import Link from "next/link";
import React from "react";
import {Context} from "./Utils/Context";

const Navbar = () => (
  <ul className="nav nav-tabs nav-fill">
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Information</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Session</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/committees"><a className="nav-link active" role="button">Committees</a></Link>
      <div className="dropdown-menu nav-display">

          <div className="standing-committees">
            <Link href="/committees/standing"><a className="dropdown-item">Standing</a></Link>
              <div className="sub-dropdown dropdown-menu committee-tables">
                  <table className="table table-striped house-committees">
                    <thead className="thead-light">
                      <tr><th scope="col"><h6>House</h6></th></tr>
                    </thead>
                    <Context.Consumer>
                      {(context) => (
                        context.state.house_standing_committees.map(({ lpid, name}) => (
                          <tr className="list-group-item-action">
                            <td className="nav-item" key={lpid}>
                              <Link href="/committees/[lpid]" as={`/committees/${lpid}`}>
                                <a className="dropdown-item text-left">{name}</a>
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </Context.Consumer>
                  </table>
                  <table className="table table-striped senate-committees">
                    <thead className="thead-light">
                      <tr><th scope="col"><h6>Senate</h6></th></tr>
                    </thead>
                    <Context.Consumer>
                      {(context) => (
                        context.state.senate_standing_committees.map(({ lpid, name}) => (
                          <tr className="list-group-item-action">
                            <td className="nav-item" key={lpid}>
                              <Link href="/committees/[lpid]" as={`/committees/${lpid}`}>
                                <a className="dropdown-item text-left">{name}</a>
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </Context.Consumer>
                  </table>
              </div>
          </div>
          <div className="interim-committees">
            <Link href="/committees/interim"><a className="dropdown-item">Interim</a></Link>
              <ul className="sub-dropdown dropdown-menu list-group">
                <Context.Consumer>
                  {(context) => (
                    context.state.interim_committees.map(({lpid, name}) => (
                      <li className="nav-item list-group-item list-group-item-action" key={lpid}>
                        <Link href="/committees/[lpid]" as={`/committees/${lpid}`}>
                          <a className="dropdown-item text-left">{name}</a>
                        </Link>
                      </li>
                    ))
                  )}
                </Context.Consumer>
              </ul>
          </div>
          <div className="conference-committees">
            <Link href="/committees/conference"><a className="dropdown-item">Conference</a></Link>
          </div>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Legislation</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Laws</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Session</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Publications</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"/>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Login</a></Link>
      <div className="dropdown-menu nav-display">
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

      .nav-item:hover .nav-display {
        display: block;
      }

      .sub-dropdown {
        display: none;
      }

      .standing-committees:hover .committee-tables,
      .interim-committees:hover .sub-dropdown {
        display: block;
        margin-top: 0;
        padding-top: 0;
      }

      .dropdown-menu {
        padding: 0;
      }

      .dropdown-menu:hover .sub-dropdown {
        left: 100%;
        top: 0;
        width: 700px;
      }
      .house-committees {
        width: 50%;
        float: left;
        margin: 0;
      }
      .senate-committees {
        width: 50%;
        float: right;
        margin: 0;
      }
      .senate-committees th,
      .house-committees th {
        text-align: center;

      }
    `}</style>

  </ul>
);

export default Navbar;