import Link from "next/link";
import React from "react";

const Navbar = (props) => (
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
            <Link href="/committees"><a className="dropdown-item">All</a></Link>
          </div>
          <div className="standing-committees">
            <Link href="/committees/standing"><a className="dropdown-item">Standing</a></Link>
              <div className="sub-dropdown dropdown-menu committee-tables">
                  <table className="table table-striped house-committees">
                      <thead className="thead-light">
                        <tr><th scope="col"><h6>House</h6></th></tr>
                      </thead>
                    {splitHouseAndSenateCommittees(props.standing_committees.default.committees)[0].map(({ lpid, name}) => (
                        <tr className="list-group-item-action">
                            <td className="nav-item" key={lpid}>
                              <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                            </td>
                        </tr>
                    ))}
                  </table>
                  <table className="table table-striped senate-committees">
                      <thead className="thead-light">
                        <tr><th scope="col"><h6>Senate</h6></th></tr>
                      </thead>
                    {splitHouseAndSenateCommittees(props.standing_committees.default.committees)[1].map(({ lpid, name}) => (
                        <tr className="list-group-item-action">
                            <td className="nav-item" key={lpid}>
                              <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                            </td>
                        </tr>
                    ))}
                  </table>
              </div>
          </div>
          <div className="interim-committees">
            <Link href="/committees/interim"><a className="dropdown-item">Interim</a></Link>
              <ul className="sub-dropdown dropdown-menu list-group">
                {props.interim_committees.default.committees.map(({ lpid, name}) => (
                    <li className="nav-item list-group-item list-group-item-action" key={lpid}>
                      <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a className="dropdown-item text-left">{name}</a></Link>
                    </li>
                ))}
              </ul>
          </div>
          <div className="conference-committees">
            <Link href="/committees/conference"><a className="dropdown-item">Conference</a></Link>
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
      .odd {
        background-color: red;
      }
    `}</style>

  </ul>
);

function splitHouseAndSenateCommittees(standing_committees) {
    let houseCommittees = [];
    let senateCommittees = [];
    standing_committees.map((committee) => {
        if (committee["chamber"] === "house") {
            houseCommittees.push(committee);
        } else {
            senateCommittees.push(committee);
        }
    });
    return [houseCommittees, senateCommittees];
}

export default Navbar;