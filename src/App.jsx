import React from 'react';
import "./App.css";
import "./App.js"


function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
      
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <nav className="navbar">
          <a href="#" className="nav">Home</a>
          <a href="#" className="nav">About</a>
          <a href="#" className="nav">Service</a>
          <a href="#" className="nav">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <section className="content">
        <div className="row">
          <div className="Login">
            <h1>Login</h1>
          </div>

          {/* Login Form */}
          <form className="form">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your Email" />
            <input type="password" placeholder="Enter your password" />
            <input type="text" placeholder="Pet Type" />
            <input type="text" placeholder="Pet Breed" />
            <a href="submit.html">
            <button type="submit" className="submit" >Submit</button>
            </a>
            
          </form>
        </div>
        
      </section>
      
      <section className="Basis">
      <h1>Basic Pet Care Guidelines</h1>

      <div className='Basis_contents'>
        
        <ul>
          <li>
            <div className="h2p">
            <h2>Proper Nutrition</h2>
            <p>
              Provide your pet with a balanced diet suitable for their species, age, and health condition. Consult your veterinarian for specific dietary recommendations.
            </p></div>
            <img src="src/nirti.jpeg" alt="" className="health" />
          </li>
          
          <li>
            <div className="h2p">
            <h2>Fresh Water</h2>
            <p>
              Always have fresh, clean water available for your pet. Change the water daily to prevent contamination.
            </p>
            </div>
            
            <img src="src/water.jpeg " alt="" className="health" />
          </li>
          <li>
            <div className="h2p">
            <h2>Grooming</h2>
            <p>
              Regular grooming is essential. Brush your pet's coat, trim nails (if applicable), and clean ears and eyes as needed.
            </p>
            </div>
            
            <img src="src/grom.jpeg" alt="" className="health" />
          </li>
          <li>
            <div className="h2p">
            <h2>Veterinary Care</h2>
            <p>
              Schedule regular check-ups with a veterinarian. Keep vaccinations up to date and address any health concerns promptly.
            </p>
            </div>
            
            <img src="src/health care.jpg" alt="" className="health" />
          </li>
          <li>
            <div className="h2p">
            <h2>Hygiene and Cleanliness</h2>
            <p>
              Keep your pet's living area clean and comfortable. Wash bedding regularly and clean litter boxes or cages routinely.
            </p>
            </div>
            
            <img src="src/hygiene.jpeg" alt="" className="health" />
          </li>
          <li>
            <div className="h2p">
            <h2>Love and Attention</h2>
            <p>
              Provide your pet with affection and attention. Pets thrive on companionship and positive interaction.
            </p>
            </div>

            <img src="src/love.jpeg" alt="" className="health" />
          </li>
        </ul>
      </div>
    </section>


      {/* Footer */}
      <footer>
        <div className="row1">
          {/* Footer Columns */}
          <div className="col0">
            <h3>CONTENT</h3>
            <p>Calendar of festivities</p>
            <p>New assets</p>
            <p>The most popular content</p>
          </div>
          <div className="col1">
            <h3>INFORMATION</h3>
            <p>Pricing</p>
            <p>About us</p>
          </div>
          <div className="col2">
            <h3>LEGAL</h3>
            <p>Terms of use</p>
            <p>License agreement</p>
            <p>Privacy policy</p>
          </div>
          <div className="col3">
            <h3>SUPPORT</h3>
            <p>FAQ</p>
            <p>Search guide</p>
            <p>Contact</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;
