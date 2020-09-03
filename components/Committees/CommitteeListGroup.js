import React from 'react';
import CommitteeList from "./CommitteeList";

const CommitteeListGroup = ({title, committees, width}) => (
  <div className="row list m-2 d-flex align-content-start">
    {title !== "" && <h4 className="col-12 text-center my-2">{title}</h4>}
    <div className={`${width > 1000 ? "col-6": ""} ${title === "" ? "mt-3" : ""}`}>
      <CommitteeList
        committees={committees.slice(0, Math.ceil(committees.length / 2))}/>
    </div>
    <div className={`${width > 1000 ? "col-6": ""} ${title === "" ? "mt-3" : ""}`}>
      <CommitteeList
        committees={committees.slice(Math.ceil(committees.length / 2))}/>
    </div>

    {/*<div className={`${title === "" ? "mt-3" : ""}`}>*/}
    {/*  <CommitteeList*/}
    {/*    committees={committees.slice(0, Math.ceil(committees.length / 2))}/>*/}
    {/*</div>*/}
    {/*<div className={`${title === "" ? "mt-3" : ""}`}>*/}
    {/*  <CommitteeList*/}
    {/*    committees={committees.slice(Math.ceil(committees.length / 2))}/>*/}
    {/*</div>*/}

    <style jsx>{`
      .list {
        background-color: #c9cad8;
      }
    `}</style>
  </div>
);

export default CommitteeListGroup;
