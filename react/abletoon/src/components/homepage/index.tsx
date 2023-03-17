const HomePage = () => {
  return (
    <div className="md:relative h-384 md:h-256 w-full font-semibold ">
      <div style={{ backgroundImage: `url(/img/homepage/340_Califato2.jpg)`, backgroundSize: 'cover' }} className="md:absolute text-[#00FFAF]
      h-1/3
      md:w-3/5 md:h-4/6
      ">
        <a href={'#'}>
          <div className="p-8 md:p-20">
            <h2 className="md:text-5xl text-2xl md:mb-5 md:leading-relaxed" >{'Califato ¾: Taking Flamenco Into The Future'}</h2>
            <p className="text-lg md:text-2xl underline after:content-['>'] after:ml-0.5">{'Watch the video'}</p>
          </div>
        </a>
      </div>

      <div style={{ backgroundImage: `url(/img/homepage/339_Spectral_time_HP2.jpg)`, backgroundSize: 'cover' }} className="md:absolute text-[#FDF900]
      h-1/3 w-11/12 ml-auto mt-16
      md:w-1/3 md:h-2/5 md:top-1/3 md:right-0 md:mt-0
      ">
        <a href={'#'}>
          <div className="p-8">
            <h2 className="md:text-4xl text-2xl" >{'Freeze, Delay and Deconstruct – Sound Design with Spectral Time'}</h2>
            <p className="text-lg underline after:content-['>'] after:ml-0.5">{'Get the Pack'}</p>
          </div>
        </a>
      </div>

      <div style={{ backgroundImage: `url(/img/homepage/HP_Cinimatique_1000x680.jpg)`, backgroundSize: 'cover' }} className="md:absolute
      text-[#f6fcad]
      h-1/3 w-11/12 mr-auto -mt-20
      md:w-1/3 md:h-1/3 md:bottom-16 md:left-1/2 md:mt-0
      ">
        <a href={'#'}>
          <div className="p-8">
            <h2 className="md:text-4xl text-2xl" >{'Plucked Strings by Cinematique Instruments: a collection of highly versatile stringed instruments'}</h2>
            <p className="text-lg underline after:content-['>'] after:ml-0.5">{'Explore the theme of Loop Create 2022'}</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HomePage