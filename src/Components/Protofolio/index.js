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
            <a href="#" className="button">Contact</a>
        </div>
            <div className="home__social">
                <a href="https://www.linkedin.com/in/vikram-reddy-annem-2ab60920b/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/annemvikramreddy" className="home__social-icon"><i className='bx bxl-github'></i></a>
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
                    <p className="about__text">As a Full Stack Developer, I bring a deep passion for technology and a wealth of expertise to every project I undertake. With a <span className="highlight">Master's degree</span> in <span className="highlight">Computer Science</span> from Florida Atlantic University and a <span className="highlight">Bachelor's degree</span> from Mahatma Gandhi Institute of Technology, I've cultivated a strong foundation in web development and technology. I thrive on challenges and am always eager to embrace new technologies, continually seeking opportunities for growth and learning. Beyond my academic achievements, I've had the privilege of serving as a <span className="highlight">team lead at KDM Engineers Group</span>, where I not only led a team but also had the joy of <span className="highlight">mentoring and hiring interns,</span> fostering a collaborative and supportive environment. Additionally, I'm immensely proud of my contributions to a <span className="highlight">laboratory management project,</span> where our team developed personalized software that streamlined processes and enhanced efficiency. With over <span className="highlight">250 commits on GitHub in 2022,</span> my dedication to delivering high-quality solutions is evident in every endeavor I undertake. I'm excited about the opportunity to continue making meaningful contributions to impactful projects in the future.</p>           
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
    <a href="https://github.com/annemvikramreddy/TypescriptLearnings" className="work__img">
        
        <h1 className="heading">Finance logger </h1>
        <p className="heading">A finance logger app built with TypeScript for tracking and managing financial transactions</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/TypescriptLearnings" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_typescript-finance-codingadventures-activity-7161131813392801792-dcPZ?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <p><i className='bx bx-chevrons-left'></i> Typecript basics</p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work2.jpg" alt=""/>
    </a>
    <a href="" className="work__img">
    <h1 className="heading">Nextjs-basics</h1>
        <p className="heading">Experimenting server side rendering with Nextjs</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/NextJSBasics" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_nextjs-react-webdevelopment-activity-7161577951233306624-vUcO?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <p><i className='bx bx-chevrons-left'></i> Nextjs learnings</p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work4.jpg" alt=""/>
    </a>
    <a href="" className="work__img">
    <h1 className="heading">Chat-APP</h1>
        <p className="heading">Leveraging LLMs like ChatGPT to create a Chatbot with API's</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/chatapp.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_reactjs-tailwindcss-nodejs-activity-7140159441332527104-HrnE?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <p><i className='bx bx-chevrons-left'></i> Integrating ChatGPT</p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work6.jpg" alt=""/>
    </a>
    <a href="" className="work__img">
    <h1 className="heading">MineSweeper Game</h1>
        <p className="heading">game played in my dads old phone as a child</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/chatapp.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_reactjs-tailwindcss-nodejs-activity-7140159441332527104-HrnE?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <p><i className='bx bx-chevrons-left'></i> Javascript learnings</p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work1.jpg" alt=""/>
    </a>
    <a href="" className="work__img">
    <h1 className="heading">Restuarant webpage</h1>
        <p className="heading">created a template for a good looking Restuarant</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/chatapp.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_reactjs-tailwindcss-nodejs-activity-7140159441332527104-HrnE?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <p><i className='bx bx-chevrons-left'></i> HTML,CSS</p>
        </div>
    </a>
    <a href="" className="work__img">
        <img src="./work3.jpg" alt=""/>
    </a>
    <a href="" className="work__img">
    <h1 className="heading">Ecommerce site</h1>
        <p className="heading">seamlessly blending user-friendly design to enhance the online shopping experience."</p>
        <div style={{ display: 'flex', alignItems: 'center', color:'lightslategray' }}>
        <a href="https://github.com/annemvikramreddy/chatapp.git" className="home__social-icon heading"><i className='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/posts/vikram-reddy-annem-2ab60920b_reactjs-tailwindcss-nodejs-activity-7140159441332527104-HrnE?utm_source=share&utm_medium=member_desktop" className="heading home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <p><i className='bx bx-chevrons-left'></i> React JS,Node JS</p>
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
