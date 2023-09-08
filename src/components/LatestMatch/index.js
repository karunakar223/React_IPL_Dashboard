// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {matchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = matchDetails

    return (
      <div className="main-container">
        <h1 className="main-heading">Latest Match</h1>
        <div className="card-con">
          <div className="con">
            <div className="competition-con">
              <p className="competing">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              className="latest-match-icon"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="innings-container">
            <div className="first-in-con">
              <p className="first-in-heading">First Innings</p>
              <p className="first-in-value">{firstInnings}</p>
            </div>
            <div className="second-innings-con">
              <p className="second-in-heading">Second Innings</p>
              <p className="second-in-value">{secondInnings}</p>
            </div>
            <div className="man-of-the-match-container">
              <p className="man-of-match-heading">Man Of The Match</p>
              <p className="man-of-match-value">{manOfTheMatch}</p>
            </div>
            <div className="umpire-container">
              <p className="umpire-heading">Umpires</p>
              <p className="umpires">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
