import React from 'react';

import * as agriculture from '../../data/agriculture.json';
import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import TabSwitcher from '../../components/Committees/TabSwitcher';

const CommitteePage = ({ committeeData }) => {
  const committeeJson = JSON.parse(committeeData);
  const { name: committeeName, chamber, lpid } = committeeJson.default;
  return (
    <CommitteeLayout>
      <h1>
        ({chamber.toUpperCase()[0]}) {committeeName}
      </h1>
      <TabSwitcher committeeLpid={lpid} />
    </CommitteeLayout>
  );
};

export async function getStaticPaths() {
  // needs to be an array with all committee lpids e.g. [{params:{id:''}}, {params:{id:''}}]
  // TODO: need to ask the middleware team to implement this API call OR figure out how to bring this in from Committee index.js
  const paths = [
    { params: { lpid: 'agriculture', name: 'Agriculture' } },
    { params: { lpid: 'agriculture_and_rural_development' } },
    { params: { lpid: '21st_century_energy_policy_development_task_force' } },
    { params: { lpid: 'conference_committee_for_sb_1' } },
    { params: { lpid: 'conference_committee_for_hb_1003' } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  // this is where we do the API call for individual committee information e.g. await(fetch(.../?params.lpid))
  const committeeData = JSON.stringify(agriculture);
  return {
    props: {
      committeeData,
    },
  };
}

export default CommitteePage;
