// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchesData: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchData = await res.json()
    const updatedData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatchDetails: {
        id: fetchData.latest_match_details.id,
        competingTeam: fetchData.latest_match_details.competing_team,
        date: fetchData.latest_match_details.date,
        firstInnings: fetchData.latest_match_details.first_innings,
        competingTeamLogo: fetchData.latest_match_details.competing_team_logo,
        manOfTheMatch: fetchData.latest_match_details.man_of_the_match,
        matchStatus: fetchData.latest_match_details.match_status,
        result: fetchData.latest_match_details.result,
        secondInnings: fetchData.latest_match_details.second_innings,
        umpires: fetchData.latest_match_details.umpires,
        venue: fetchData.latest_match_details.venue,
      },
      recentMatches: fetchData.recent_matches.map(recentMatch => ({
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
      })),
    }
    this.setState({matchesData: updatedData, isLoading: false})
  }

  getTeamMatches = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <div className="matches-container">
        <img src={teamBannerUrl} alt="team banner" className="img-url" />
        <LatestMatch matchDetails={latestMatchDetails} />
        {this.getRecentMatches()}
      </div>
    )
  }

  getRecentMatches = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData
    return (
      <ul className="ul-list">
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  getLoader = () => (
    <div className="loader-container">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? this.getLoader() : this.getTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
