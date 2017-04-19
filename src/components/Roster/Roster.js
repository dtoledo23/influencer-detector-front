import React from 'react'
import './roster.css'

const Roster = (props) => {
  return (
    <div>
	<h1>{this.props.topInfluencer}</h1>
	<h3>{this.props.name}</h3>
	<h3>{this.props.likes}</h3>
	<h3>{this.props.pageRank}</h3>
	<h3>{this.props.ranking}</h3>
	<a className="btn btn-outline btn-xl btn-block" id="statistics" >Comparison</a>
</div>
  );
};

Roster.defaultProps = {
topInfluencer: "Top Influencer",
name:"Name",
likes: "Number of Likes",
pageRank: "Page Rank",
ranking: "Ranking"
}

export default Roster