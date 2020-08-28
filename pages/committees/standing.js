import React from "react";
import Link from "next/link";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import * as standing_committees from "../../data/standing_committees.json";

const StandingCommittees = ({committees}) => (
  <CommitteeLayout>
    <h1>Committees Homepage Index (List view)</h1>
    <ul>
      {committees.committees.map(({ lpid, name, chamber, type }) => (
        <li key={lpid}>
          <Link href="/committees/[lpid]" as={`/committees/${lpid}`}><a>{lpid}</a></Link>
          <br />
          {name}
          <br />
          {chamber}
          <br />
          {type}
        </li>
      ))}
    </ul>
  </CommitteeLayout>
);

export async function getServerSideProps() {
  const response = JSON.parse(JSON.stringify(standing_committees)); // this is where we would have the API call, e.g. await fetch(...)
  return {
    props: {
      committees: response.default
    }
  }
}

export default StandingCommittees;
