import React from "react";

const Search = () => (
  <div className="search py-2 d-flex flex-column">
    <ul className="nav nav-tabs nav-fill" id="searchTab" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#search">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#code">Code</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#bills">Bills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#legislators">Legislators</a>
      </li>
    </ul>

    <div className="tab-content flex-grow-1 d-flex flex-column">
      <div className="tab-pane active flex-grow-1" id="search" role="tabpanel">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12 d-flex flex-column justify-content-center">
              <p className="my-0 font-small">Search the current session:</p>
            </div>
            <div className="col-12 d-flex flex-column justify-content-center">
              <div className="input-group input-group-sm">
                <input type="text" className="form-control btn-outline-secondary" placeholder="Search the current session" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                      <path fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex flex-column justify-content-center">
              <a className="font-small">Advanced Search</a>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade in" id="code" role="tabpanel">
        Code
      </div>
      <div className="tab-pane fade in" id="bills" role="tabpanel">
        Bills
      </div>
      <div className="tab-pane fade in" id="legislators" role="tabpanel">
        Legislators
      </div>
    </div>

    <style jsx>{`
      .search {
        height: 150px;
      }
    
      .nav-tabs {
        border: none;
        margin-bottom: -1px;
      }
    
      .nav-link.active, .nav-link:hover {
        background-color: rgb(203, 206, 214);
        border: none;
        color: rgb(5, 24, 54);
      }
    
      .tab-content {
        background-color: rgb(203, 206, 214);
        border: none;
        border-bottom-right-radius: .25rem;
        border-bottom-left-radius: .25rem;
      }
      
      .font-small {
        font-size: 80%;
      }
      
      a, .bi-search, btn-outline-secondary {
        color: rgb(5, 24, 54);
      }
      
      .btn-outline-secondary:hover, .btn-outline-secondary:not(:disabled):not(.disabled):active {
        background-color: white;
        color: #6c757d;
      }
    `}</style>
  </div>
);

export default Search;