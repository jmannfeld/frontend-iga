import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MembersTab( committeeLpid ) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [members, setMembers] = useState([]);
    const IMAGE_ENDPOINTS = "https://igalegislators.s3.us-east-2.amazonaws.com/member_images/";

    useEffect(() => {
        const host = "https://iaj822wghd.execute-api.us-east-1.amazonaws.com/test/getMembers?cmte_lpid=";
        // const response = fetch(`http://localhost:3004/committees/${params.year}`);
        const response = fetch(host + committeeLpid.committeeLpid);
        response.then(response => response.json()).then(data => {
            setMembers(data);
            setIsLoaded(true);
        }).catch(error => {
            setError(error);
            setIsLoaded(true);
        });
    }, []);


    if (error) {
    return <div>Error: {error.message}</div>;
  }
    if (!isLoaded) {
    return <div>Loading...</div>;
  }

    return (
        <>
        <div className="row">



        {members["type_chair"] &&
          members["type_chair"].map(
            ({
              holderid,
              position_title,
              full_name,
            }) => (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" style={{height: '350px'}} src={IMAGE_ENDPOINTS + holderid + ".jpg"}/>
                    <Card.Body>
                        <Card.Title>{full_name}</Card.Title>
                        <Card.Text>
                            {position_title}
                        </Card.Text>
                        <a href={"https://iga.in.gov/legislative/2020/legislators/" + holderid + "/"}>
                            <Button variant="primary">
                                Member Page
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

            )
          )
        }
        { members["type_rm"] &&
          members["type_rm"].map(
            ({
              holderid,
              position_title,
              full_name,
            }) => (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" style={{height: '350px'}} src={IMAGE_ENDPOINTS + holderid + ".jpg"}/>
                    <Card.Body>
                        <Card.Title>{full_name}</Card.Title>
                        <Card.Text>
                            {position_title}
                        </Card.Text>
                        <a href={"https://iga.in.gov/legislative/2020/legislators/" + holderid + "/"}>
                            <Button variant="primary">
                                Member Page
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

            )
          )
          }
            { members["type_majority_normalmember"] &&
                members["type_majority_normalmember"].map(
                ({
                  holderid,
                  position_title,
                  full_name,
                }) => (
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" style={{height: '350px'}} src={IMAGE_ENDPOINTS + holderid + ".jpg"}/>
                        <Card.Body>
                            <Card.Title>{full_name}</Card.Title>
                            <Card.Text>
                                {position_title}
                            </Card.Text>
                            <a href={"https://iga.in.gov/legislative/2020/legislators/" + holderid + "/"}>
                                <Button variant="primary">
                                    Member Page
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>

                )
              )
            }

                    { members["type_rmm"] &&
          members["type_rmm"].map(
            ({
              holderid,
              position_title,
              full_name,
            }) => (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" style={{height: '350px'}} src={IMAGE_ENDPOINTS + holderid + ".jpg"}/>
                    <Card.Body>
                        <Card.Title>{full_name}</Card.Title>
                        <Card.Text>
                            {position_title}
                        </Card.Text>
                        <a href={"https://iga.in.gov/legislative/2020/legislators/" + holderid + "/"}>
                            <Button variant="primary">
                                Member Page
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

            )
          )
          }

                  { members["type_minority_normalmember"] &&
          members["type_minority_normalmember"].map(
            ({
              holderid,
              position_title,
              full_name,
            }) => (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" style={{height: '350px'}} src={IMAGE_ENDPOINTS + holderid + ".jpg"}/>
                    <Card.Body>
                        <Card.Title>{full_name}</Card.Title>
                        <Card.Text>
                            {position_title}
                        </Card.Text>
                        <a href={"https://iga.in.gov/legislative/2020/legislators/" + holderid + "/"}>
                            <Button variant="primary">
                                Member Page
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

            )
          )
          }
          </div>

            <style jsx>{`
          .content {
            background-color: white;
            border: 2px solid red;
          }
          .flex-container {
            display: flex;
          }
        `}</style>
        </>
    )
};

export default MembersTab;
