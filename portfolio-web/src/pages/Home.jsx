import React from 'react'
import bgYellow from '../images/bg-yellow.png'
import myimg from '../images/myimg.png'
import footer from '../images/footer-yellow.png'
import Footer from '../components/Footer'
import pimg from '../images/p.png'
import { Link } from 'react-router-dom'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleProject = () => {
        navigate('/project')
    }

    return (
        <div>
            <div className='mainDiv'>
                <div className='container homeContainer '>
                    <section className='sectionOne'>
                        <div className='2xl:container pt-4 px-2 gap-3 mx-auto 2xl:mx-auto main-div grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 w-full gap-2'>
                            <div className='homeRightSide flex items-center justify-center'>
                                <div className='myImg w-full sm: h-80 md:h-80'>
                                    <h1>.</h1>
                                </div>
                            </div>

                            <div className='homeLeftSide flex justify-center items-center'>
                                <div className=' w-full'>
                                    <h1 className=' text-4xl font-bold fw-40'>Hello, my name </h1> <br /> <h1 className='text-4xl font-bold'>is
                                        <span className='lg:text-6xl font-bold'>Touseeq Haider</span> </h1> <br />
                                    <p>a professional & Experience <strong>"Front End"</strong> developer.</p><br />
                                    <div className='flex justify-start'>
                                        <button onClick={handleProject} className='bg-yellow py-2 px-4 border border-black hover:text-white hover:bg-black rounded '>Project</button>
                                        <Link className='py-2 px-4 border border-blue ml-4' to="https://www.linkedin.com/feed/" target="_blank" class="ml-4 bg-transparent  hover:no-underline hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded">
                                            LinkedIn
                                        </Link>
                                    </div>
                                    <div className='pt-3'>
                                        <marquee className="text-lg font-bold"> WELCOME To MY WEBSITE</marquee>
                                        <marquee className="text-yellow font-bold" direction="right" behavior="alternate">|| Reacting to the expectations of your audience ||</marquee>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className='sectionTwo flex items-center'>
                        <div className='team-div w-full'>
                            <div className='grid gap-2 py-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 mt-4 mx-2'>
                                <div className='justify-center'>
                                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pimg} alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='justify-center'>
                                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pimg} alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center m-3'>
                                <Link to="/project" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:no-underline hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded'>View All Projects</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default Home