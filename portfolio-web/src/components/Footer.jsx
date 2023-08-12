import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../images/footer-yellow.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/insta.png'
import mail from '../images/mail.png'
const Footer = () => {
    return (
        <div>
            {/* <footer className='flex justify-center items-center'>
                <div className='flex'>
                    <Link to={`https://www.linkedin.com/feed/`}> <img className='w-1/3' src={linkedin} /></Link>
                    <Link to='mailto:touseeqhaider@gmail.com'> <img className='w-1/3' src={mail} /></Link>
                </div>
            </footer> */}

            <footer class="bg-white rounded-lg shadow dark:bg-gray-900">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div className=''>
                            <h1> <strong>Gmail:</strong> <Link onClick={() => window.location = 'mailto:touseeqhaider93@gmail.com'} class="flex items-center mb-1 sm:mb-0">
                                touseeqhaider93@gmail.com

                            </Link></h1>
                            <h1> <strong>Whatsapp:</strong> </h1><h5>03046446325</h5>
                        </div>

                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/" class="mr-4 hover:underline md:mr-6 ">Home</Link>
                            </li>
                            <li>
                                <Link to="/project" class="mr-4 hover:underline md:mr-6">Projects</Link>
                            </li>
                            <li>
                                <Link to="/service" class="mr-4 hover:underline md:mr-6 ">Services</Link>
                            </li>
                            <li>
                                <Link to="/about" class="hover:underline">About</Link>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">Touseeq™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}
export default Footer