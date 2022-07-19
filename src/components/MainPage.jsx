import React, { useState } from 'react'
import '../styles/MainPage.css'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation, Thumbs } from "swiper";


export const MainPage = () => {
 
    const [showMenu, setShowMenu] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleToggle = () => {
        setShowMenu( !showMenu )  
    }
 
    /* ABRIR Y CERRAR MENU */    
    const handleMenu = () => {
        setShowMenu(!showMenu)
      }
 
 return (
<>
    {/* MENU */}

    <header className="header">
        <div className="nav container">
        <div className="nav__logo">
            <h2 className="nav__logo-name">
                Car<span>Washing</span> 
            </h2>
            <p className="nav__logo-slogan">
                Always expect fast and efficient service.
            </p>
        </div>
        <nav className={`nav__menu ${showMenu ? "show-menu" : ""}`} >
                <div onClick={handleMenu} className={`nav__close ${showMenu ? 'show-menu' : ""}`} id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>
            <li className="nav__options">
                <h2 className="nav__menu-name">
                    Car<span>Washing</span> 
                </h2>
                <a onClick={handleMenu}  href="#home" className="nav__link">Inicio</a>
                <a onClick={handleMenu}  href="#service" className="nav__link">Servicios</a>
                <a onClick={handleMenu}  href="#about" className="nav__link">Nosotros</a>
                <a  onClick={handleMenu} href="#contact" className="nav__link">Contacto</a>
            </li>
        </nav>
        <div onClick={handleToggle} className="nav__toggle">
             <i className='bx bx-menu'></i>
        </div>
        </div>
    </header>
    
    {/* HOME */}

    <section className="home" id='home'>
    <Swiper
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper"
        style={{"--swiper-navigation-color": "#FFF", 
        "--swiper-pagination-color": "#FFF",
        "--swiper-navigation-size": "15px"}}

      > 
      <SwiperSlide className='swiper-arrow'>
        <img src="https://i.imgur.com/nYGxmKX.jpg" alt="Auto1" className="home__img" />
      </SwiperSlide>
      <SwiperSlide className='swiper-arrow'>
        <img src="https://i.imgur.com/DtXJUAp.jpg" alt="Auto2" className="home__img" />
      </SwiperSlide>
      <SwiperSlide className='swiper-arrow'>
        <img src="https://i.imgur.com/9n9QmA3.jpg" alt="Auto3" className="home__img" />
      </SwiperSlide>
      </Swiper>
        </section>

    {/* SERVICE */}
    <section className="service container" id='service'>
        <h1 className="service__title">
            MOST TRUSTED FULL SERVICE CAR WASH
        </h1>
        <p className="service__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Exercitationem magnam corporis, ipsam maiores ad labore, 
            quos quis odio ex quidem velit ullam quas qui voluptas mollitia sit modi a recusandae!
        </p>
        <div className="service__cards container">
            {/* Card 1 */}
            <div className="service__card">
                <div className="service__card-title-container">
                   <p className='service__card-title'>BASIC wash</p>
                </div>
                <div className="service__card-content">
                <i className='bx bxs-certification'></i>
                    <p className="service__card-text">
                    Car Wash <br /> Clear Coat <br /> Whell bRIGHT <br />DGASGASDG <br /> ADFSGASG
                    </p>
                </div>
            </div>
            {/* Card 2 */}
            <div className="service__card">
                <div className="service__card-title-container">
                   <p className='service__card-title'>BASIC wash</p>
                </div>
                <div className="service__card-content">
                <i className='bx bxs-certification'></i>
                    <p className="service__card-text">
                    Car Wash <br /> Clear Coat <br /> Whell bRIGHT <br />DGASGASDG <br /> ADFSGASG
                    </p>
                </div>
            </div>
            {/* Card 3 */}
            <div className="service__card">
                <div className="service__card-title-container">
                   <p className='service__card-title'>BASIC wash</p>
                </div>
                <div className="service__card-content">
                <i className='bx bxs-certification'></i>
                    <p className="service__card-text">
                    Car Wash <br /> Clear Coat <br /> Whell bRIGHT <br />DGASGASDG <br /> ADFSGASG
                    </p>
                </div>
            </div>
            {/* Card 4 */}
            <div className="service__card">
                <div className="service__card-title-container">
                   <p className='service__card-title'>BASIC wash</p>
                </div>
                <div className="service__card-content">
                    <i className='bx bxs-certification'></i>
                    <p className="service__card-text">
                    Car Wash <br /> Clear Coat <br /> Whell bRIGHT <br />DGASGASDG <br /> ADFSGASG
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* ABOUT */}
    <section className="about container" id='about'>
        <div className="about__container">
            
            {/* Welcome */}
            <div className="about__welcome">
            <h2 className="about__title"> Welcome </h2>
                <img src="https://i.imgur.com/9VDLQg1.jpg" alt="" className="about__welcome-img" />
                <h3 className="about__subtitle">Lorem Impsum DOLOR SIT AMET</h3>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla quibusdam non nobis illum quasi, saepe repellat vel reiciendis delectus quaerat quis molestias doloremque eum ad quod voluptas molestiae at!</p>
            </div>
            {/* Whyus */}
            <div className="about__whyus">
                
                <h2 className="about__title"> Why Choose Us </h2>
                
                <div className="about__whyus-motives">
                       <div className="about__whyus-motive">
                                <div className="about__whyus-imgs">
                                    <i className='bx bxs-circle'></i>
                                    </div>
                                <div className="about__whyus-content">
                                    <h3 className="about__subtitle">LABORE ET DOLORE MAGNA</h3>
                                    <p className="about__text">impsum dolor sit amet cose cteoeto fksadm a fefmefemfem ee</p>
                            </div>
                        </div>
                        <div className="about__whyus-motive">
                                <div className="about__whyus-imgs">
                                    <i className='bx bxs-circle'></i>
                                    </div>
                                <div className="about__whyus-content">
                                    <h3 className="about__subtitle">LABORE ET DOLORE MAGNA</h3>
                                    <p className="about__text">impsum dolor sit amet cose cteoeto fksadm a fefmefemfem ee</p>
                            </div>
                        </div>
                        <div className="about__whyus-motive">
                                <div className="about__whyus-imgs">
                                    <i className='bx bxs-circle'></i>
                                    </div>
                                <div className="about__whyus-content">
                                    <h3 className="about__subtitle">LABORE ET DOLORE MAGNA</h3>
                                    <p className="about__text">impsum dolor sit amet cose cteoeto fksadm a fefmefemfem ee</p>
                            </div>
                        </div>

                </div>
            </div>

            {/* Services */}

            <div className="about__services">
                
                <h2 className="about__title">Services</h2>
                
                <div className="about__services-content">
                    <ul className="about__services-list">
                        <li className="about__services-item">Exterior Wash</li>
                        <li className="about__services-item">T3 Conditioner</li>
                        <li className="about__services-item">Vacuum</li>
                        <li className="about__services-item">Dust Dash & Console</li>
                        <li className="about__services-item">Clean Windows</li>
                        <li className="about__services-item">Towel Dry</li>
                        <li className="about__services-item">Hand wheels & Tires</li>
                        <li className="about__services-item">Repel Shield</li>
                        <li className="about__services-item">Underbody Wash</li>
                        <li className="about__services-item">Tire Shine</li>
                        <li className="about__services-item">Wheel Polish</li>
                        <li className="about__services-item">HotShine Carnauba Shield</li>
                    </ul>
                </div>

            </div>
        </div>
        <img src="https://i.imgur.com/IOxgwZn.png" alt="Auto mitad limpio mitad sucio" className="about__img" />
    </section>

    {/* FOOTER */}

    
    <footer className="footer" id='contact'>
        
        <div className="footer__content container">
        
            <div className="footer__box">
                <h2 className="footer__logo-name">
                    Car<span>Washing</span> 
                </h2>
                <p className="footer__slogan">Deja tu auto limpito</p>
            </div>
                <div className="footer__box">
                    <h4 className="footer__subtitle">Call Us</h4>
                    <p className="footer__text">1-800-123-4567</p>
                </div>

                <div className="footer__box">
                    <h4 className="footer__subtitle">Location</h4>
                    <p className="footer__text">901 Marmora Road, Glasgow, D1401</p>
                </div>

                <div className="footer__box">
                    <h4 className="footer__subtitle">Email</h4>
                    <p className="footer__text">carwashing@gmail.com</p>
                </div>

        </div>
        <div className="footer__contact">
            <div className="footer__powered">&#169; 2022 - Powered by Alan Vrtal</div>

            <div className="footer__social">
                <a href="#" className="footer__link"><i className='bx bxl-instagram-alt'></i></a>
                <a href="#" className="footer__link"><i className='bx bxl-facebook-square'></i></a>
                <a href="#" className="footer__link"><i className='bx bxl-whatsapp-square'></i></a>
            </div>
        </div>
    </footer>


</> 
)}
