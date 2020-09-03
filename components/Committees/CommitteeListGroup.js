import React from 'react';
import CommitteeList from "./CommitteeList";

const CommitteeListGroup = ({title, committees}) => (
  <div className="row list m-2 d-flex align-content-start">
    {title !== "" && <h4 className="col-12 text-center my-2">{title}</h4>}
    <div id="column_1" className={`col-6 ${title === "" ? "mt-3" : ""}`}>
      <CommitteeList
        committees={committees.slice(0, Math.ceil(committees.length / 2))}/>
    </div>
    <div id="column_2" className={`col-6 ${title === "" ? "mt-3" : ""}`}>
      <CommitteeList
        committees={committees.slice(Math.ceil(committees.length / 2))}/>
    </div>

    <div id="no_columns" className={`${title === "" ? "mt-3" : ""}`}>
      <CommitteeList
        committees={committees}/>
    </div>

    <style jsx>{`
      .list {
        background-color: #c9cad8;
      }
      
      #no_columns {
        display: none;
      }
      
      @media screen and (max-width: 1000px) {
        #no_columns {
          display: block;
        }
        
        #column_1 {
          display: none
        }
        
        #column_2 {
          display: none
        }
      }
    `}</style>
  </div>
);

export default CommitteeListGroup;
