"use client"
import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import { useState } from "react";
import{AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from "react-icons/ai"
import {RiTwitterXFill} from "react-icons/ri"
import {BiLogoReact} from "react-icons/bi"
import deved from '/public/dev-ed-wave.png';
import Database from '../public/storage.png'
import Design from '../public/design.png'
import front from '../public/front.png'
import web1 from "../public/web11.png"
import Rental from "../public/Rental.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import clon from "../public/Frame 2.svg"



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
    <Head>
    <title>Yasser Aimeur Portfolio</title>
    <meta name="description" content=""></meta>
    <link rel="icon" href="/favicon.ico"></link>
    <link rel='stylesheet' href='/app/globals.css'></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    
    </Head>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
       <nav className="py-10 mb-12 flex justify-between">
         <h1 className="text-xl font-mono dark:text-gray-50">DEVELOPEDBYME </h1>
         <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-50'/>
          </li>
          <li><a className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-10"href="#">Resume</a></li>
         </ul>
       </nav>
       <div className='text-center p-10'> 
        <h2 className='text-5xl py-2 text-teal-600 font-lugarsimo'>Yasser Aimeur</h2>
        <h3 className='text-2xl py-2 dark:text-gray-50'>Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-50 text-xl font-lugarsimo'>
          Freelancer providing services for programming 
          needs. Join me down blow and let's get cracking </p>
       </div>
       <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer'>
        <a href='https://twitter.com/TOPmoments11'><AiFillTwitterCircle /></a>
        <a href='https://www.linkedin.com/in/yasser-aimeur-383930226/'><AiFillLinkedin /></a>
        <a href='https://github.com/Rainzler-Exagone'><AiFillGithub /></a>
       </div>
       <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
        <Image src={deved} layout='fill' objectFit='cover' />
       </div>
      </section>
      <section>
       <div className='mt-10'>
       <h3 className='text-3xl py-1 font-lugarsimo dark:text-gray-200 text-center mt-4'>Services I offer</h3>
        <p className='text-md py-2 leading-8 text-gray-80 dark:text-gray-50 font-lugarsimo text-center'>
          Since the beginning of my journey as a freelance Developer, I've completed plenty of side Project using defferent <span className='text-teal-500'>tools </span>
          and collaborated with talented people to creat digital products 
          for both business and consumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-50'>
          I offer from a wide range of services , including programming .
        </p>
       </div>
        <div className='lg:flex gap-10 '>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={front} width={100} height={100}  />
            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-50'>Front-end</h3>
            <p className='py-2 dark:text-gray-50'>
              Create a cleane and an understandable Design for your project
            </p>
            <h4 className='py-4 text-teal-600 dark:text-gray-50'>Front end tools I use</h4>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Next JS</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Vite</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Three JS</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={Database} width={100} height={100}  />
            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-50'>Back-end</h3>
            <p className='py-2 dark:text-gray-50'>
            Create a cleane and an understandable Design for your project
            </p>
            <h4 className='py-4 text-teal-600 dark:text-gray-50'>Database tools I use</h4>
            <p className='text-gray-800 py-1 dark:text-gray-50'>PostgresQL</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>MySQL</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>redis</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={Design} width={100} height={100}  />
            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-50'>Designs</h3>
            <p className='py-2 dark:text-gray-50'>
               Create a cleane and an understandable Design for your project
            </p>
            <h4 className='py-4 text-teal-600 dark:text-gray-50'>Design tools I use</h4>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Photoshop</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Figma</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Illustrator</p>
          </div>
        </div>
      </section>
        <section>
          <div>
                <h3 className='text-3xl py-1 dark:text-gray-200 '>Portfolio</h3>
                {/* <p className='text-md py-2 leading-8 text-gray-80 dark:text-gray-50'>
                  Since the beginning of my journey as a freelance Developer, I've done remote work for <span className='text-teal-500'>agencies </span>
                  consulted for <span className='text-teal-500'>startups </span>
                  and collaborated with talented people to creat digital products 
                  for both business and consumer use.
                </p> */}
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-50'>
                  I offer from a wide range of services , including brand Database and programming .
                </p>
          </div>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <a href='https://three-js-neon.vercel.app/'><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></a>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={Rental} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
                </div>
              {/* <div className='basis-1/3 flex-1'>
                <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'> 
                <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
              </div> */}
            </div>
        </section>
      </main>
    </div>
  )
}
