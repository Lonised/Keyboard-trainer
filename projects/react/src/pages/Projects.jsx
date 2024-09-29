import React, { useEffect, useState } from 'react';
import styles from '../assets/css/Projects.module.css';
import menuImg from '../assets/img/menu.png';
import profileImg from '../assets/img/profile.png';
import downArrowImg from '../assets/img/downArrow.png';


const Projects = () => {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isSecondarySidebarVisible, setIsSecondarySidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toggleSecondarySidebar = () => {
        setIsSecondarySidebarVisible(!isSecondarySidebarVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }
        };

        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && !sidebar.contains(event.target)) {
                setIsSidebarVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (isSidebarVisible) {
            document.addEventListener('click', handleClickOutside);
          }
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarVisible]);

    return (
        <div>            
            <header className={`${styles['wrapper-header']} ${isHeaderHidden ? styles.hidden : ''}`}>
                <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1>Daniil Dmitrievich Shterkel</h1>
                </div>

                <div className={styles.headerRight}>
                    <a href="#" onClick={toggleSidebar}>
                    <img src={menuImg} className={styles['headerRight-img']} id="burger-menu" alt="Menu" />
                    </a>
                    <div className={styles.headerRightA}>
                    <a href="/" className={styles['headerRight-href-active']}>Home</a>
                    <a href="/about" className={styles['headerRight-href']}>About</a>
                    <a href="/projects" className={styles['headerRight-href']}>Projects</a>
                    <a href="/media" className={styles['headerRight-href']}>Media</a>
                    <a href="/blog" className={styles['headerRight-href']}>Blog</a>
                    <a href="/contact" className={styles['headerRight-href']}>Contact</a>
                    </div>
                </div>

                {/* Sidebar */}
                <div className={`${styles.sidebar} ${isSidebarVisible ? styles.visible : ''}`} id="sidebar">
                    <div className={styles.sidebarLogin}>
                    <a href="#"><img src={profileImg} alt="Profile" />
                        <p>Log In</p>
                    </a>
                    </div>
                    <div className={styles.sidebarLine}></div>
                    <a href="#" onClick={toggleSidebar} className={styles.closebtn} id="closeSidebar">&times;</a>
                    <a href="/" className={styles['sidebar-href-active']}>Home</a>
                    <a href="/about" className={styles['sidebar-href']}>About</a>
                    <a href="/projects" className={styles['sidebar-href']}>Projects</a>
                    <a href="/media" className={styles['sidebar-href']}>Media</a>
                    <a href="/blog" className={styles['sidebar-href']}>Blog</a>
                    <a href="/contact" className={styles['sidebar-href']}>Contact</a>
                </div>
                </div>

                <div className={styles.headerLine}></div>

                {/* Secondary Sidebar */}
                <nav className={styles['wrapper-nav']}>
                <div className={styles.navLeft}>
                    <p>Student, Faculty of Innovative Technologies, Karaganda Saginov Technical University, STU</p>
                </div>
                <div className={styles.navRight}>
                    <a id="profile-link" href="/login">
                    <img id="user-avatar" src={profileImg} alt="User Avatar" />
                    </a>
                    <a href="/login">
                    <p id="user-name">Log In</p>
                    </a>
                    <a href="#" id="sidebarToggleBtn" onClick={toggleSecondarySidebar}>
                    <img src={downArrowImg} alt="Toggle Sidebar" />
                    </a>
                </div>

                {/* Secondary Sidebar */}
                <div id="secondarySidebar" className={`${styles['secondary-sidebar']} ${isSecondarySidebarVisible ? styles.visible : ''}`}>
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

            <section className={styles['wrapper-logo']}>
                <div className={styles.logo}>
                    <div className={styles['logo-left']}>
                        <h1>Projects</h1>
                    </div>
                </div>
            </section>            

            <div className={styles['wrapper-projects']}>
                <div className={styles.projects}>
                    <div className={styles['projects-form']}>
                        <div className={styles['form-left']}>
                            <img src="#" alt="#" />
                        </div>
                        <div className={styles['form-right']}>
                            <h2>Name Projects</h2>
                            <p>Description</p>
                            <button>View all</button>
                        </div>
                        <div className={styles[form-dop]}>
                            <a href="#"><img src="#" alt="#" /></a>
                        </div>
                    </div>

                    <div className={styles['projects-form']}>
                        <div className={styles['form-left']}>
                            <img src="#" alt="#" />
                        </div>
                        <div className={styles['form-right']}>
                            <h2>Name Projects</h2>
                            <p>Description</p>
                            <button>View all</button>
                        </div>
                        <div className={styles[form-dop]}>
                            <a href="#"><img src="#" alt="#" /></a>
                        </div>
                    </div>

                    <div className={styles['projects-form']}>
                        <div className={styles['form-left']}>
                            <img src="#" alt="#" />
                        </div>
                        <div className={styles['form-right']}>
                            <h2>Name Projects</h2>
                            <p>Description</p>
                            <button>View all</button>
                        </div>
                        <div className={styles[form-dop]}>
                            <a href="#"><img src="#" alt="#" /></a>
                        </div>
                    </div>
                </div>
            </div>


            <section className={styles['wrapper-faq']}>
                <div className={styles.faq}>
                    <div className={styles.faqLeft}>
                    <a href="#">Story Policy</a>
                    <a href="#">Shipping & Returns</a>
                    <a href="#">FAQ</a>
                    </div>
                    <div className={styles.faqRight}>
                    <div className={styles.faqRightIcon}>
                        <a href="https://www.linkedin.com/in/daniil-shterkel-686661318/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImg} alt="LinkedIn" />
                        <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className={styles.faqRightIcon}>
                        <a href="https://github.com/Lonised" target="_blank" rel="noopener noreferrer">
                        <img src={githubImg} alt="GitHub" />
                        <span>GitHub</span>
                        </a>
                    </div>
                    <div className={styles.faqRightIcon}>
                        <a href="https://x.com/lonised_" target="_blank" rel="noopener noreferrer">
                        <img src={twitterImg} alt="Twitter" />
                        <span>Twitter</span>
                        </a>
                    </div>
                    <div className={styles.faqRightIcon}>
                        <a href="https://www.instagram.com/lonised_/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramImg} alt="Instagram" />
                        <span>Instagram</span>
                        </a>
                    </div>
                    </div>
                </div>
                </section>

                <footer className={styles['wrapper-end']}>
                <div className={styles.end}>
                    <p>© 2024 by Daniil D. Shterkel. Powered and secured by <a href="#">Wix</a></p>
                </div>
            </footer>
        </div>
    );

};

export default Projects;