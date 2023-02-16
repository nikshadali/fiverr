import './Home.scss'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrestBy from '../../components/trestBy/TrestBy';
import CatCard from '../../components/catCard/CatCard'
import { cards, projects } from '../../data'
import Features from '../../components/featurs/Features';
import ProjectCard from '../../components/projectCard/ProjectCard';
const Home = () => {
  
  return (
    
    <div className='home'>
       <Featured/>
        <TrestBy/>
        <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
         <CatCard card={card} key={card.id}/>
            ))}
        </Slide>

        <div className="feature">
          <div className="container">
            <div className="left">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
              </div>
              <p>  Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>
              <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            </div>
            <div className="right">
            <video controls>
              <source src='https://youtu.be/KI5CnJ9u5ok' type="video/mp4"/>
              </video>
            </div>
          </div>
    </div>
    <Features/>
    <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card => (

         <ProjectCard card={card} key={card.id}/>
            ))}
        </Slide>
    </div>
  )
}

export default Home