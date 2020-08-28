import React from "react";

import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import * as committees from "../../data/committees.json";

const Committees = ({committees}) => (
  <CommitteeLayout>
    <h1>Committees Homepage Index (List view)</h1>
    { committees }
  </CommitteeLayout>
);

// use this function if committees don't change (pre-rendering only during build time)
export async function getStaticProps() {
  const response = JSON.stringify(committees); // this is where we would have the API call
  return {
    props: {
      committees: response
    }
  }
}

// use this function if committees sometimes change (pre-rendering for every user request,
// slower but more up-to-date)
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default Committees;