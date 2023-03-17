import Category from "../category"

const Categories = () => {
  return (
    <div className="flex flex-row justify-center items-center md:text-lg text-sm font-semibold bg-[#eee] h-28">
      <p>More: </p>
      {Category.map((item) => (
        <a className="ml-5 text-[#0000ff]" href={item.link}>
          <p>{item.category}</p>
        </a>
      ))}
    </div>
  )
}

export default Categories