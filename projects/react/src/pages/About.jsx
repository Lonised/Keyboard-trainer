import React, { useState } from 'react';
import styles from '../assets/css/About.module.css'; 
import { images } from '../components/images'; 
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href) => {
    if (location.pathname === href) {
      navigate(0);
    } else {
      setIsFadingOut(true);
      setTimeout(() => {
        navigate(href);
      }, 1000);
    }
  };

  return (
      <div>
      <header className={styles['wrapper-header']}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Daniil Dmitrievich Shterkel</h1>
          </div>

          <div className={styles.headerRight}>
            <a href="#"><img src={images.menuImg} className={styles['headerRight-img']} id="burger-menu" alt="Menu" /></a>
            <div className={styles.headerRightA}>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/')}>Home</a>
              <a href="#" className={styles['headerRight-href-active']} onClick={() => handleLinkClick('/about')}>About</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/projects')}>Projects</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/media')}>Media</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/blog')}>Blog</a>
              <a href="#" className={styles['headerRight-href']} onClick={() => handleLinkClick('/contact')}>Contact</a>
            </div>
          </div>

          <div className={styles.sidebar} id="sidebar">
            <div className={styles.sidebarLogin}>
              <a href="#"><img src={images.profileImg} alt="Profile" />
                <p>Log In</p>
              </a>
            </div>
            <div className={styles.sidebarLine}></div>
            <a href="/" className={styles['sidebar-href-active']}>Home</a>
            <a href="/about" className={styles['sidebar-href']}>About</a>
            <a href="/projects" className={styles['sidebar-href']}>Projects</a>
            <a href="/media" className={styles['sidebar-href']}>Media</a>
            <a href="/blog" className={styles['sidebar-href']}>Blog</a>
            <a href="/contact" className={styles['sidebar-href']}>Contact</a>
          </div>
        </div>
        <div className={styles.headerLine}></div>
        <nav className={styles['wrapper-nav']}>
          <div className={styles.navLeft}>
            <p>Student, Faculty of Innovative Technologies, Karaganda Saginov Technical University, STU</p>
          </div>
          <div className={styles.navRight}>
            <a id="profile-link" href="/login">
              <img id="user-avatar" src={images.profileImg} alt="User Avatar" />
            </a>
            <a href="/login">
              <p id="user-name">Log In</p>
            </a>
            <a href="#" id="sidebarToggleBtn"><img src={images.downArrowImg} alt="Toggle Sidebar" /></a>
          </div>
          <div id="secondarySidebar" className={styles['secondary-sidebar']}>
            <a href="/account" id="profileLink">Profile</a>
            <a href="/account" id="ordersLink">My Orders</a>
            <a href="/account" id="walletLink">Files</a>
            <a href="/account" id="draftsLink">My Account</a>
            <a href="/account" id="addressesLink">Notifications</a>
            <a href="/account" id="accountLink">Settings</a>
            <hr />
            <a href="#" id="logoutBtn">Log Out</a>
          </div>
        </nav>
      </header>

      <div className={styles.overlay} id="overlay"></div>

      <main className={`${styles.wrapper} ${isFadingOut ? styles.fadeOut : ''}`}>
        <section className={styles['wrapper-logo']}>
          <div className={styles.logoUp}>
            <h1>Daniil Dmitrievich Shterkel</h1>
            <img src={images.meNow} alt="Me" />
          </div>
        </section>

        <section className={styles['wrapper-about']}>
          <div className={styles.about}>
              <div className={styles.aboutInfo}>
                  <h1>Bio</h1>
                  <p>At the moment, I am 19 years old. Acquaintances and friends describe me as a calm and responsible person. Among my interests, I can highlight the following: drawing on an iPad, reading modern literature and a passion for computer technologies, such as games, web development and design.</p>
                  <br />
                  <h1>Education</h1>
                  <p>The period of study at the gymnasium 45 is 2012-2023. During my school years I was interested in many things. This includes photography, mathematical sciences, all sorts of Olympiads and competitions, volleyball and other team games. I graduated from high school with a blue certificate. Average rating 4. Since 2023 I have been studying at Karaganda Saginov Technical University. I am studying on a grant basis. I'm studying to be a software engineer. In the future, I plan to enroll in a master's program at the next university, because... I like studying.</p>
                  <br />
                  <h1>Employment</h1>
                  <p>At the moment I don't work anywhere. The only thing is that I worked during my school years. That is, I worked part-time as a tutor and freelancer. I was a tutor in mathematics and computer science. Helped those who were preparing for various Olympiads. For me, this is a plus for communication skills and responsibility. Next, I was a little bit of a freelancer. I drew on my tablet to order. Even though I haven’t worked much, for me this is also a plus for responsibility and perseverance.</p>
              </div>
              <div className={styles.aboutBtn}>
                  <a href="/src/assets/CV_EN.pdf" className={`${styles['btn-item']} ${styles['btn-effect']}`} download>Download CV</a>
              </div>
          </div>
        </section>

        <section className={styles['wrapper-faq']}>
          <div className={styles.faq}>
            <div className={styles.faqLeft}>
              <a href="#">Story Policy</a>
              <a href="#">Shipping & Returns</a>
              <a href="#">FAQ</a>
            </div>
            <div className={styles.faqRight}>
              <a href="https://www.linkedin.com/in/daniil-shterkel-686661318/"><img src={images.linkedinImg} alt="LinkedIn" /><span>LinkedIn</span></a>
              <a href="https://github.com/Lonised"><img src={images.githubImg} alt="GitHub" /><span>GitHub</span></a>
              <a href="https://x.com/lonised_"><img src={images.twitterImg} alt="Twitter" /><span>Twitter</span></a>
              <a href="https://www.instagram.com/lonised_/"><img src={images.instagramImg} alt="Instagram" /><span>Instagram</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles['wrapper-end']}>
        <div className={styles.end}>
          <p>© 2024 by Daniil D. Shterkel. Powered and secured by <a href="#">Wix</a></p>
        </div>
      </footer>
    </div>
  );
};

export default About;



