// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const res = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await res.json()

    const formattedData = teamsData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({iplTeamsList: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getList = () => {
    const {iplTeamsList} = this.state
    return (
      <ul className="ul-list">
        {iplTeamsList.map(eachOne => (
          <TeamCard key={eachOne.id} teamDetails={eachOne} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="header-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.getList()}
      </div>
    )
  }
}

export default Home
