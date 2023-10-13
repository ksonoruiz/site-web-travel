import { useState } from 'react'
import { MagnifyingGlassIcon, MoonIcon, UserIcon } from '@heroicons/react/24/solid'

import './App.css'
import rectangle_1 from '/images/rectangle_1.png'
import rectangle_2 from '/images/rectangle_2.png'
import rectangle_3 from '/images/rectangle_3.png'
import rectangle_4 from '/images/rectangle_4.png'
import rectangle_5 from '/images/rectangle_5.png'


function App() {
  const [active, setActive] = useState(false)

  const viewInDark = () => {
    setActive(!active)
  }

  return (
    <>
      {/* Navbar */}
      <header className={`hidden w-full py-8 md:block ${active?'dark:bg-gray-900':''}`}>
        <nav className='wrapper flex justify-between'>
          <h2 className='text-primary font-bold text-xl'>Platzi travel</h2>
          <div>
            <ul className='flex gap-8'>
              <li className='text-primary font-bold text-base'>Locations</li>
              <li className='text-primary font-bold text-base'>Stays</li>
              <li className='text-primary font-bold text-base'>FAQS</li>
              <li className='text-primary font-bold text-base'>About Us</li>
            </ul>
          </div>
          <div className='flex gap-6'>
            <MagnifyingGlassIcon className={`h-6 w-6 text-black/70 cursor-pointer ${active?'dark:text-white/60':''}`} />
            <MoonIcon className='h-6 w-6 text-primary cursor-pointer' onClick={viewInDark}/>
            <UserIcon className={`h-6 w-6 text-black/70 cursor-pointer ${active?'dark:text-white/60':''}`} />
          </div>
        </nav>
      </header>

      <main className='font-Montserrat'>
        {/* Banner */}
        <section className='w-full bg-banner bg-cover bg-center bg-no-repeat py-8' id='home'>
          <div className='wrapper grid gap-8 px-4 space-y-20 min-h-[300px] md:grid-cols-2 md:space-y-0 md:min-h-[600px]'>
            <input type='search' name='' id='' placeholder='San Francisco'
              className='outline-none py-3 px-5 rounded-full transition-all duration-300 focus-within:shadow-sm focus:ring-2 lg:hidden'/>
            <article className='text-center space-y-6 md:text-left md:space-y-8 md:pr-10'>
              <h1 className='hidden md:block text-4xl font-bold'>Find More Locations like this</h1>
              <button className='bg-white text-primary text-basic rounded-full font-bold py-3 px-10 shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:translate-y-1'>
                Explore more</button>
            </article>
          </div>
        </section>
        {/* Recomendadas */}
        <section className={`w-full py-10 px-4 ${active?'dark:bg-gray-900':''}`} id='recomendadas'>
          <div className='wrapper'>
            <h2 className='text-3xl text-primary font-medium mb-6'>Our Recomendations</h2>
          </div>
          <div className='wrapper'>
            <div className='flex w-auto overflow-x-auto overscroll-x-contain space-x-4 py-4 md:overflow-hidden'>
                <div className='card'>
                  <div className='card-image'>
                    <img src={rectangle_1} 
                      className='h-full rounded-t-lg'/>
                  </div>
                  <div className='px-2 pt-4 pb-8 bg-secondary rounded-b-lg h-2/5'>
                    <h4 className='font-medium text-white mb-1 text-lg'>Norway</h4>
                    <p className='text-white font-medium text-sm'>Beatiful landscraps</p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-image'>
                    <img src={rectangle_2}
                      className='h-full rounded-t-lg'/>
                  </div>
                  <div className='px-2 pt-4 pb-8 bg-white rounded-b-lg h-2/5'>
                    <h4 className='font-medium text-terceary mb-1 text-lg'>New York</h4>
                    <p className='text-terceary font-medium text-sm'>Concrete jungle</p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-image'>
                    <img src={rectangle_3} 
                      className='h-full rounded-t-lg'/>
                  </div>
                  <div className='px-2 pt-4 pb-8 bg-secondary rounded-b-lg h-2/5'>
                    <h4 className='font-medium text-white mb-1 text-lg'>Yosemite</h4>
                    <p className='text-white font-medium text-sm'>A break from the world</p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-image'>
                    <img src={rectangle_4} 
                      className='h-full rounded-t-lg'/>
                  </div>
                  <div className='px-2 pt-4 pb-8 bg-white rounded-b-lg h-2/5'>
                    <h4 className='font-medium text-terceary mb-1 text-lg'>Seattle</h4>
                    <p className='text-terceary font-medium text-sm'>Big City</p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-image'>
                    <img src={rectangle_5} 
                      className='h-full rounded-t-lg'/>
                  </div>
                  <div className='px-2 pt-4 pb-8 bg-secondary rounded-b-lg h-2/5'>
                    <h4 className='font-medium text-white mb-1 text-lg'>Switzerland</h4>
                    <p className='text-white font-medium text-sm'>Big City</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        {/* Trending Stays */}
        <section className={`w-full py-10 px-4 ${active?'dark:bg-gray-900':''}`} id='rentas_destacadas'>
          <div className='wrapper'>
            <h2 className='text-3xl text-primary font-medium mb-10'>Trending Stays</h2>
          </div>
          <div className='wrapper md:grid md:gap-8 md:grid-cols-2'>
            <div className='h-96 bg-chicago bg-cover rounded-xl px-5 pt-10 mb-4 md:text-end'>
              <h4 className='text-white font-semibold text-2xl mb-2'>Chicago</h4>
              <p className='text-white font-light text-sm mr-12 md:mr-0'>4 rooms, 3 bathrooms, kitchen and private pool.</p>
            </div>
            <div className='h-96 bg-new_york bg-cover rounded-xl px-5 pt-10 mb-4 md:text-end'>
              <h4 className='text-white font-semibold text-2xl mb-2'>New York</h4>
              <p className='text-white font-light text-sm mr-12 md:mr-0'>2 rooms, 2 bathrooms Kitchen and private pool</p>
            </div>
          </div>
        </section>
        {/* FAQs */}
        <section className={`w-full py-10 px-4 ${active?'dark:bg-gray-900':''}`} id='faqs'>
          <div className='wrapper'>
            <h2 className='text-3xl text-primary font-medium mb-6'>FAQs</h2>
          </div>
          <div className='wrapper md:grid md:gap-8 md:grid-cols-2'>
            <div className='mb-4'>
              <h4 className='text-lg text-primary font-medium'>Payment Methods</h4>
              <p className={`text-sm text-black/80 mt-2 ${active?'dark:text-white/90':''}`}>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, MasterCard, American Express, Paypal and Binance.</p>
            </div>
            <div className='mb-4'>
              <h4 className='text-lg text-primary font-medium'>Payment Methods</h4>
              <p className={`text-sm text-black/80 mt-2 ${active?'dark:text-white/90':''}`}>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, MasterCard, American Express, Paypal and Binance.</p>
            </div>
            <div className='mb-4'>
              <h4 className='text-lg text-primary font-medium'>Payment Methods</h4>
              <p className={`text-sm text-black/80 mt-2 ${active?'dark:text-white/90':''}`}>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, MasterCard, American Express, Paypal and Binance.</p>
            </div>
            <div className='mb-4'>
              <h4 className='text-lg text-primary font-medium'>Payment Methods</h4>
              <p className={`text-sm text-black/80 mt-2 ${active?'dark:text-white/90':''}`}>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, MasterCard, American Express, Paypal and Binance.</p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className='w-full bg-gray-900 py-10 px-4'>
        <div className='wrapper md:grid md:gap-8 md:grid-cols-1'>
          <h4 className='text-xl text-primary mb-2'>About Us</h4>
          <ul className='space-y-2'>
            <li className='text-white/60 font-normal'>
              <a href='#'>Investors</a>
            </li>
            <li className='text-white/60 font-normal'>
              <a href='#'>Jobs</a>
            </li>
            <li className='text-white/60 font-normal'>
              <a href='#'>Privacy policy</a>
            </li>
            <li className='text-white/60 font-normal'>
              <a href='#'>Terms and Conditions</a>
            </li>
            <li className='text-white/60 font-normal'>
              <a href='#'>Platzi Travel, inc</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
