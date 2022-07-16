import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import TheHome from '../components/TheHome'
import Section2 from '../components/Section2'
import Section6 from '../components/Section6'
import Section5 from '../components/Section5/Section5'
import Section7 from '../components/Section7'
import Section12 from '../components/Section12'
import Footer from '../components/Footer/Footer'
import ChipsSection from '../components/Chips/ChipsSection'
import CategoriesSection from '../components/CategoriesRange/CategoriesSection'
import GetAppSection from '../components/GetAppSection'
import MemberShipSection from '../components/MemberShip/MembershipSection'
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection'

const Home: NextPage = () => {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-blue-300">
      <Head>
        <title>Landing page</title>
      </Head>
      {/* <Footer /> */}
    <Header /> 
    <TheHome />
    <Section2 />
   
    <HowItWorksSection />
 <Section5 />
 <Section6 />

<Section7 />
   
   <MemberShipSection />
    <CategoriesSection />
    
    
    <ChipsSection /><GetAppSection />
  
    <Section12 />
    <Footer />
    
    </div>
  )
}

export default Home
