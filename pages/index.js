import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HeroSection from '../containers/home/HeroSection';
import Shortner from '../containers/home/Shortner';
import Features from '../containers/home/Features';
import Cta from '../containers/home/Cta';
export default function Home() {
  return (
    <>
     <Navbar />
     <HeroSection />
     <Shortner />
     <Features />
     <Cta />
     <Footer />
     </>
  )
}
