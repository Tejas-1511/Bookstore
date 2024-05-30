import React from 'react'

function Footer() {
    return (
        <>
            <div>
                <footer className="footer footer-center p-10 border text-base-content rounded dark:bg-slate-900 dark:text-white">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover" href='/about'>About us</a>
                        <a className="link link-hover" href="mailto:tejassamant19@gmail.com">Contact</a>
                        <a className="link link-hover" href='https://i.pinimg.com/736x/7e/d7/2f/7ed72f7483e670d5e2a4cabe8f8a64c7.jpg'>Jobs</a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a href='https://www.instagram.com/tejas_00009/'><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" className='h-7 w-7 cursor-pointer' alt="" /></a>
                            <a href="mailto:tejassamant19@gmail.com"><img src="https://cdn-icons-png.freepik.com/512/46/46951.png" className='h-7 w-7 cursor-pointer' alt="" /></a>
                            <a href='https://www.youtube.com/watch?v=fdPSho8Vt_g'><img src="https://banner2.cleanpng.com/20180402/cpw/kisspng-youtube-symbol-logo-computer-icons-play-button-5ac1d5d0214ab6.6195599715226526241364.jpg" className='h-7 w-7 cursor-pointer' alt="" /></a>
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </footer>
            </div>
        </>
    )
}

export default Footer