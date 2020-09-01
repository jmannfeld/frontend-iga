import React from "react";
import CommitteeLayout from "../../components/Committees/CommitteeLayout";
import {Context} from "../../components/Utils/Context";

class Grid extends React.Component {
  componentDidMount() {
    this.context.setCommitteeActive("grid")
  }

  render() {
    return (
      <CommitteeLayout>
        <h1>Conference Committee Grid</h1>
      </CommitteeLayout>
    );
  }
}

Grid.contextType = Context;

export default Grid;