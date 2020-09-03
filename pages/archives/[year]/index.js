import React from 'react';
import {useRouter} from "next/router";
import Link from "../../../components/Committees/CommitteeList";
import CommitteeLayout from "../../../components/Committees/CommitteeLayout";
import CommitteeList from "../../../components/Committees/CommitteeList";
import {Context} from "../../../components/Utils/Context";
import CommitteeListGroup from "../../committees";

function CommitteeArchivePage(props) {
  const router = useRouter();
  if (router.isFallback) {
      return <div> "Loading..." </div>
  } else {
    return (
    <CommitteeLayout>
    <div className="container-fluid">
        <h4 className="col-12 text-center my-2">Standing Committees</h4>
        <div className="col-6 mt-3">

              <div className="row list m-2 d-flex align-content-start">
              <h4 className="col-12 text-center my-2">Senate</h4>

                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.senate_standing_committees.slice(0, Math.ceil(props.senate_standing_committees.length / 2))}/>
                </div>
                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.senate_standing_committees.slice(Math.ceil(props.senate_standing_committees.length / 2))}/>
                </div>


               </div>

              <div className="row list m-2 d-flex align-content-start">
              <h4 className="col-12 text-center my-2">House</h4>

                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.house_standing_committees.slice(0, Math.ceil(props.house_standing_committees.length / 2))}/>
                </div>
                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.house_standing_committees.slice(Math.ceil(props.house_standing_committees.length / 2))}/>
                </div>


               </div>

        </div>

        <h4 className="col-12 text-center my-2">Conference Committees</h4>
        <div className="col-6 mt-3">

              <div className="row list m-2 d-flex align-content-start">
              <h4 className="col-12 text-center my-2">Senate</h4>

                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.conference_committees.filter(committee => committee.chamber === "senate").slice(0, Math.ceil(props.conference_committees.filter(committee => committee.chamber === "senate").length / 2))}/>
                </div>
                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.conference_committees.filter(committee => committee.chamber === "senate").slice(Math.ceil(props.conference_committees.filter(committee => committee.chamber === "senate").length / 2))}/>
                </div>


               </div>

              <div className="row list m-2 d-flex align-content-start">
              <h4 className="col-12 text-center my-2">House</h4>

                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.conference_committees.filter(committee => committee.chamber === "house").slice(0, Math.ceil(props.conference_committees.filter(committee => committee.chamber === "house").length / 2))}/>
                </div>
                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.conference_committees.filter(committee => committee.chamber === "house").slice(Math.ceil(props.conference_committees.filter(committee => committee.chamber === "house").length / 2))}/>
                </div>


               </div>

        </div>


        <h4 className="col-12 text-center my-2">Interim Committees</h4>
        <div className="col-12 mt-3">

              <div className="row list m-2 d-flex align-content-start">

                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.interim_legislative_committees.slice(0, Math.ceil(props.interim_legislative_committees.length / 2))}/>
                </div>
                <div className="col-12 mt-3">
                  <CommitteeList
                    committees={props.interim_legislative_committees.slice(Math.ceil(props.interim_legislative_committees.length / 2))}/>
                </div>


               </div>

        </div>

              <h4 className="col-12 text-center my-2">Interim Committees</h4>
        <div className="row list m-2 d-flex align-content-start">
              <div className="col-12 mt-3">

              <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.interim_other_committees.slice(0, Math.ceil(props.interim_other_committees.length / 2))}/>
                </div>
                <div className="col-6 mt-3">
                  <CommitteeList
                    committees={props.interim_other_committees.slice(Math.ceil(props.interim_other_committees.length / 2))}/>
                </div>
              </div>
        </div>

        </div>
        <style jsx>{`
          .list {
            background-color: #c9cad8;
          }

          .list-group-item-action {
            border: none;
            background-color: inherit;
            border-radius: 0;
            border-radius: 0;
          }

          .list-group-item-action:hover {
            background-color: white;
          }
        `}</style>
    </CommitteeLayout>
        );
      }
}

export async function getStaticPaths() {
  let paths = [
          "/archives/2019", "/archives/2018"
      ];
  return {
    paths,
    fallback: true,
  };

}

export async function getStaticProps({params}) {
    // TODO: change this api url
    const response = fetch(`http://localhost:3004/committees/${params.year}`);
    return response.then(response => response.json()).then(data => {
        return {
                props: {
                    senate_standing_committees: data.filter(
                        committee => committee.type === "standing" && committee.chamber === "senate"),
                    house_standing_committees: data.filter(
                        committee => committee.type === "standing" && committee.chamber === "house"),
                    interim_legislative_committees: data.filter(committee => committee.type === "interim" && committee.non_lsa_staffed === false),
                    interim_other_committees: data.filter(committee => committee.type === "interim" && committee.non_lsa_staffed === true),
                    conference_committees: data.filter(committee => committee.type === "conference")
                }
            };

    }).catch(e => {
        console.log(e);
    });
}



export default CommitteeArchivePage;
