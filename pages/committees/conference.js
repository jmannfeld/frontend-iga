import React from "react";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import {Context} from "../../components/Utils/Context";
import CommitteeList from "../../components/Committees/CommitteeList";
import CommitteeListGroup from "../../components/Committees/CommitteeListGroup";

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
      `}</style>
      </CommitteeLayout>
    );
  }
}

ConferenceCommittees.contextType = Context;

export default ConferenceCommittees;
