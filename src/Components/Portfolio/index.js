import React from 'react';
import ScrollReveal from 'scrollreveal';
import './index.css';

class Portfolio extends React.Component {
    componentDidMount() {
        this.showMenu('nav-toggle', 'nav-menu');
        this.removeMenuMobile();
        this.scrollSectionsActiveLink();
        this.scrollRevealAnimation();
        this.setMode('light-mode');
    }

    showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    };

    removeMenuMobile = () => {
        const navLinks = document.querySelectorAll('.nav__link');
        const linkAction = () => {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show');
        };
        navLinks.forEach(navLink => navLink.addEventListener('click', linkAction));
    };

    scrollSectionsActiveLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollActive = () => {
            const scrollY = window.pageYOffset;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active');
                } else {
                    document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active');
                }
            });
        };
        window.addEventListener('scroll', scrollActive);
    };

    scrollRevealAnimation = () => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
        });

        sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
        sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
        sr.reveal('.home__social-icon', { interval: 200 });
        sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
    };

    setMode = () => {
        document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const currentMode = localStorage.getItem('mode');
            if (currentMode) {
                body.classList.add(currentMode);
            } else {
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                body.classList.add(prefersDarkMode ? 'dark-mode' : 'light-mode');
                localStorage.setItem('mode', prefersDarkMode ? 'dark-mode' : 'light-mode');
            }
        });
    };

    toggleMode = () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('mode', currentMode);
        this.updateToggleButton();
    };

    updateToggleButton = () => {
        const button = document.getElementById('toggle');
        const currentMode = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
        // button.textContent = currentMode;
    };

    render() {
        return (
            <div>
                <header className="l-header">
                    <nav className="nav bd-grid">
                    
                        <div>
                <a href="#" className="nav__logo">Vikram reddy</a>
                </div>
                
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Projects</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        <li className="nav__item"><a className="nav__link" onClick={this.toggleMode}><span id="toggle"><i className='bx bxs-moon'></i></span></a></li>
                    </ul>
                </div>
            
                    </nav>
                </header>

                <main className="l-main">
                    <section className="home bd-grid" id="home">
                    <div className="home__data">
            <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Vikram reddy</span><br/> Full Stack Developer</h1>
            <a href="#contact" className="button">Contact</a>
            <a href="https://res.cloudinary.com/dtaene1s4/raw/upload/v1719355088/Resume_Recent_1_crsbq4.docx" className="button github-right">Download Resume</a>

        </div>
            <div className="home__social">
                <a href="https://www.linkedin.com/in/vikram-reddy-annem-2ab60920b/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/annemvikramreddy" className="home__social-icon "><i className='bx bxl-github'></i></a>
            </div>
        
            <div className="home__img">
                {/* Add SVG or image here */}
            </div>
        

                    </section>

                    <section className="about section" id="about">
                    
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src="https://res.cloudinary.com/dtaene1s4/image/upload/v1701307426/untitled9.jpg_deu8k5.png" alt=""/>
                </div>
                
                <div>
                    <h2 className="about__subtitle">I'am Vikram</h2>
                    <p className="about__text">Full Stack Developer with three years of experience, skilled at developing advanced web applications. My front-end expertise includes HTML, CSS, JavaScript, React.js, and Next.js, which I use to create dynamic interfaces for dashboards, registration forms, and workflow management systems. In backend development, I utilize Node.js and Express.js to build secure and efficient microservices, focusing on functionalities critical for financial management and tracking customer interactions. I am proficient in managing both SQL and NoSQL databases such as MongoDB, Firebase, and DynamoDB, ensuring robust data integrity and performance. Most of my recent projects have utilized AWS services, specifically EC2, S3, Lambda, and API Gateway, which have been pivotal in deploying scalable and efficient applications. My extensive experience with the Google Cloud Platform (GCP), particularly with Firebase Functions and Compute Engine, complements my cloud expertise. My collaborative work in development teams highlights my ability to innovate and address technical challenges effectively, demonstrating my commitment to delivering high-quality software solutions.</p>           
                </div>                                   
            </div>
        
                    </section>

                    <section className="skills section" id="skills">
                    
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
                <div>
                    <h2 className="skills__subtitle">Professional Skills</h2>
                    <p className="skills__text">I led a startup project, utilizing React.js for a dynamic frontend and Node.js for a scalable backend. Integration with Google Cloud Platform ensured a robust hosting infrastructure, leveraging services like App Engine and Cloud Firestore. The tech stack showcased my proficiency in modern web development and cloud solutions. The result is a streamlined and scalable application, highlighting my commitment to delivering high-quality solutions for startups.</p>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-html5 skills__icon'></i>
                            <span className="skills__name">HTML5</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div><span className="skills__percentage">95%</span></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-css3 skills__icon'></i>
                            <span className="skills__name">CSS3</span>
                        </div>
                        <div className="skills__bar skills__css"></div>
                        <div><span className="skills__percentage">85%</span></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-javascript skills__icon'></i>
                            <span className="skills__name">JavaScript</span>
                        </div>
                        <div className="skills__bar skills__js"></div>
                        <div><span className="skills__percentage">65%</span></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-react skills__icon'></i>
                            <span className="skills__name">React JS</span>
                        </div>
                        <div className="skills__bar skills__ux"></div>
                        <div><span className="skills__percentage">85%</span></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-nodejs skills__icon'></i>
                            <span className="skills__name">Node JS</span>
                        </div>
                        <div className="skills__bar skills__js"></div>
                        <div><span className="skills__percentage">80%</span></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-google skills__icon'></i>
                            <span className="skills__name">Google Cloud Platform</span>
                        </div>
                        <div className="skills__bar skills__js"></div>
                        <div><span className="skills__percentage">65%</span></div>
                    </div>
    

                    {/* Similarly, repeat the structure for other skills */}

                </div>

                <div>
                    <img src="./work3.jpg" alt="" className="skills__img"/>
                </div>
            </div>
        
                    </section>

                    <section className="work section" id="work">
                    <h2 className="section-title">Projects</h2>

<div className="work__container bd-grid">
    <a href="https://food-app-eta-pearl.vercel.app/" className="work__img">
        
        <h1 className="heading">Pumpkin-Spice </h1>
        <p className="heading">Developed an end-to-end food ordering full stack application with distinct features  </p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/food-app.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://food-app-eta-pearl.vercel.app/" className="heading home__social-icon"><i className='bx bx-link-external'></i></a>
        <p><i className='bx bx-chevrons-left'></i> Visit & Order <i className='bx bx-chevrons-right'></i></p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work2.jpg" alt=""/>
    </a>
    <a href="https://music-seven-phi.vercel.app/" className="work__img">
    <h1 className="heading">Spotify design page</h1>
        <p className="heading">Mostly concentrated on audio features for frictionless play, pause and next song   </p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/react-deploy" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://music-seven-phi.vercel.app/" className="heading home__social-icon"><i className='bx bx-link-external'></i></a>
        <p><i className='bx bx-chevrons-left'></i> play & listen <i className='bx bx-chevrons-right'></i></p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work4.jpg" alt=""/>
    </a>
    <a href="https://chatbot-topaz-ten.vercel.app/" className="work__img">
    <h1 className="heading">Chat-APP</h1>
        <p className="heading">Leveraging LLMs like ChatGPT to create a Chatbot with API's and generated the past search history in sidebar</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/Chatbot.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a  href="https://chatbot-topaz-ten.vercel.app/" className="heading home__social-icon"><i className='bx bx-link-external'></i></a>
        <p className="github-right"><i className='bx bx-chevrons-left'></i> Bring Out Curiosity <i className='bx bx-chevrons-right'></i></p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work6.jpg" alt=""/>
    </a>
    <a href="https://github.com/annemvikramreddy/graphql-local.git" className="work__img">
    <h1 className="heading">GraphQL Server</h1>
        <p className="heading">Used Apollo server and dived into different levels of interlink data connections to fetch</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/graphql-local.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        {/* <a  className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a> */}
        <p className="github-right"><i className='bx bx-chevrons-left'></i> Clone & Test repo <i className='bx bx-chevrons-right'></i></p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work1.jpg" alt=""/>
    </a>
    <a href="https://netflix-design-two.vercel.app" className="work__img">
    <h1 className="heading">Netflix Design</h1>
        <p className="heading">integrated with movie TMDB APIs generated Images & Content by smooth level of authorization with firestore database </p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/netflix-design.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a  href="https://netflix-design-two.vercel.app" className="heading home__social-icon"><i className='bx bx-link-external'></i></a>
        {/* <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_reactjs-tailwindcss-nodejs-activity-7140159441332527104-HrnE?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a> */}
        <p><i className='bx bx-chevrons-left'></i> login & watch trailers <i className='bx bx-chevrons-right'></i></p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work3.jpg" alt=""/>
    </a>
    <a href="https://revised-portfolio-ten.vercel.app/" className="work__img">
    <h1 className="heading">Portfolio </h1>
        <p className="heading">page you are looking in right now, click on each card or external link icon for viewing the application</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/Revised-portfolio.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a  href="https://revised-portfolio-ten.vercel.app/" className="heading home__social-icon"><i className='bx bx-link-external'></i></a>
        <p><i className='bx bx-chevrons-left'></i> Suggest any changes<i className='bx bx-chevrons-right'></i></p>
        </div> 
    </a>
    <a href="" className="work__img">
        <img src="./work5.jpg" alt=""/>
    </a>
</div>
                    </section>

                    <section className="contact section" id="contact">
                    <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form action="" className="contact__form">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="email" placeholder="Email" className="contact__input" />
          <textarea placeholder="Message" cols="30" rows="10" className="contact__input"></textarea>
          <input type="submit" value="Enter" className="contact__button button" />
        </form>
      </div>
                    </section>
                </main>

                <footer className="footer">
                <p className="footer__title">Vikram</p>
                <p className="footer__paragraph">5613062986</p>
                <p className="footer__paragraph">annemvikramreddy@gmail.com</p>
      <div className="footer__social">
        <a href="#" className="footer__icon"><i className='bx bxl-facebook'></i></a>
        <a href="https://www.instagram.com/began_to_conquer/" className="footer__icon"><i className='bx bxl-instagram'></i></a>
        <a href="#" className="footer__icon"><i className='bx bxl-twitter'></i></a>
      </div>
      <p className="footer__copy">&#169; enhance. All rights reserved</p>
                </footer>
            </div>
        );
    }
}

export default Portfolio;
