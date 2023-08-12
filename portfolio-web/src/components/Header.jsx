import React, { useState } from 'react'
import portfolio from '../images/portfolio.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const linkNavItem = [
        { name: "Home", link: "/" },
        { name: "Project", link: "/project" },
        { name: "Service", link: "/service" },
        { name: "About", link: "/about" }
    ]
    let [open, setOpen] = useState(false)
    return (
        <div>
           <header className='fixed Header top-0 w-full'>
                <nav className="relative  items-center justify-between py-2 text-black shadow-lg focus:text-neutral-700 md:flex-wrap md:justify-start "
                    data-te-navbar-ref>
                    <div className="flex w-full flex-wrap justify- items-center px-3">

                        <div className="mainDiv justify-between grow basis-[100%] items-center flex lg:basis-auto space-x" id="navbarSupportedContentY" data-te-collapse-item>
                            <div >
                               <Link to="/"> <img src={portfolio} alt="logo" width='70' /></Link>
                            </div>
                            <div>
                                <div onClick={() => setOpen(!open)} className='right-8 top-3 text-3xl absolute md:hidden cursor-pointer' >
                                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                                </div>
                                <ul  className={` navUl hover:text-blue-600 md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in  ${open ? 'top-20' : 'top-[-490px]'}`} >
                                    {
                                        linkNavItem.map((links) => (
                                            <li key={links.name} className="menuL p-3 lg:mb-0 lg:pr-2 block underline underline-offset-8 focus:decoration-4  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-black dark:focus:text-black lg:p-2 [&.active]:text-black/90" data-te-nav-item-ref>
                                                <Link className="block duration-500 lg:underline underline-offset-8 focus:decoration-4  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-black dark:focus:text-black lg:p-2 [&.active]:text-black/90"
                                                    to={links.link} >{links.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Header