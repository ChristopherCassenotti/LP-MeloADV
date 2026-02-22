import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Beneficios() {
    return (
        <section className="flex flex-col p-10 md:p-20 items-center justify-center text-center">
            <h2 className="text-[1.6rem] md:text-3xl">Por que tantos <span className="text-[#1B4960]">benefícios por incapacidade</span> são negados?</h2>
            <div className='flex flex-col lg:flex-row md:flex-3  md:gap-5 gap-10 mt-5'>

                {/*Card 1*/}
                <article className='flex flex-col w-full lg:flex-1/3 items-center'>
                    <h3 className='text-2xl'>PROBLEMA</h3>
                    <Image
                        src="/problemaicon.svg"
                        className='z-10 relative'
                        alt="Icone Problema"
                        width={90}
                        height={90}
                    />
                    <div className='flex flex-col border-2 w-full h-full lg:min-h-130 justify-center border-black rounded-4xl -mt-12 z-0 py-6 md:py-10 px-5 gap-15 bg-linear-to-b from-white via-[#d1e5f0] to-[#8ab5cf]'>
                        <p className='font-medium mt-5 text-2xl'>Muitos pedidos são negados não por falta de direito, mas por falhas no processo.</p>
                        <ul className='text-xl md:text-2xl flex flex-col gap-5'>
                            <li>Pedido feito de forma incorreta</li>
                            <li>Laudos médicos incompletos ou genéricos</li>
                            <li>Perícia mal conduzida</li>
                            <li>Falta de orientação jurídica</li>
                            <li>Erros automáticos do sistema</li>
                        </ul>
                    </div>
                </article>

                {/*Card 2*/}
                <article className='flex flex-col w-full lg:flex-1/3 items-center'>
                    <h3 className='text-2xl'>SOLUÇÃO</h3>
                    <Image
                        src="/solucaoicon.svg"
                        className='z-10 relative'
                        alt="Icone Solução"
                        width={90}
                        height={90}
                    />
                    <div className='flex flex-col border-2 w-full h-full border-black lg:min-h-130 justify-center rounded-4xl -mt-12 z-0 py-6 md:py-10 px-5 gap-15 bg-linear-to-b from-white via-[#d1e5f0] to-[#8ab5cf]'>
                        <p className='font-medium mt-5 text-2xl'>O que muda quando o pedido é feito do jeito certo!</p>
                        <ul className='text-xl md:text-2xl flex flex-col gap-5'>
                            <li>Reduz o risco de negativa</li>
                            <li>Aumenta as chances na perícia médica</li>
                            <li>Busca revisão ou recurso quando necessário</li>
                            <li>Garante o valor correto do benefício</li>
                            <li>Tem segurança jurídica em todo o processo</li>
                        </ul>
                    </div>
                </article>

                {/*Card 3*/}
                <article className='flex flex-col w-full md:flex-1/3 items-center'>
                    <h3 className='text-2xl'>PARA QUEM É INDICADO</h3>
                    <Image
                        src="/paraquemicon.svg"
                        className='z-10 relative'
                        alt="Icone Para Quem"
                        width={90}
                        height={90}
                    />
                    <div className='flex flex-col border-2 w-full h-full lg:min-h-130 border-black rounded-4xl -mt-12 z-0 py-6 md:py-10 px-5 gap-5 justify-center bg-linear-to-b from-white via-[#d1e5f0] to-[#8ab5cf]'>
                        <p className='font-medium mt-5 text-2xl'>Este atendimento é indicado para você que:</p>
                        <ul className='text-xl md:text-2xl flex flex-col gap-5'>
                            <li>Está afastado do trabalho por doença ou acidente</li>
                            <li>Teve o benefício por incapacidade negado</li>
                            <li>Recebeu alta, mas não tem condições de voltar</li>
                            <li>Está sem renda e aguardando resposta do INSS</li>
                            <li>Já contribuiu e tem dúvidas sobre seus direitos</li>
                            <li>Não sabe se os laudos são suficientes</li>
                        </ul>
                    </div>
                </article>
            </div>
            <button className="px-6 py-3 mt-10 bg-[#1B4960] text-white text-xl rounded-sm flex flex-row gap-1 justify-center"><FaWhatsapp size={28} />Fale com um especialista!</button>
        </section>
    );
}