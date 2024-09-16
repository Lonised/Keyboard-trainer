import React, { useEffect, useState } from 'react';
import styles from '../assets/css/Home.module.css';
import menuImg from '../assets/img/menu.png';
import profileImg from '../assets/img/profile.png';
import downArrowImg from '../assets/img/downArrow.png';


const Projects = () => {
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


        </div>
    )
}

export default Projects;