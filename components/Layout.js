import Head from 'next/head';
import Header from "./Header";
import React from "react";

const Layout = (props) => (
  <div className="layout h-100">
    <Head>
      <title>Indiana General Assembly, 2020 Session</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"/>
    </Head>

    <div className="layout-border mx-5 h-100 d-flex flex-column justify-content-start align-items-stretch">
      <Header/>
      {props.children}
    </div>

    <style jsx>{`
      .layout {
        background-color: rgb(5, 24, 54);
      }
      .layout-border {
        border-right: 5px solid #ffd54a;
        border-left: 5px solid #ffd54a;
      }
     `}</style>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossOrigin="anonymous"/>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
            crossOrigin="anonymous"/>
  </div>


);

export default Layout;