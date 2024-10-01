import React from 'react';
import styles from '../assets/css/Contact.module.css';
import { images } from '../components/images'; 

const Contact = () => {
  return (
    <div>
      <header className={styles['wrapper-header']}>
        <div className={styles['header']}>
          <div className={styles['headerLeft']}>
            <h1>Daniil Dmitrievich Shterkel</h1>
          </div>

          <div className={styles['headerRight']}>
            <a href="#">
              <img src={images.menuImg} className={styles['headerRight-img']} id="burger-menu" alt="Menu" />
            </a>
            <div className={styles['headerRightA']}>
              <a href="/" className={styles['headerRight-href']}>Home</a>
              <a href="/about" className={styles['headerRight-href']}>About</a>
              <a href="/projects" className={styles['headerRight-href']}>Projects</a>
              <a href="/media" className={styles['headerRight-href']}>Media</a>
              <a href="/blog" className={styles['headerRight-href']}>Blog</a>
              <a href="/contact" className={styles['headerRight-href-active']}>Contact</a>
            </div>
          </div>

          <div className={styles['sidebar']} id="sidebar">
            <div className={styles['sidebarLogin']}>
              <a href="#">
                <img src={images.profileImg} alt="Profile" />
                <p>Log In</p>
              </a>
            </div>
            <div className={styles['sidebarLine']}></div>
            <a href="#" onClick={(e) => { e.preventDefault(); /* Ваша логика здесь */ }} className={styles.closebtn} id="closeSidebar">&times;</a>
            <a href="/" className={styles['sidebar-href-active']}>Home</a>
            <a href="/about" className={styles['sidebar-href']}>About</a>
            <a href="/projects" className={styles['sidebar-href']}>Projects</a>
            <a href="/media" className={styles['sidebar-href']}>Media</a>
            <a href="/blog" className={styles['sidebar-href']}>Blog</a>
            <a href="/contact" className={styles['sidebar-href']}>Contact</a>
          </div>
        </div>
        <div className={styles['headerLine']}></div>
        <nav className={styles['wrapper-nav']}>
          <div className={styles['navLeft']}>
            <p>Student, Faculty of Innovative Technologies, Karaganda Saginov Technical University, STU</p>
          </div>
          <div className={styles['navRight']}>
            <a href="/src/pages/Login/login.html">
              <img src={images.profileImg} alt="Profile" />
            </a>
            <a href="/src/pages/Login/login.html">
              <p id="user-name">Log In</p>
            </a>
            <a href="#" id="sidebarToggleBtn">
              <img src={images.downArrowImg} alt="Toggle Sidebar" />
            </a>
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

      <section className={styles['wrapper-logo']}>
        <div className={styles['logo']}>
          <h1>Contact</h1>
        </div>
      </section>

      <section className={styles['wrapper-address']}>
        <div className={styles['address']}>
          <div className={styles['addressLeft']}>
            <p>daniilshterkel05@gmail.com</p>
            <p>7-777-777-77-77</p>
          </div>
          <div className={styles['addressRight']}>
            <a href="https://www.linkedin.com/in/daniil-shterkel-686661318/">
              <img src={images.linkedinImg} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Lonised">
              <img src={images.githubImg} alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a href="https://x.com/lonised_">
              <img src={images.twitterImg} alt="Twitter" />
              <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com/lonised_/">
              <img src={images.instagramImg} alt="Instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles['wrapper-mail']}>
        <div className={styles['mail']}>
          <div className={styles['mailUp']}>
            <div className={styles['mailInput']}>
              <p>First Name *</p>
              <input type="text" id="first-name" required />
            </div>
            <div className={styles['mailInput']}>
              <p>Last Name *</p>
              <input type="text" id="last-name" required />
            </div>
          </div>
          <div className={styles['mailMiddle']}>
            <div className={styles['mailInput']}>
              <p>Email Address *</p>
              <input type="email" id="email" required />
            </div>
            <div className={styles['mailInput']}>
              <p>Phone</p>
              <input type="tel" id="phone" />
            </div>
          </div>
          <div className={styles['mailDown']}>
            <div className={styles['mailDownMessage']}>
              <p>Type your message here...</p>
              <textarea id="message" required></textarea>
            </div>
            <div className={styles['mailDownBtn']}>
              <a href="#" className={styles['btn-item']} id="submit-btn">Submit</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['wrapper-faq']}>
        <div className={styles['faq']}>
          <div className={styles['faqLeft']}>
            <a href="#">Story Policy</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">FAQ</a>
          </div>
          <div className={styles['faqRight']}>
            <a href="https://www.linkedin.com/in/daniil-shterkel-686661318/">
              <img src={images.linkedinImg} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Lonised">
              <img src={images.githubImg} alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a href="https://x.com/lonised_">
              <img src={images.twitterImg} alt="Twitter" />
              <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com/lonised_/">
              <img src={images.instagramImg} alt="Instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles['wrapper-end']}>
        <div className={styles['end']}>
          <p>© 2024 by Daniil D. Shterkel. Powered and secured by <a href="#">Wix</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
