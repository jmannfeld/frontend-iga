import React from "react";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import {Context} from "../../components/Utils/Context";
import CommitteeList from "../../components/Committees/CommitteeList";

class ConferenceCommittees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("conference");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Context.Consumer>
                {(context) => (<CommitteeList centered="false"
                                              title="Conference Committees"
                                              committees={context.state.conference_committees}/>)}
              </Context.Consumer>
            </div>
          </div>
        </div>
      </CommitteeLayout>
    );
  }
}

ConferenceCommittees.contextType = Context;

export default ConferenceCommittees;
