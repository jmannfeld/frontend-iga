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
          <div id="navigator_1" className="col-2">
            <Navigator/>
          </div>
          <div id="navigator_2">
            <Navigator/>
          </div>
          <div className="col-10 px-3 py-3">{props.children}</div>
        </div>
      </div>

      <style jsx>{`
        .content {
          background-color: white;
        }
        
        #navigator_2 {
          display: none;
        }
        
        @media screen and (max-width: 1000px) {
          #navigator_1 {
            display: none;
          }
          
          #navigator_2 {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default CommitteeLayout;
