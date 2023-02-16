import { Link } from 'react-router-dom'
import './ProjectCard.scss'

const ProjectCard = ({card}) => {
  return (
    <Link to='/' className='link'>
    <div className='projectCard'>
        <img src={card.img} alt=''/>
        <div className="info">
            <img src={card.pp} alt=''/>
        <div className="text">
            <h2>{card.cat}</h2>
            <sapn>{card.username}</sapn>
        </div>
        </div>

    </div>
    </Link>
  )
}

export default ProjectCard