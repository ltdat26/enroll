// images must have same size > how about auto crop/resize > later

const InFocusData = [
  {
    src: 'img/teasers/infocus/HP_Slynk_1000x680-2.jpg',
    link: '#',
    category: 'Packs',
    title: 'Slink Devices by Hypnus Records'
  },
  {
    src: 'img/teasers/infocus/ABL270_Hybrid_Theory8_At622k6.jpg',
    link: 'https://www.youtube.com/watch?v=V_PtNGowT-0',
    category: 'Videos',
    title: 'Hybrid Theory: Creative Sound Design with Live 11’s New Reverb'
  },
  {
    src: 'img/teasers/infocus/BL_ABL294_A.Fruit.jpg',
    link: '#',
    category: 'Artists',
    title: 'Challenge Accepted: How A.Fruit Combines Sound Design for Games with Bass-Forward Production'
  },
]

const OneThingData = [
  {
    src: 'img/teasers/onething/One_Thing_Sasha_Perera_Title.jpg',
    link: 'https://www.youtube.com/watch?v=kfnCsgxzUgY',
    category: '',
    title: 'Chords to monophonic lines'
  },
  {
    src: 'img/teasers/onething/One_Thing_Yoav_Shemesh_Title.jpg',
    link: 'https://www.youtube.com/watch?v=Z__rKq_qEOE',
    category: '',
    title: 'Creative warping'
  },
  {
    src: 'img/teasers/onething/One_Thing_Lorena_de_Tena_Title.jpg',
    link: 'https://www.youtube.com/watch?v=gGS2QH4PJjI',
    category: '',
    title: 'Jamming with mutes'
  },
]

const LoopEventsData = [
  {
    src: 'img/teasers/loopevents/ABL280_ScreenIsYourStage.jpg',
    link: '#',
    category: '',
    title: 'Rachel K Collier: Making A Musical Life Online'
  },
  {
    src: 'img/teasers/loopevents/ABL279_Kimbra4_stHWO8Y.jpg',
    link: '#',
    category: '',
    title: 'Kimbra: Expansion, Contraction, Improvisation'
  },
  {
    src: 'img/teasers/loopevents/BL_Lafawndah1.jpg',
    link: '#',
    category: '',
    title: 'Lafawndah: Closing the Gap Between Artist and Audience'
  },
]

const TeaserItem = ({ src, link, category, title }) => (
  <div className="md:m-10 m-6 md:w-fit w-5/12">
    <a href={link}>
      <img className="mb-3" src={src} />
      <div>
        <p className="mb-1 text-[#6dcbff] text-sm font-medium" >{category}</p>
        <h2 className="font-semibold">{title}</h2>
      </div>
    </a>
  </div>
)

const Teasers = () => {
  return (
    <div>
      <div className="px-10 relative">
        <h2 className="text-4xl font-semibold md:ml-10 ml-6">In focus: sound design</h2>
        <div className="flex flex-row my-5 md:flex-nowrap flex-wrap">
          {InFocusData.map((item) => (
            <TeaserItem src={item.src} link={item.link} category={item.category} title={item.title} />
          ))}
        </div>
      </div>

      <div className="px-10 relative">
        <h2 className="text-4xl font-semibold md:ml-10 ml-6">One Thing videos: monthly creative tips</h2>
        <div className="md-max:hidden absolute top-3 right-20 flex flex-row">
          <a className="text-xl font-semibold ml-5 text-[#0000ff]" href="#">
            <p className="after:content-['>'] after:ml-0.5">See all videos</p>
          </a>
        </div>
        <div className="flex flex-row my-5 md:flex-nowrap flex-wrap">
          {OneThingData.map((item) => (
            <TeaserItem src={item.src} link={item.link} category={item.category} title={item.title} />
          ))}
        </div>
        <div className="md:hidden text-center mb-10">
          <a className="text-[#0000ff] font-semibold text-sm after:content-['>'] after:ml-0.5" href="#">See all videos</a>
        </div>
      </div>

      <div className="px-10 relative">
        <h2 className="text-4xl font-semibold md:ml-10 ml-6">Videos and features from Loop events</h2>
        <div className="md-max:hidden absolute top-3 right-20 flex flex-row">
          <a className="text-xl font-semibold ml-5 text-[#0000ff]" href="#">
            <p className="after:content-['>'] after:ml-0.5">See more</p>
          </a>
        </div>
        <div className="flex flex-row my-5 md:flex-nowrap flex-wrap">
          {LoopEventsData.map((item) => (
            <TeaserItem src={item.src} link={item.link} category={item.category} title={item.title} />
          ))}
        </div>
        <div className="md:hidden text-center mb-10">
          <a className="text-[#0000ff] font-semibold text-sm after:content-['>'] after:ml-0.5" href="#">See more</a>
        </div>
      </div>
    </div>
  )
}

export default Teasers