import React from 'react'

const rect = ('relative text-xl font-bold border-2 border-sky-500 rounded py-3 px-10 mb-12 after:absolute after:m-auto after:left-0 after:right-0 after:-bottom-12 after:content-["→"] after:rotate-90 after:text-5xl after:text-sky-600')

const check = (' bg-yellow-300')

const RoadMap = () => {
  return (
    <div className='text-center'>
      <h1 className='text-9xl text-violet-600 font-extrabold my-10'>Road Map</h1>
      <div className='flex flex-col justify-center items-center my-10'>
        <div className={rect + check}>HTML</div>
        <div className={rect + check}>CSS</div>
        <div className={rect + check}>Sass</div>
        <div className={rect + check}>BEM</div>
        <div className={rect + check}>JavaScript</div>
        <div className={rect + check}>Bootstrap</div>
        <div className={rect + check}>jQuery</div>
        <div className={rect + check}>Git</div>
        <div className={rect + check}>GitHub</div>
        <div className={rect}>NodeJS</div>
        <div className={rect + check}>React</div>
        <div className={rect + check}>yarn</div>
        <div className={rect + check}>D3</div>
        <div className={rect}>Redux</div>
        <div className={rect}>JSon API</div>
        <div className={rect + check}>Canvas JS</div>
        <div className={rect + check}>Vite</div>
        <div className={rect + check}>TailwindCss</div>
        <div className={rect + check}>TypeScript</div>
        <div className={rect}>NextJS</div>
        <div className={rect}>GraphQL</div>
        <div className={rect}>Flutter</div>
        <div className={rect}>React Native</div>
        <div className={rect}>MongoDB</div>
        <div className={rect}>ExpressJS</div>
      </div>
    </div>
  )
}

export default RoadMap