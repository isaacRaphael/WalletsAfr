import Head from 'next/head'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import tamebg from './assets/tamebg.png'
import haze from './assets/haze.png'
import Zoom from 'react-reveal/Zoom';
import CardHero from './Components/CardHero'
import SmartBanking from './Components/SmartBanking'
import PositiveBanking from './Components/PositiveBanking'
import CustomersSay from './Components/CustomersSay'
import OurBlog from './Components/OurBlog'
import Footer from './Components/Footer'


export default function Home() {
  return (
    <div className="w-full relative">
      <Head>
        <title>Wallets Africa</title>
        <meta name="description" content="One digital wallet, Multi Currency Cards..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='w-full' style={
        {
          backgroundImage: `url(${haze.src})`,
          backgroundPosition : 'left',
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'contain',
          width: '100%',
        }}>
        
        <Hero />
        <img className='absolute top-0 left-0 z-50' src="./haze.png" alt="" />
      </div>
      <div className='w-full h-[1000px] md:h-[700px]'  style={
        {
          backgroundImage: `url(${tamebg.src})`,
          backgroundPosition : 'cover',
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover',
          width: '100%',
        }
      }>
      <Zoom>
        <h1 className='text-center text-[50px] lg:text-[30px] o-text leading-[3.6rem] lg:leading-[2.6rem] pt-[140px] font-medium'>Designed for swift payments, transparency,<br /> and instant settlement.</h1>
      </Zoom>
      </div>
      <CardHero />
      <SmartBanking />
      <PositiveBanking />
      <CustomersSay />
      <OurBlog />
      <Footer />
      
    </div>
  )
}
