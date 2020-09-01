import React from "react";

import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import {Context} from "../../components/Utils/Context";
import CommitteeList from "../../components/Committees/CommitteeList";

class InterimCommittees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("interim");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Context.Consumer>
                {(context) => (<CommitteeList centered="false"
                                              title="Interim Committees"
                                              committees={context.state.interim_legislative_committees}/>)}
              </Context.Consumer>
            </div>
          </div>
        </div>
      </CommitteeLayout>
    );
  }
}

InterimCommittees.contextType = Context;

export default InterimCommittees;
