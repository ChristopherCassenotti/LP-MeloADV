"use client";
import { FaWhatsapp } from 'react-icons/fa';
import 'animate.css';

export default function Hero() {
  return (
    <section className="flex flex-col min-h-screen w-full justify-center items-center gap-10 bg-[url('/background.png')] p-10 sm:md:lg:p-20 bg-center bg-cover text-white">
      <img src="/Logo.png" alt="" className="w-2xs animate__animated animate__slow animate__fadeIn" />
      <h1 className="text-center text-3xl sm:md:lg:text-5xl">
        Você pode ter direito a um <span className="text-[#FFE8B6]">benefício do INSS.</span>
        <br /> Mesmo que ele já tenha sido negado!
      </h1>
      <p className="text-xl sm:md:lg:text-2xl text-center sm:md:lg:w-[60%]">
        Se você está doente, afastado do trabalho ou sem condições de exercer sua profissão, o INSS pode estar deixando de pagar um benefício que é seu por lei.
      </p>
      <button className="px-6 py-3 bg-[#977D47] rounded-sm flex flex-row gap-1 justify-center"><FaWhatsapp size={24} />Solicite sua análise agora</button>
      <div className="flex flex-col items-center text-center gap-2">
        <span>Auxílio por incapacidade temporária</span>
        <hr className="w-30 border-[#FFE8B6]" />
        <span>Aposentadoria por incapacidade permanente</span>
        <hr className="w-30 border-[#FFE8B6]" />
        <span>Revisões e recursos</span>
      </div>
    </section>
  );
}
