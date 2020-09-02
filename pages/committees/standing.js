import React from "react";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import {Context} from "../../components/Utils/Context";
import CommitteeList from "../../components/Committees/CommitteeList";
import CommitteeListGroup from "../../components/Committees/CommitteeListGroup";

class StandingCommittees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("standing");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Standing Committees</h3>
            </div>
            <Context.Consumer>
              {(context) => {
                let filter = context.state.committee_filter;
                if (filter === "") {
                  return (
                    <>
                      <div className="col-6 d-flex">
                        <CommitteeListGroup title="Senate" committees={context.state.senate_standing_committees} />
                      </div>
                      <div className="col-6 d-flex">
                        <CommitteeListGroup title="House" committees={context.state.house_standing_committees} />
                      </div>
                    </>
                  );
                } else {
                  return (
                    <div className="col-12">
                      <CommitteeListGroup title={filter}
                                          committees={filter === "House" ? context.state.house_standing_committees : context.state.senate_standing_committees} />
                    </div>
                  )
                }
              }}
            </Context.Consumer>
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

StandingCommittees.contextType = Context;

export default StandingCommittees;
