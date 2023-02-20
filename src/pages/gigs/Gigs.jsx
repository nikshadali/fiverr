import './Gigs.scss'
import { useState } from 'react';
import {gigs} from '../../data'
import GigCard from '../../components/gigCard/GigCard';
const Gigs = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcurmbs'>Liverr > Graphics & Design ></span>
        <h1>AI Artists</h1>
        <p> Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder='min' />
            <input type="number" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBY'>Sort By</span>
            <span className='sortType'>Best Selling</span>
            <img src="/img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && <div className="rightMenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>}
          </div>
        </div>
        <div className="card">

        { gigs.map((item) => (
          
          <GigCard item={item} key={item.key} />
          ))}
          </div>
      </div>
    
    </div>
  )
}

export default Gigs