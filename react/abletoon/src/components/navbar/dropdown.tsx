import React from "react";

const DropdownMenuData = [
  {
    link: '#',
    title: 'Live'
  },
  {
    link: '#',
    title: 'Push'
  },
  {
    link: '#',
    title: 'Link'
  },
  {
    link: '#',
    title: 'Shop'
  },
  {
    link: '#',
    title: 'Packs'
  },
  {
    link: '#',
    title: 'Help'
  },
]

const DropdownMoreOnData = [
  {
    link: '#',
    title: 'Blog'
  },
  {
    link: '#',
    title: 'Ableton for the Classroom'
  },
  {
    link: '#',
    title: 'Certified Training'
  },
  {
    link: '#',
    title: 'About Ableton'
  },
  {
    link: '#',
    title: 'Jobs'
  },
  {
    link: '#',
    title: 'Apprenticeships'
  },
  {
    link: '#',
    title: ''
  },
]

const DropdownMoreFromData = [
  {
    link: '#',
    title: 'Loop',
    text: "Watch Talks, Performances and Features from Ableton's Summit for Music Makers"
  },
  {
    link: '#',
    title: 'Learning Music',
    text: 'Learn the fundamentals of music making right in your browser.'
  },
  {
    link: '#',
    title: 'Learning Synths',
    text: 'Get started with synthesis using a web-based synth and accompanying lessons.'
  },
  {
    link: '#',
    title: 'Making Music',
    text: 'Some tips from 74 Creative Strategies for Electronic Producers.'
  },
]

export default function Dropdown({ }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ml-4">
          <nav className="flex flex-wrap items-center justify-between"
            onClick={() => setMenuOpen(!menuOpen)}>
            <div className="">
              <div className="text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none cursor-pointer
              ">
                <i className="fas fa-bars font-semibold text-lg" style={{ zIndex: 30 }}>Menu v</i>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex ease-in-out duration-300" : " hidden")
                }
                id="example-navbar-info"
                style={{ zIndex: 20 }}
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto
                absolute top-0 left-0 bg-[#0000ff]
                w-full h-full pt-16
                ">
                  {DropdownMenuData.map((item) => (
                    <li className="nav-item w-fit">
                      <a className="px-3 py-4 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                        href={item.link}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                  <li className="nav-item w-fit pb-3">
                    <a className="px-3 py-3 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                      href='#'>
                      Try Live for free
                    </a>
                    <a className="px-3 py-2 flex items-center text-xs font-medium leading-snug text-white hover:opacity-75"
                      href='#'>
                      Log in or register
                    </a>
                  </li>
                  <li className="nav-item w-fit pb-3">
                    <a className="px-3 py-2 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                      href='#'>
                      More on Ableton.com:
                    </a>
                    <ul className="flex flex-col">
                      {DropdownMoreOnData.map((item) => (
                        <li className="nav-item w-fit">
                          <a className="px-3 py-2 flex items-center text-xs font-medium leading-snug text-white hover:opacity-75"
                            href={item.link}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item pb-3">
                    <p className="px-3 py-2 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                    >
                      More from Ableton.com:
                    </p>
                    <ul className="flex flex-row overflow-x-auto pl-3">
                      {DropdownMoreFromData.map((item) => (
                        <li className="nav-item w-fit">
                          <a className="mr-6 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                            href={item.link}>
                            <div className="flex flex-col align-top leading-6 w-48">
                              <h5 className="font-semibold">{item.title}</h5>
                              <p>{item.text}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
