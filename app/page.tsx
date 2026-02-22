"use client";
import 'animate.css';
import Hero from './components/Hero';
import Beneficios from './components/Benefecios';
import ProcessoMobile from './components/ProcessoMobile';
import ProcessoWeb from './components/ProcessoWeb';



export default function Home() {

  return (
    <main>
      <Hero />
      <Beneficios />
      <div className='block lg:hidden'><ProcessoMobile /></div>
      <div className='hidden lg:block'><ProcessoWeb /></div>
    </main>
  );
}
