import React, { useState } from 'react';
import styles from '../assets/css/Login.module.css';
import menuIcon from '../assets/img/menu.png';
import profileIcon from '../assets/img/profile.png';
import wallpaper from '../assets/img/wallpaper.png';
import linkedinIcon from '../assets/img/in.png';
import githubIcon from '../assets/img/git.png';
import twitterIcon from '../assets/img/twitter.png';
import instagramIcon from '../assets/img/instagram.png';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true); // Состояние для переключения между формами

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm); // Переключаемся между формами
  };

  return (
    <div>
      <header className={styles['wrapper-header']}>
        <div className={styles['header']}>
          <div className={styles['headerLeft']}>
            <h1>Daniil Dmitrievich Shterkel</h1>
          </div>

          <div className={styles['headerRight']}>
            <a href="#"><img src={menuIcon} className={styles['headerRight-img']} id="burger-menu" alt="Menu" /></a>
            <div className={styles['headerRightA']}>
              <a href="/" className={styles['headerRight-href']}>Home</a>
              <a href="/about" className={styles['headerRight-href']}>About</a>
              <a href="/projects" className={styles['headerRight-href']}>Projects</a>
              <a href="/media" className={styles['headerRight-href']}>Media</a>
              <a href="/blog" className={styles['headerRight-href']}>Blog</a>
              <a href="/contact" className={styles['headerRight-href']}>Contact</a>
            </div>
          </div>

          <div className={styles['sidebar']} id="sidebar">
            <div className={styles['sidebarLogin']}>
              <a href="#"><img src={profileIcon} alt="Profile" /></a>
              <a href="#">Log In</a>
            </div>
            <div className={styles['sidebarLine']}></div>
            <a href="#" onClick={(e) => { e.preventDefault(); /* Your logic here */ }} className={styles.closebtn} id="closeSidebar">&times;</a>
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
        </nav>
      </header>

      <div className={styles['overlay']} id="overlay"></div>

      <section className={styles['wrapper-logo']}>
        <h1>{isLoginForm ? 'Login' : 'Register'}</h1>
      </section>

      <section className={styles['wrapper-login']}>
        {isLoginForm ? (
          <div className={styles['login']} id="login-form">
            <div className={styles['loginGroup']}>
              <label htmlFor="email">Login</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles['loginGroup']}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className={styles['loginButton']}>
              <a href="#" className={styles['btn-item']} id="login-button">Login</a>
              <a href="#" className={styles['btn-item']} id="toggle-form" onClick={toggleForm}>Don't have an account? Create</a>
            </div>
          </div>
        ) : (
          <div className={styles['register']} id="register-form">
            <div className={styles['registerGroupUp']}>
              <div className={styles['registerGroupUpLeft']}>
                <div className={styles['registerAvatar']}>
                  <div id="avatarContainer" className={styles['avatar-container']}>
                    <img id="avatarImg" src={profileIcon} alt="Avatar" className={styles['avatar']} />
                  </div>
                  <input type="file" id="avatarInput" accept="image/*" style={{ display: 'none' }} />
                </div>
                <div id="cropperModal" style={{ display: 'none' }}>
                  <img id="cropperImage" src="" alt="Image to crop" />
                  <button id="cropButton">Crop</button>
                </div>
              </div>

              <div className={styles['registerGroupUpRight']}>
                <div className={styles['registerGroup']}>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className={styles['registerGroup']}>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" name="last-name" required />
                </div>
              </div>
            </div>

            <div className={styles['registerGroupDown']}>
              <div className={styles['registerGroupDownLeft']}>
                <div className={styles['registerGroup']}>
                  <label htmlFor="reg-email">Email</label>
                  <input type="email" id="reg-email" name="reg-email" required />
                </div>
              </div>
              <div className={styles['registerGroupDownRight']}>
                <div className={styles['registerGroup']}>
                  <label htmlFor="reg-password">Password</label>
                  <input type="password" id="reg-password" name="reg-password" required />
                </div>
                <div className={styles['registerGroup']}>
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
              </div>
            </div>

            <div className={styles['registerButton']}>
              <a href="#" className={styles['btn-item']} id="register-button">Register</a>
              <a href="#" className={styles['btn-item']} id="toggle-form-back" onClick={toggleForm}>Already have an account? Login</a>
            </div>
          </div>
        )}
      </section>

      <section className={styles['wrapper-wallpaper']}>
        <div className={styles['wallpaper']}>
          <img src={wallpaper} alt="Wallpaper" />
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
            <a href="https://www.linkedin.com/in/daniil-shterkel-686661318/"><img src={linkedinIcon} alt="LinkedIn" /><span>Linkedin</span></a>
            <a href="https://github.com/Lonised"><img src={githubIcon} alt="GitHub" /><span>GitHub</span></a>
            <a href="https://x.com/lonised_"><img src={twitterIcon} alt="Twitter" /><span>Twitter</span></a>
            <a href="https://www.instagram.com/lonised_/"><img src={instagramIcon} alt="Instagram" /><span>Instagram</span></a>
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

export default Login;
