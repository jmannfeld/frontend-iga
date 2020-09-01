import React from 'react';
import Link from 'next/link';

import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import CommitteeList from "../../components/Committees/CommitteeList";
import {Context} from "../../components/Utils/Context";

export default class Committees extends React.Component {
  render() {
    return (
      <CommitteeLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 text-center border-right">
              <h3 className="mb-4">Senate Standing Committees</h3>
              <Context.Consumer>
                {(context) => <CommitteeList columns={3} committees={context.state.senate_standing_committees} />}
              </Context.Consumer>
            </div>
            <div className="col-6 text-center">
              <h3 className="mb-4">House Standing Committees</h3>
              <Context.Consumer>
                {(context) => <CommitteeList columns={3} committees={context.state.house_standing_committees} />}
              </Context.Consumer>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 text-center border-right">
              <h3 className="mb-4">Interim Committes</h3>
              <Context.Consumer>
                {(context) => <CommitteeList columns={3} committees={context.state.interim_committees} />}
              </Context.Consumer>
            </div>
            <div className="col-6 text-center">
              <h3 className="mb-4">Conference Committees</h3>
              <Context.Consumer>
                {(context) => <CommitteeList columns={3} committees={context.state.conference_committees} />}
              </Context.Consumer>
            </div>
          </div>
        </div>

        <style jsx>{`
          .border-right {
            border-right: 1px solid rgba(0,0,0,.1);
          }
        `}</style>
      </CommitteeLayout>
    );
  }
}

Committees.contextType = Context;