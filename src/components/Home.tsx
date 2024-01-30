import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
  <h1>Marcel George Ionite</h1>
  <img src="../../public/images/profile-picture.jpeg" alt="Marcel George Ionite's headshot" className="profile-image"/>
  <p>I am a web developer with a passion for creating intuitive and dynamic user experiences...</p>
  
  <section id="about">
  <h2>About Me</h2>
  <p>
    Hello! I'm Marcel, a dedicated and detail-oriented web developer with a solid foundation in front-end technologies and a growing expertise in back-end systems. My journey into web development started with a fascination for how user-friendly interfaces are built and a desire to understand the underlying mechanics of web applications.
  </p>
  <p>
    With a background in computer science and a constant eye on the latest industry trends, I specialize in creating responsive, accessible websites and applications that prioritize user experience. I believe that a great website isn't just about the code that powers it, but also about the story it tells and the ease with which users can navigate it.
  </p>
  <p>
    When I'm not coding, you'll find me exploring the latest in web design, contributing to open-source projects, or unwinding with a good book on software development philosophies. I'm always keen to collaborate on projects that challenge me to deliver my best work and push the boundaries of what I know.
  </p>
  <p>
    Whether you're a small business owner looking to carve out your digital presence or a tech company seeking to innovate, I'm here to help turn your ideas into reality. Let's create something amazing together.
  </p>
</section>


  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Html</li>
      <li>CSS</li>
    </ul>
  </section>

  <section id="portfolio">
  <h2>Portfolio</h2>
  <div className="portfolio-grid">
    <div className="portfolio-item">
      <img src="../../public/images/passwordGenerator.png" alt="Project 1 screenshot" className="portfolio-image"/>
      <div className="portfolio-item-content">
        <h3>Password generator</h3>
        <p>This project is a password generator application that allows users to customize the password based on specific criteria, such as length and character types. The generated password is displayed on the page or in an alert.</p>
        <a href="https://georgeionite.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">View Live</a> | 
        <a href="https://github.com/georgeionite/Password-Generator" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="../../public/images/work-day-scheduler.png" alt="Project 2 screenshot" className="portfolio-image"/>
      <div className="portfolio-item-content">
        <h3>Work Day Scheduler</h3>
        <p>Work Day Scheduler is a simple, intuitive web application designed to help users manage their workday schedule. It features a user-friendly interface where users can enter and save events for each hour of the business day. The application color-codes time blocks based on the current time, helping users easily distinguish between past, present, and future tasks.</p>
        <a href="https://georgeionite.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">View Live</a> | 
        <a href="https://github.com/georgeionite/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="../../public/images/weather-Forecast.png" alt="Project 3 screenshot" className="portfolio-image"/>
      <div className="portfolio-item-content">
        <h3>Weather Dashboard</h3>
        <p>The Weather Dashboard is a web application that provides travelers with real-time weather outlooks for multiple cities. By entering a city into the search field, users can plan their trips according to current and future weather conditions. The application features a clean, user-friendly interface that displays weather conditions, including temperature, humidity, and wind speed, as well as a 5-day forecast.</p>
        <a href="https://georgeionite.github.io/Weather-Forecast/" target="_blank" rel="noopener noreferrer">View Live</a> | 
        <a href="https://github.com/georgeionite/Weather-Forecast" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="../../public/images/Readme-generator.png" alt="Project 4 screenshot" className="portfolio-image"/>
      <div className="portfolio-item-content">
        <h3>Readme Generator</h3>
        <p>This project is a README-Generator built in Node.js. It leverages user input to create customized Markdown files, making it ideal for generating project documentation or simple websites.</p>
        <a href="https://github.com/georgeionite/README-Generator-" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
    <div className="portfolio-item">
      <img src="../../public/images/ProfileGenerator.png" alt="Project 5 screenshot" className="portfolio-image"/>
      <div className="portfolio-item-content">
        <h3>Profile Generator</h3>
        <p>The Profile Generator is a command-line application that allows users to generate a webpage displaying information about members of a software engineering team. The application collects information about team members, including managers, engineers, and interns, and generates an HTML webpage with their details.</p>| 
        <a href="https://github.com/georgeionite/Profile-Generator-" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
    
    <div className="portfolio-item">
      <img src="../../public/images/nutriScript1.png" alt="Project 6 screenshot" className="portfolio-image"/>
      <img src="../../public/images/nutriScript2.png" alt="Project 6 screenshot" className="portfolio-image"/>
      <div className="portfolio-item-content">
        <h3>nutriScript</h3>
        <p>The objective of this project is to create a recipe and nutrition application.</p>
        <a href="https://noah-sheldon.github.io/nutriScript/" target="_blank" rel="noopener noreferrer">View Live</a> | 
        <a href="https://github.com/noah-sheldon/nutriScript" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>

  </div>
</section>


  <section id="contact">
  <h2>Contact Me</h2>
  <form className="contact-form">
    <label htmlFor="name">Name: </label>
    <input type="text" id="name" name="name" placeholder="Your name..." required />

    <label htmlFor="email">Email: </label>
    <input type="email" id="email" name="email" placeholder="Your email..." required />

    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" placeholder="Your message..." required></textarea>

    <button type="submit">Send Message</button>
  </form>
</section>


<footer className="site-footer">
  <div className="footer-content">
    <p>Connect with me on:</p>
    <ul className="footer-social-links">
      <li><a href="https://github.com/georgeionite" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="www.linkedin.com/in/marcel-george-ionite-02231426b" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    </ul>
    {/* <p>&copy; {new Date().getFullYear()} Marcel George Ionite. All rights reserved.</p> */}
  </div>
</footer>

</div>

  );
}

export default Home;
