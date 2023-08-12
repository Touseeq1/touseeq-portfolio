import React from 'react'
import pic from '../images/about-myimg.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Aboute = () => {
  return (
    <div>
      <div className='mainDiv'>
        <div className='container'>
          <div className='about-div'>
            <div className='grid lg:grid-cols-2 w-full gap-1'>
              <div className='m-2 flex justify-center items-center' >
                <div className='p-4'>
                  <h1 className='text-4xl font-bold'>About me</h1> <br />
                  <p className='mb-5'>I am a highly skilled and motivated <strong>React JS Front-End Developer</strong> with a passion for crafting exceptional user experiences and innovative web applications. With more then 01 years of experience, I possess a deep understanding of modern web development principles and produce high-quality, responsive, and visually appealing websites.
                    My expertise lies in building dynamic and interactive user interfaces using React JS, along with proficiency in <strong>MUI, Tailwind css, React Bootstrap, HTML5, CSS3, SASS and JavaScript</strong>. I am well-versed in state management libraries like <strong>Redux Toolkit(Thunk) & Context API</strong>. Leveraging my strong problem-solving skills.
                    My portfolio showcases a range of projects that demonstrate my ability to transform design mockups into fully functional, pixel-perfect web applications.
                    As a React JS Front-End Developer, I am excited to contribute my skills and expertise to create engaging and intuitive digital experiences that leave a lasting impact.
                    Thank you for considering my profile. I look forward to the job opportunity to discuss how my contributions can benefit your team and projects.</p>
                  <Link to='https://drive.google.com/file/d/1349VtugUnMgdUrMQTBWbegYJQaJykNby/view?usp=sharing' target="_blank"  className='bg-transparent hover:bg-blue-500 text-blue-700 hover:no-underline font-semibold hover:text-black underline-none py-2 px-4 border hover:border-transparent rounded'>Download Resume</Link>

                </div>
              </div>
              <div className='aboutUsDiv rounded-lg flex justify-center w-full h-screen items-center'>
                <div className=' w-full h-screen  aboutImg'>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboute