import React from 'react'
import pimg from '../images/p.png'
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <div>
      <div className='project-div w-full grid grid-cols-1 pt-5 p-2'>
        <div className='grid gap-2 pt-5'>
          <div className='flex justify-center'>
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 w-5/6 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pimg} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">A Landing page Data Table view & Card view</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have create a landing page with (MUI), React table and perform action like search, filte, sort, pagination Using live dummy API</p>
              </div>
              <div className='w-1/5 flex justify-center m-3'>
                <Link to="https://table-card-view.vercel.app/" target="_blank" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:no-underline hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded'>View</Link>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 w-5/6 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pimg} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
              <div className='w-1/5 flex justify-center m-3'>
                <Link to="" target="_blank" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:no-underline hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded'>View</Link>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 w-5/6 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pimg} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
              <div className='w-1/5 flex justify-center m-3'>
                <Link to="" target="_blank" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:no-underline hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded'>View</Link>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 w-5/6 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pimg} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
              <div className='w-1/5 flex justify-center m-3'>
                <Link to="" target="_blank" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black hover:no-underline py-2 px-4 border border-blue-500 hover:border-transparent rounded'>View</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project