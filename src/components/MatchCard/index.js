// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="team">{competingTeam}</p>
        <p className="match-result">{result}</p>
        <p className={matchStatus}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
