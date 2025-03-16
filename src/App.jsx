import './App.css'

function App() {

  return (
    <>
      <header id='#header'>
        <img className='logo' src="./public/Logo.svg" alt="Logo" />
          <nav>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Community</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <button className='register'>Register Now </button>
          </nav>
      </header>

      <div className="box">
        <div className="left">
            <p className='title'>Lessons and insights <span>from 8 years</span></p>
            <p className="text">Where to grow your business as a photographer: site or social media?</p>
            <button className='register'>Register Now </button>
        </div>

        <div className="right">
          <img className='right' src="./public/Illustration.svg" alt="rasm" />
        </div>

      </div>

      <main>
        <div className="iconlar">
          <h1>Our Clients</h1>
          <p>We have been working with some Fortune 500+ clients</p>
          <img className='clients' src="./public/clients.svg" alt="icon" />
        </div>
        <div className="h2"><h2>Manage your entire community in a single system</h2></div>
        <div className="company">
          
          <div className="card">
            <img className='icon' src="./public/icon.svg" alt="" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <img className='icon' src="./public/icon@2x.svg" alt="" />
            <h1>National Associations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <img className='icon' src="./public/icon (1).svg" alt="" />
            <h1>Clubs And Groups</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>

      </main>

      <footer>
        <div className="left2">
          <img className='rafiki' src="./public/rafiki.svg" alt="" />
        </div>

        <div className="right2">
          <h3>The unseen of spending three years at Pixelgrade</h3>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <a href="header"><button className='register' >Learn More</button></a>
        </div>
      </footer>
    </>
  )
}

export default App
