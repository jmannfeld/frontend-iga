import React from "react";
import Link from "next/link";

import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import {Context} from "../../components/Utils/Context";
import CommitteeListGroup from "../../components/Committees/CommitteeListGroup";
import size from "../../components/Utils/WindowSize";

class Committees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Standing Committees</h3>
              <div className="committee-grid-btn mr-4">
                <Link href="/committees/grid"><a className="btn btn-primary">Conference Committee Grid</a></Link>
              </div>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="Senate" committees={context.state.senate_standing_committees} width={size.width} />
                )}
              </Context.Consumer>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="House" committees={context.state.house_standing_committees} width={size.width} />
                )}
              </Context.Consumer>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h3 className="text-center">Conference Committees</h3>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="Senate" committees={context.state.conference_committees.filter(committee => committee.chamber === "senate")} width={size.width}/>
                )}
              </Context.Consumer>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="House" committees={context.state.conference_committees.filter(committee => committee.chamber === "house")} width={size.width}/>
                )}
              </Context.Consumer>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h3 className="text-center">Interim Committees</h3>
            </div>
            <div className="col-12">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="" committees={context.state.interim_legislative_committees} width={size.width}/>
                )}
              </Context.Consumer>
            </div>
          </div>
        </div>

        <style jsx>{`
          .list {
            background-color: #c9cad8;
          }
          
          .committee-grid-btn {
            position: absolute;
            top: 0;
            right: 0;
          }
        `}</style>
      </CommitteeLayout>
    );
  }
}

Committees.contextType = Context;

  // render() {
  //   return (
  //     <CommitteeLayout>
  //       <div className="container-fluid">
  //         <div className="row">
  //           <div className="col-6 text-center border-right">
  //             <h3 className="mb-4">Senate Standing Committees</h3>
  //             <Context.Consumer>
  //               {(context) => <CommitteeList columns={3} committees={context.state.senate_standing_committees} />}
  //             </Context.Consumer>
  //           </div>
  //           <div className="col-6 text-center">
  //             <h3 className="mb-4">House Standing Committees</h3>
  //             <Context.Consumer>
  //               {(context) => <CommitteeList columns={3} committees={context.state.house_standing_committees} />}
  //             </Context.Consumer>
  //           </div>
  //         </div>
  //         <hr />
  //         <div className="row">
  //           <div className="col-6 text-center border-right">
  //             <h3 className="mb-4">Interim Committes</h3>
  //             <Context.Consumer>
  //               {(context) => <CommitteeList columns={3} committees={context.state.interim_committees} />}
  //             </Context.Consumer>
  //           </div>
  //           <div className="col-6 text-center">
  //             <h3 className="mb-4">Conference Committees</h3>
  //             <Context.Consumer>
  //               {(context) => <CommitteeList columns={3} committees={context.state.conference_committees} />}
  //             </Context.Consumer>
  //           </div>
  //         </div>
  //       </div>
  //
  //       <style jsx>{`
  //         .border-right {
  //           border-right: 1px solid rgba(0,0,0,.1);
  //         }
  //       `}</style>
  //     </CommitteeLayout>
  //   );
  // }

export default Committees;
