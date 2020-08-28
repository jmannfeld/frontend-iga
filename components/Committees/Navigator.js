import React from 'react';
import Link from './NavigatorLink';
import * as sessionYears from '../../data/session_years.json';

const currentSession = sessionYears.years.filter(year => year.active)[0];
const pastSessions = sessionYears.years.filter(year => !year.active);

const Navigator = () => (
  <div className="navigator h-100 px-3 py-3">
    <h1 className="navigator-title mb-3 text-center">Committee Navigator</h1>
    <div className="dropdown">
      <a
        className="btn btn-dropdown dropdown-toggle w-100"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {currentSession.name}
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {pastSessions.map(({ name }) => (
          <a className="dropdown-item" href="#" key={name}>
            {name}
          </a>
        ))}
      </div>
    </div>

    <hr/>
    <div>
      <Link href="/committees/standing" activeClassName="active">
        <a className="dropdown-item">Standing</a>
      </Link>
      <Link href="/committees/standing">
        <a className="dropdown-item indented">House</a>
      </Link>
      <Link href="/committees/standing">
        <a className="dropdown-item indented">Senate</a>
      </Link>
      <Link href="/committees/interim" activeClassName="active">
        <a className="dropdown-item">Interim</a>
      </Link>
      <Link href="/committees/conference" activeClassName="active">
        <a className="dropdown-item">Conference</a>
      </Link>
      <Link href="/committees/grid">
        <a className="dropdown-item indented">Committee Grid</a>
      </Link>
      <hr/>
      <Link href="/faq">
        <a className="dropdown-item wide">Witness Guidelines and FAQs</a>
      </Link>
    </div>
    <style jsx>{`
      .navigator {
        background-color: rgb(213, 215, 222);
      }
      .navigator-title {
        font-size: 1.15rem;
      }
      .indented {
        padding-left: 3rem;
      }
      .btn-dropdown {
        background-color: rgb(203, 206, 214);
      }
      .dropdown-item {
        white-space: pre-wrap;
        color: rgb(5, 24, 54);
        margin-top: .5rem;
        margin-bottom: .5rem;
      }
      .active:after {
        content: '';
      }
      .dropdown-item.active,
      .dropdown-item:active,
      .dropdown-item:hover,
      .dropdown-item:focus {
        background-color: rgb(203, 206, 214);
        color: rgb(5, 24, 54);
      }
    `}</style>
  </div>
);

export default Navigator;
