import React from "react";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import {Context} from "../../components/Utils/Context";
import CommitteeListGroup from "../../components/Committees/CommitteeListGroup";
import Link from "next/link";

class ConferenceCommittees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("conference");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Conference Committees</h3>
              <div className="committee-grid-btn mr-4">
                <Link href="/committees/grid"><a className="btn btn-primary">Conference Committee Grid</a></Link>
              </div>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="Senate" committees={context.state.conference_committees.filter(committee => committee.chamber === "senate")} />
                )}
              </Context.Consumer>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="House" committees={context.state.conference_committees.filter(committee => committee.chamber === "house")} />
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

ConferenceCommittees.contextType = Context;

export default ConferenceCommittees;
