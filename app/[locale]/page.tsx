'use client';
import Header from '@/src/components/Header';
import Introduce from '@/src/components/Introduce';
import Portfolio from '@/src/components/Portfolio';
import Testimonial from '@/src/components/Testimonial';
import Service from '@/src/components/Service';
import Strengths from '@/src/components/Strengths';
import Description from '@/src/components/Description';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import Investors from '@/src/components/Investors';
import Clients from '@/src/components/Clients';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-inter bg-white overflow-x-hidden">
      <Header />
      <Introduce />
      <div
        className="flex flex-col w-full gap-2 md:gap-4 bg-[#E0E0E0] overflow-x-hidden"
        style={{ backgroundColor: '#E0E0E0' }}>
        <Description />
        <Strengths />
        <Testimonial />
        <Service />
        <Portfolio />
      </div>
      <Clients />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}
