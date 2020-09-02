import React from "react";

import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import {Context} from "../../components/Utils/Context";
import CommitteeList from "../../components/Committees/CommitteeList";
import CommitteeListGroup from "../../components/Committees/CommitteeListGroup";

class InterimCommittees extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("interim");
  }

  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Interim Committees</h3>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="Legislative Interim Study Committees" committees={context.state.interim_legislative_committees} />
                )}
              </Context.Consumer>
            </div>
            <div className="col-6 d-flex">
              <Context.Consumer>
                {(context) => (
                  <CommitteeListGroup title="Other Committees with Legislative Appointments" committees={context.state.interim_other_committees} />
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

InterimCommittees.contextType = Context;

export default InterimCommittees;
