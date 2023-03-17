import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './components/homepage'
import JSBlog from './components/jsblog'
import Teasers from './components/teasers'
import Categories from './components/categories'

function App() {
  return (
    <div className='bg-[#F3F3F3] relative'>
      <div className='max-w-screen-2xl flex justify-center m-auto bg-white'>
        <div className='w-full'>
          <Navbar />
          <main>
            <HomePage />
            <JSBlog />
            <Teasers />
            <Categories />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
