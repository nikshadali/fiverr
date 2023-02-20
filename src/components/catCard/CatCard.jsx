import './CatCard.scss'
import { Link } from 'react-router-dom'
const CatCard = ({card}) => {
  
  return (
    <Link to='/gigs/125'>
    <div className='catcard'>
       <img src={card.img} alt='card'/>
        <span className='desc' key={card.id}>{card.desc}</span>
        <span className='title'>{card.title}</span>
    </div>
    </Link>

  )
}

export default CatCard