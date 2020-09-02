import React from 'react';
import { FaShare, FaRss, FaLink, FaPrint } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import * as agriculture from '../../data/agriculture.json';
import CommitteeLayout from '../../components/Committees/CommitteeLayout';
import TabSwitcher from '../../components/Committees/TabSwitcher';
import {useRouter} from "next/router";

function CommitteePage({committeeData}) {
  const router = useRouter();
  if (router.isFallback) {
    return <CommitteeLayout>Loading...</CommitteeLayout>
  } else {
    const committeeJson = JSON.parse(committeeData);
    const {
      name: committeeName,
      chamber,
      lpid,
      meetings,
    } = committeeJson.default;
    return (
      <CommitteeLayout>
        <div className="title-bar">
          <h1>
            ({chamber.toUpperCase()[0]}) {committeeName}
          </h1>
          <div>
            <IconContext.Provider
              value={{ size: '2.25em', className: 'meeting-pills' }}
            >
              <a href="#" className="badge badge-primary">
                <FaShare />
              </a>
              <a href="#" className="badge badge-primary">
                <FaRss />
              </a>
              <a href="#" className="badge badge-primary">
                <FaLink />
              </a>
              <a href="#" className="badge badge-primary">
                <FaPrint />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <TabSwitcher committeeLpid={lpid} meetings={meetings} />
        <style jsx>{`
          h1 {
            padding-bottom: 0.5em;
          }
          .title-bar {
            display: flex;
            justify-content: space-between;
          }
          .title-bar a {
            margin-right: 1em;
            margin-top: 0.5em;
          }
        `}</style>
      </CommitteeLayout>
    );
  }
}

export async function getStaticPaths() {
  // needs to be an array with all committee lpids e.g. [{params:{id:''}}, {params:{id:''}}]
  // TODO: figure out how to get the context in here so it's not as slow (works for now)
  const paths = [];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({params}) {
  let committeeData = null;
  try {
    // TODO: Update this with actual API call
    const response = await fetch(`http://localhost:3004/committes?lpid=${params.lpid}`);
    if (response.status === 200) committeeData = await response.json();
    else committeeData = JSON.stringify(agriculture);
  } catch (Exception) {
    committeeData = JSON.stringify(agriculture);
  }
  return {
    props: {
      committeeData,
    },
  };
}

export default CommitteePage;
