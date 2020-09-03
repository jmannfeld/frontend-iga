import React from "react";
import Head from 'next/head';

import Navigator from './Navigator';

import size from "../Utils/WindowSize";

const CommitteeLayout = props => {
  return (
    <>
      <Head>
        <title>Committees - Indiana General Assembly, 2020 Session</title>
      </Head>
      <div className="container-fluid content h-100 py-3">
        <div className="row h-100">
          {/*<div className={`${size > 1000 ? "col-2": ""}`}>*/}
          <div className="col-2">
            <Navigator/>
          </div>
          {/*</div>*/}
          <div className="col-10 px-3 py-3">{props.children}</div>
        </div>
      </div>

      <style jsx>{`
        .content {
          background-color: white;
        }
        
        @media only screen and (max-width: 600) {
          
        }
      `}</style>
    </>
  );
};

export default CommitteeLayout;
