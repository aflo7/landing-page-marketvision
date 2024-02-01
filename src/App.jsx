import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaAngleDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <nav className="desktop-nav">
        <div className="home-button">Home</div>
        <div>
          About Us <FaAngleDown />
        </div>
        <div>
          Who We Serve <FaAngleDown />
        </div>
        <div>
          Knowledge Center <FaAngleDown />
        </div>
        <div>
          News <FaAngleDown />
        </div>
        <div>
          People <FaAngleDown />
        </div>
        <div>
          Blog <FaAngleDown />
        </div>
        <div>
          Connect <FaAngleDown />
        </div>
      </nav>
      <nav className="mobile-nav">
        <RxHamburgerMenu size="2rem" color="white" />
      </nav>

      <main>
        <div>
          <h1>
            MarketVision <span className="research-span">Research</span>
          </h1>
          <h2>Mock page made by Andres Flores</h2>
        </div>
      </main>
      <div className="overview-wrapper">
        <div className="overview-wrapper-inner">
          <h3>Overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
            beatae sequi eum expedita reprehenderit minima officiis tempora
            numquam animi harum hic quaerat voluptatem maiores eos autem
            corrupti aspernatur veritatis, labore placeat? Ea, fuga dolorem.
            Accusamus odit unde nam qui!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            hic repellat molestias sed ex, deleniti eveniet illum quaerat, error
            sunt vel culpa, beatae recusandae neque quas incidunt quis sint
            animi odio consequatur consequuntur. Quidem illum ipsam, eligendi
            quas corrupti sunt.
          </p>
          <div className="overview-bottom-wrapper">
            <div style={{ flex: '1' }}>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '4rem' }}>170</p>
                <p className="team-members-text">Team Members</p>
              </div>
              <div
                style={{
                  border: '3px solid orange',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px'
                }}
              >
                <FaSearch fontSize="2rem" />
                Expertise
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '4rem' }}>39</p>
                <p className="years-in-business-text">Years In Business</p>
              </div>
              <div
                style={{
                  border: '3px solid orange',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px'
                }}
              >
                <FaSearch fontSize="2rem" />
                Uniquely MarketVision
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
