// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="items">
        <img src={teamImageUrl} alt={name} className="logo" />
        <p className="card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
