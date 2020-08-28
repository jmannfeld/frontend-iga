import Link from "next/link";
import React from "react";

import * as committees from "../data/committees.json";
import * as standing_committees from "../data/standing_committees.json";
import * as interim_committees from "../data/interim_committees.json";
import * as conference_committees from "../data/conference_committees.json";
import CommitteeLayout from "../pages/committees";

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
    <li className="nav-item dropdown dropdown-submenu">
      <a className="nav-link active dropdown-toggle" data-toggle="dropdown" href="#" role="button">Committees</a>
      <div className="dropdown-menu">
          <div className="all-committees">
            <Link href="/committees"><span className="dropdown-item">All</span></Link>
              <ul className="sub-dropdown dropdown-menu">
                {committees.committees.map(({ lpid, name}) => (
                    <li className="nav-item" key={lpid}>
                      <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                    </li>
                ))}
              </ul>
          </div>
          <div className="standing-committees">
            <Link href="/committees/standing"><span className="dropdown-item">Standing</span></Link>
              <ul className="sub-dropdown dropdown-menu">
                {standing_committees.committees.map(({ lpid, name}) => (
                    <li className="nav-item" key={lpid}>
                      <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                    </li>
                ))}
              </ul>
          </div>
          <div className="interim-committees">
            <Link href="/committees/interim"><span className="dropdown-item">Interim</span></Link>
              <ul className="sub-dropdown dropdown-menu">
                {interim_committees.committees.map(({ lpid, name}) => (
                    <li className="nav-item" key={lpid}>
                      <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                    </li>
                ))}
              </ul>
          </div>
          <div className="conference-committees">
            <Link href="/committees/conference"><span className="dropdown-item">Conference</span></Link>
              <ul className="sub-dropdown dropdown-menu">
                {conference_committees.committees.map(({ lpid, name}) => (
                    <li className="nav-item" key={lpid}>
                      <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                    </li>
                ))}
              </ul>
          </div>
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

      .sub-dropdown {
        display: none;
      }

      .all-committees:hover .sub-dropdown,
      .standing-committees:hover .sub-dropdown,
      .interim-committees:hover .sub-dropdown,
      .conference-committees:hover .sub-dropdown {
        display: block;
      }
      .dropdown-menu:hover .sub-dropdown {
        left: 100%;
        top: 0;
      }
    `}</style>

  </ul>
);

export async function getServerSideProps() {
  const all_committees_response = JSON.parse(JSON.stringify(committees)); // this is where we would have the API call, e.g. await fetch(...)
  const standing_committees_response = JSON.parse(JSON.stringify(standing_committees));
  const interim_committees_response = JSON.parse(JSON.stringify(interim_committees));
  const conference_committees_response = JSON.parse(JSON.stringify(conference_committees));
  return {
    props: {
      committees: all_committees_response.default,
      standing_committees: standing_committees_response.default,
      interim_committees: interim_committees_response.default,
      conference_committees: conference_committees_response.default
    }
  }
}

export default Navbar;