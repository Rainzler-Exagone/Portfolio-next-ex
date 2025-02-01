"use client"
import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill, BsGit} from "react-icons/bs"
import { useState } from "react";
import{AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from "react-icons/ai"
import {RiTwitterXFill} from "react-icons/ri"
import {BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoHtml5, BiLogoCss3, BiLogoMongodb, BiLogoPostgresql, BiLogoJava} from "react-icons/bi"
import {TbBrandNextjs, TbBrandThreejs, TbBrandVite} from "react-icons/tb"
import {IoLogoVercel} from "react-icons/io5"
import {BiLogoPython} from "react-icons/bi"
import {SiNetlify, SiPostman} from "react-icons/si"
import {GrMysql} from "react-icons/gr"
import deved from '/public/dev-ed-wave.png';
import Database from '../public/storage.png'
import Design from '../public/design.png'
import front from '../public/front.png'
import web1 from "../public/web11.png"
import Rental from "../public/Rental.png"
import Instant from "../public/instantCook.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import clon from "../public/Frame 2.svg"
import Marquee from "react-fast-marquee"
import programmer from "../public/programmer.png"
import parallax from "../public/parallax.png"




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
    <main className='bg-white px-10 md:px-20 lg:px-40 font-mono dark:bg-gray-900'>
      <section className='min-h-screen'>
       <nav className="py-10 mb-12 flex justify-between">
         <h1 className="text-xl font-mono dark:text-gray-50">DEVELOPEDBYME </h1>
         <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-50'/>
          </li>
         </ul>
       </nav>
       <div className='text-center p-10'> 
        <h2 className='text-5xl py-2 text-teal-600 font-mono'>Yasser Aimeur</h2>
        <h3 className='text-2xl py-2 font-mono dark:text-gray-50'>Web Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-50 text-xl font-mono'>
          Freelancer providing services for programming 
          needs. Join me down blow and let's get cracking </p>
       </div>
       <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer'>
        <a href='https://twitter.com/TOPmoments11'><AiFillTwitterCircle className='hover:text-blue-500'/></a>
        <a href='https://www.linkedin.com/in/yasser-aimeur-383930226/'><AiFillLinkedin  className='hover:text-blue-500'/></a>
        <a href='https://github.com/Rainzler-Exagone'><AiFillGithub className='hover:text-blue-500'/></a>
       </div>
       <div className=' mx-auto  mt-20 overflow-auto md:h-96 md:w-96 'id='programmer'>
        <Image src={programmer}  />
       </div>
      </section>
      <section>
       <div className='mt-10'>
       <h3 className='text-3xl py-1 font-mono dark:text-gray-200 text-center mt-4'>Services I offer</h3>
        <p className='text-md py-2 leading-8 font-bold text-gray-80 dark:text-gray-50 font-mono text-center'>
          Since the beginning of my journey as a freelance Developer, I've completed plenty of side Project using defferent <span className='text-teal-500'>tools </span>
          and collaborated with talented people to creat digital products 
          for both business and consumer use.
        </p>
        <div className='w-full h-full my-10 flex  justify-center gap-10 overflow-x-scroll scroll-smooth scrollbar-hide '>
        <Marquee speed="30">
        <BiLogoHtml5 size={40} className='mx-8 dark:text-gray-400  ' />
         <BiLogoCss3 size={40} className='mx-8 dark:text-gray-400 ' />
         <BiLogoJavascript size={40}  className='mx-8 dark:text-gray-400 ' />
         <BiLogoReact size={40} className='mx-8 dark:text-gray-400 ' />
         <BiLogoTailwindCss size={40} className='mx-8 dark:text-gray-400 ' />
         <TbBrandNextjs size={40} className='mx-8 dark:text-gray-400 ' />
         <AiFillGithub size={40} className='mx-8 dark:text-gray-400 ' />
         <TbBrandThreejs size={40} className='mx-8 dark:text-gray-400 ' />
         <TbBrandVite size={40} className='mx-8 dark:text-gray-400 ' />
         <BiLogoJava size={40} className='mx-8 dark:text-gray-400 ' />
         <BiLogoPython size={40} className='mx-8 dark:text-gray-400 ' />
         <BsGit size={40} className='mx-8 dark:text-gray-400 ' />
         <BiLogoMongodb size={40} className='mx-8 dark:text-gray-400 ' />
         <BiLogoPostgresql size={40} className='mx-8 dark:text-gray-400 ' />
         <GrMysql size={40}className='mx-8 dark:text-gray-400 ' />
         <IoLogoVercel size={40} className='mx-8 dark:text-gray-400 '/>
         <SiPostman size={40} className='mx-8 dark:text-gray-400 '/>
         <SiNetlify size={40} className='mx-8 dark:text-gray-400 '/>
         
        </Marquee>
        </div>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-50'>
          I offer from a wide range of services , including programming .
        </p>
       </div>
        <div className='lg:flex gap-10 '>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={front} width={100} height={100}  />
            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-50'>Front-end</h3>
            <p className='py-2 dark:text-gray-50'>
              Create a clean and an outsanding front-end for your project
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
            Create a clean and an understandable backend infrastructure for your project
            </p>
            <h4 className='py-4 text-teal-600 dark:text-gray-50'>Database tools I use</h4>
            <p className='text-gray-800 py-1 dark:text-gray-50'>PostgresQL</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>MySQL</p>
            <p className='text-gray-800 py-1 dark:text-gray-50'>Mongodb</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='mx-auto' src={Design} width={100} height={100}  />
            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-50'>Designs</h3>
            <p className='py-2 dark:text-gray-50'>
               Create a clean and an understandable Design for your project
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
                <h3 className='text-3xl py-1 dark:text-gray-200 '>Side Projects</h3>
                
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-50'>
                  I offer from a wide range of services , including brand Database and programming .
                </p>
          </div>
          <div className='flex flex-col mt-10 items-center gap-10 lg:flex-col lg:flex-wrap'>
              <div className='basis-1/3 flex-1 w-1/2 hover:scale-110 ease-in-out transition-transform'>
                <p className='text-2xl font-mono'>Project 1 : </p>
                <p>Sphere Website using ThreeJS</p><br />
                <a href='https://three-js-neon.vercel.app/'>
                  <Image src={web1} className='rounded-lg object-cover ' width={'100%'} height={'100%'} layout='responsive' /></a>
              </div>
              <div className='basis-1/3 flex-1 w-1/2 hover:scale-110 ease-in-out transition-transform'>
                <p className='text-xl font-mono'>Project 2 : </p>
                <p>Real Estate agencie Website </p><br />
              <a href="https://realestate-4z0x4sq9m-rainzler-exagone.vercel.app/">
                  <Image src={Rental} className='rounded-lg object-cover ' width={'100%'} height={'100%'} layout='responsive'/></a>
                </div>
              <div className='basis-1/3 flex-1 w-1/2 hover:scale-110 ease-in-out transition-transform'>
                <p className='text-xl font-mono'>Project 3 : </p>
                <p>Meal proposer web application  </p><br />
              <a href="https://realestate-4z0x4sq9m-rainzler-exagone.vercel.app/">
                  <Image src={Instant} className='rounded-lg object-cover ' width={'100%'} height={'100%'} layout='responsive'/></a>
                </div>
                
            </div>
        </section>
      </main>
    </div>
  )
}
