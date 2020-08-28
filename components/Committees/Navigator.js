import React from 'react';
import Link from './NavigatorLink';
import * as sessionYears from '../../data/session_years.json';

const currentSession = sessionYears.years.filter(year => year.active)[0];
const pastSessions = sessionYears.years.filter(year => !year.active);

const Navigator = () => (
  <div className="navigator h-100 px-3 py-3">
    <h1 className="navigator-title">Committee Navigator</h1>
    <div className="dropdown">
      <a
        className="btn btn-secondary dropdown-toggle"
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
    <div className="navigator-list">
      <Link href="/committees/standing" activeClassName="active">
        <a className="dropdown-item">Standing</a>
      </Link>
      <Link href="/committees/standing">
        <a className="dropdown-item indented">House</a>
      </Link>
      <Link href="/committees/standing">
        <a className="dropdown-item indented">Seante</a>
      </Link>
      <Link href="/committees/interim" activeClassName="active">
        <a className="dropdown-item">Interim</a>
      </Link>
      <Link href="/committees/conference" activeClassName="active">
        <a className="dropdown-item">Conference</a>
      </Link>
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
        margin-bottom: 0.75rem;
      }
      .navigator-list {
        padding-top: 0.5rem;
      }
      .indented {
        padding-left: 3rem;
      }
      .dropdown-item {
        white-space: pre-wrap;
      }
      .active:after {
        content: '';
      }
      .dropdown-item.active,
      .dropdown-item:active {
        background-color: #28256feb;
      }
    `}</style>
  </div>
);

export default Navigator;
