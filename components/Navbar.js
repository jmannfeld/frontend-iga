import Link from "next/link";
import React from "react";
import {Context} from "./Utils/Context";
import { FaRegFilePdf } from 'react-icons/fa';

const Navbar = () => (
  <ul className="nav nav-tabs nav-fill">
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Information</a></Link>
      <div className="dropdown-menu nav-display">
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">About the IGA</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        About and Contact the IGA
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Notices & Updates
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Continuing Legal Education
                    </a>
                </li>
            </ul>
        </div>
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">Archives</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Videos
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Archives (2000-2013)
                    </a>
                </li>
            </ul>
        </div>
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">Legislator Database</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Database
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Session</a></Link>
      <div className="dropdown-menu nav-display">
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">2020 Session</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Senate Webcast
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        House Webcast
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Rules
                    </a>
                </li>
            </ul>
        </div>
        <div className="dropdown-divider"/>
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">Senate</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Live Chamber Webcast
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Auto Attend
                    </a>
                </li>
            </ul>
        </div>
        <div className="dropdown-divider"/>
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">House</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Live Chamber Webcast
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Auto Attend
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/committees"><a className="nav-link active" role="button">Committees</a></Link>
      <div className="dropdown-menu nav-display">

          <div className="standing-committees">
            <Link href="/committees/standing"><a className="dropdown-item">Standing</a></Link>
              <div id="standing-menu" className="sub-dropdown dropdown-menu committee-tables">
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
              <ul id="interim-menu" className="sub-dropdown dropdown-menu list-group">
                <Context.Consumer>
                  {(context) => (
                    context.state.interim_legislative_committees.map(({lpid, name}) => (
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
          <li>
            <Link href="#">
              <a className="dropdown-item misc">House Committee Schedule <FaRegFilePdf /></a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="dropdown-item misc">Senate Committee Schedule <FaRegFilePdf /></a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="dropdown-item misc">House Conference Committee Schedule <FaRegFilePdf /></a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="dropdown-item misc">Senate Conference Committee Schedule <FaRegFilePdf /></a>
            </Link>
          </li>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Legislation</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Bills</a>
        <a className="dropdown-item" href="#">By Legislator</a>
        <a className="dropdown-item" href="#">Resolutions</a>
        <a className="dropdown-item" href="#">By Subject</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Laws</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Constitution</a>
        <a className="dropdown-item" href="#">Indiana Code</a>
        <a className="dropdown-item" href="#">Noncode Statutes</a>
        <a className="dropdown-item" href="#">Acts</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Publications</a></Link>
      <div className="dropdown-menu nav-display">
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">Rules</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Administrative Rules Drafting Manual
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Indiana Register
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Administrative Code
                    </a>
                </li>
            </ul>
        </div>
        <div className="dropdown-divider"/>
        <div className="standard-submenu">
          <a className="dropdown-item" href="#">Publications</a>
            <ul className="sub-dropdown list-group">
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Handbooks
                    </a>
                </li>
                <li className="nav-item list-group-item list-group-item-action">
                    <a className="dropdown-item text-left">
                        Tax Incentive Reviews
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </li>
    <li className="nav-item dropdown">
      <Link href="/"><a className="nav-link" role="button">Login</a></Link>
      <div className="dropdown-menu nav-display">
        <a className="dropdown-item" href="#">Login</a>
      </div>
    </li>

    <style jsx>{`
      .nav-tabs, .nav-link {
        border: none;
        margin-bottom: -1px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    
      .nav-link.active, .nav-link:hover {
        background-color: white;
        border: none;
        color: rgb(5, 24, 54);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      
      a {
        color: rgb(5, 24, 54);
      }

      .nav-item:hover .nav-display {
        display: block;
      }

      .sub-dropdown {
        display: none;
        padding: 0px;
      }
      
      // list-group-item {
      //   max-height: 40px
      // }

      .standing-committees:hover .committee-tables,
      .interim-committees:hover .sub-dropdown {
        display: block;
        margin-top: 0;
        padding-top: 0;
        left: 100%;
        top: 0px;
        width: 700px;
      }

      .dropdown-menu {
        padding: 0;
        min-width: 100%;
      }
      
      .standard-submenu {
        max-height: 40px;
      }

      // .dropdown-menu:hover .sub-dropdown {
      //   left: 100%;
      //   top: 0;
      //   width: 700px;
      // }
      
      .standard-submenu:hover .sub-dropdown {
        position: relative;
        display: block;
        margin-top: 0;
        padding-top: 0;
        width: 400px;
        left:100%;
        top: -40px;
      }
      
      .house-committees {
        width: 50%;
        float: left;
        margin: 0;
        table-layout: fixed;
      }
      .senate-committees {
        width: 50%;
        float: right;
        margin: 0;
        table-layout: fixed;
      }
      .senate-committees th,
      .house-committees th {
        text-align: center;

      }
      .senate-committees td,
      .house-committees td,
      .interim-committees li {
        padding: 1px;
        overflow: hidden;
      }
        
      @media screen and (max-width: 1500px) {
        #standing-menu {
          left: 0%;
          top: auto;
        }

        #interim-menu {
          left: 0%;
          top: auto;
        }
      }
    `}</style>

  </ul>
);

export default Navbar;
