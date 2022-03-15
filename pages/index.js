import Head from 'next/head'
import Image from 'next/image'
import themes from '../styles/themes'
import Navbar from '../components/navbar/Navbar';
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
     </>
  )
}
