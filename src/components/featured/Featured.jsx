import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> service for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src='./img/search.png' alt=''/>
                        <input type="text" placeholder='Try "build mobile App"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Log Design</button>
                    <button>AI Service</button>
                  
                </div>
            </div>
            <div className="right">
                <img src='./img/man.png' alt='img'/>
            </div>
        </div>

    </div>
  )
}

export default Featured