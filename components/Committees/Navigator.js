import React from "react";
import Link from 'next/link';
import { FaRegFilePdf } from 'react-icons/fa';

import * as sessionYears from '../../data/session_years.json';
import {Context} from '../Utils/Context';

const currentSession = sessionYears.years.filter(year => year.active)[0];
const pastSessions = sessionYears.years.filter(year => !year.active);

const Navigator = () => {
  return (
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
      <hr />
      <div>
      <h5>Filter by Type</h5>
        <Context.Consumer>
          {(context) => (
            <>
              <Link href="/committees/standing">
                <a className={`dropdown-item ${context.state.committee_active === "standing" ? "active": ""}`}
                   onClick={(event) => {
                     context.setCommitteeFilter("");
                   }}>Standing</a>
              </Link>
              <Link href="/committees/standing">
                <a className={`dropdown-item indented ${context.state.committee_active === "standing" && context.state.committee_filter === "house" ? "active": ""}`}
                   onClick={(event) => {
                     context.setCommitteeFilter("house");
                   }}>House</a>
              </Link>
              <Link href="/committees/standing">
                <a className={`dropdown-item indented ${context.state.committee_active === "standing" && context.state.committee_filter === "senate" ? "active": ""}`}
                   onClick={(event) => {
                     context.setCommitteeFilter("senate");
                   }}>Senate</a>
              </Link>
              <Link href="/committees/interim">
                <a className={`dropdown-item ${context.state.committee_active === "interim" ? "active": ""}`}
                   onClick={(event) => {
                      context.setCommitteeFilter("");
                    }}>Interim</a>
              </Link>
              <Link href="/committees/conference">
                <a className={`dropdown-item ${context.state.committee_active === "conference" ? "active": ""}`}
                   onClick={(event) => {
                     context.setCommitteeFilter("");
                   }}>Conference</a>
              </Link>
              <Link href="/committees/grid">
                <a className={`dropdown-item ${context.state.committee_active === "grid" ? "active": ""}`}
                   onClick={(event) => {
                     context.setCommitteeFilter("");
                   }}>Committee Grid</a>
              </Link>
            </>
          )}
        </Context.Consumer>
        <hr />
        <h5 className="navigator-title mb-3 text-center">Schedules</h5>
        <Link href="#">
          <a className="dropdown-item misc">House Committee Schedule <FaRegFilePdf /></a>
        </Link>
        <Link href="#">
          <a className="dropdown-item misc">Senate Committee Schedule <FaRegFilePdf /></a>
        </Link>
        <Link href="#">
          <a className="dropdown-item misc">House Conference Committee Schedule <FaRegFilePdf /></a>
        </Link>
        <Link href="#">
          <a className="dropdown-item misc">Senate Conference Committee Schedule <FaRegFilePdf /></a>
        </Link>
        <hr />
        <Link href="/faq">
          <a className="dropdown-item misc">Witness Guidelines and FAQs</a>
        </Link>
      </div>
      <style jsx>{`
        .navigator {
          background-color: #04193617;
          border-radius: 5px;
        }
        .navigator-title {
          font-size: 1.15rem;
          font-weight: 600;
        }
        .btn-dropdown {
          background-color: rgb(203, 206, 214);
        }
        .dropdown-item {
          white-space: pre-wrap;
          color: rgb(5, 24, 54);
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          padding: 0.25rem 1.0rem;
        }
        .indented {
          padding-left: 3rem;
          font-weight: 400;
        }
        .misc {
          font-weight: 400;
        }
        .active:after {
          content: '';
        }
        .dropdown-item.active,
        .dropdown-item:active,
        .dropdown-item:hover,
        .dropdown-item:focus {
          background-color: #114089;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Navigator;
