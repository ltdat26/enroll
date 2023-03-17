import Category from "../category"

const JSBlogData = [
  {
    img: '/img/jsblog/thumb_Blog_Image.jpg.600x340_q85_crop_upscale.jpg',
    link: '#',
    category: 'Loop',
    title: 'Get Together: The Changing Forms of Musical Collaboration'
  },
  {
    img: '/img/jsblog/thumb_Blog_Hero_Image_800x400.jpg.600x340_q85_crop_upscale.jpg',
    link: '#',
    category: 'Loop',
    title: 'Loop: Five Perspectives on Working with Environmental Noise'
  },
  {
    img: '/img/jsblog/thumb_1_Blog_Loop_Session_Grand_River_Blog.jpg.600x340_q85_crop_upscale.jpg',
    link: '#',
    category: 'Loop',
    title: 'Loop Session: In the Studio with Grand River'
  }
]


const JSBlog = () => {
  return (
    <div className="px-10 relative md:mt-0 mt-10">
      <h2 className="md:text-4xl text-2xl font-semibold md:ml-10 ml-6">The latest from Ableton</h2>
      <div className="md-max:hidden absolute top-3 right-20 flex flex-row">
        {Category.map((item) => (
          <a className="text-xl font-semibold ml-5 text-[#0000ff]" href={item.link}>
            <p>{item.category}</p>
          </a>
        ))}
      </div>
      <div className="flex flex-row my-5 md:flex-nowrap flex-wrap">
        {JSBlogData.map((item) => (
          <div className="md:m-10 m-6 md:w-fit w-5/12">
            <a href={item.link}>
              <img className="mb-3" src={item.img} />
              <div>
                <p className="mb-1 text-[#6dcbff] text-sm font-medium" >{item.category}</p>
                <h2 className="font-semibold">{item.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="md:hidden text-center mb-10">
        <a className="text-[#0000ff] font-semibold text-sm after:content-['>'] after:ml-0.5" href="#">See all posts</a>
      </div>
    </div>
  )
}

export default JSBlog