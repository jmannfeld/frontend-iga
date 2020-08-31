import React from 'react';
import Link from 'next/link';

import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import * as committeesList from '../../data/committees.json';
import CommitteeList from "../../components/Committees/CommitteeList";

const Committees = ({senate_standing_committees,
                    house_standing_committees,
                    interim_committees,
                    conference_committees}) => (
  <CommitteeLayout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 text-center border-right">
          <h3 className="mb-4">Senate Standing Committees</h3>
          <CommitteeList columns={3} committees={senate_standing_committees} />
        </div>
        <div className="col-6 text-center">
          <h3 className="mb-4">House Standing Committees</h3>
          <CommitteeList columns={3} committees={house_standing_committees} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 text-center border-right">
          <h3 className="mb-4">Interim Committes</h3>
          <CommitteeList columns={3} committees={interim_committees} />
        </div>
        <div className="col-6 text-center">
          <h3 className="mb-4">Conference Committees</h3>
          <CommitteeList columns={3} committees={conference_committees} />
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

export async function getServerSideProps() {
  const response = JSON.parse(JSON.stringify(committeesList)); // this is where we would have the API call, e.g. await fetch(...)
  return {
    props: {
      senate_standing_committees: response.default.committees.filter(
        committee => committee.type === "standing" && committee.chamber === "senate"
      ),
      house_standing_committees: response.default.committees.filter(
        committee => committee.type === "standing" && committee.chamber === "house"
      ),
      interim_committees: response.default.committees.filter(committee => committee.type === "interim"),
      conference_committees: response.default.committees.filter(committee => committee.type === "conference")
    }
  }
}

export default Committees;
