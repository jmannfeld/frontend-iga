import React from "react";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import {Context} from "../../components/Utils/Context";
import CommitteeList from "../../components/Committees/CommitteeList";

class StandingCommittees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("standing");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 border-right">
              <Context.Consumer>
                {(context) => (<CommitteeList centered="true"
                                              title="Senate Standing Committees"
                                              committees={context.state.senate_standing_committees}/>)}
              </Context.Consumer>
            </div>
            <div className="col-6">
              <Context.Consumer>
                {(context) => (<CommitteeList centered="true"
                                              title="House Standing Committees"
                                              committees={context.state.house_standing_committees}/>)}
              </Context.Consumer>
            </div>
          </div>
        </div>
      </CommitteeLayout>
    );
  }
}

StandingCommittees.contextType = Context;

export default StandingCommittees;
