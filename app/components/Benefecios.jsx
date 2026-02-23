import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Beneficios() {
    const cardsData = [
        {
            titulo: "PROBLEMA",
            icone: "/problemaicon.svg",
            alt: "Icone Problema",
            frase: "Muitos pedidos são negados não por falta de direito, mas por falhas no processo.",
            itens: [
                "Pedido feito de forma incorreta",
                "Laudos médicos incompletos ou genéricos",
                "Perícia mal conduzida",
                "Falta de orientação jurídica",
                "Erros automáticos do sistema"
            ],
        },
        {
            titulo: "SOLUÇÃO",
            icone: "/solucaoicon.svg",
            alt: "Icone Solução",
            frase: "O que muda quando o pedido é feito do jeito certo!",
            itens: [
                "Reduz o risco de negativa",
                "Aumenta as chances na perícia médica",
                "Busca revisão ou recurso quando necessário",
                "Garante o valor correto do benefício",
                "Tem segurança jurídica em todo o processo"
            ],
        },
        {
            titulo: "PARA QUEM É INDICADO",
            icone: "/paraquemicon.svg",
            alt: "Icone Para Quem",
            frase: "Este atendimento é indicado para você que:",
            itens: [
                "Está afastado do trabalho por doença ou acidente",
                "Teve o benefício por incapacidade negado",
                "Recebeu alta, mas não tem condições de voltar",
                "Está sem renda e aguardando resposta do INSS",
                "Já contribuiu e tem dúvidas sobre seus direitos",
                "Não sabe se os laudos são suficientes"
            ],
        }
    ];

    return (
        <section className="flex flex-col p-10 md:p-20 items-center justify-center text-center">
            <h2 className="text-[1.6rem] md:text-3xl">Por que tantos <span className="text-[#1B4960]">benefícios por incapacidade</span> são negados?</h2>
            <div className='flex flex-col lg:flex-row md:flex-3  md:gap-5 gap-10 mt-5'>

                {/*Card 1*/}
                {cardsData.map((cardsData, index) => (
                    <article key={index} className='flex flex-col w-full lg:flex-1/3 items-center'>
                        <h3 className='text-2xl'>{cardsData.titulo}</h3>
                        <Image
                            src={cardsData.icone}
                            className='z-10 relative'
                            alt={cardsData.alt}
                            width={90}
                            height={90}
                        />
                        <div className='flex flex-col border-2 w-full h-full lg:min-h-130 justify-center border-black rounded-4xl -mt-12 z-0 py-6 md:py-10 px-5 gap-15 bg-linear-to-b from-white via-[#d1e5f0] to-[#8ab5cf]'>
                            <p className='font-medium mt-5 text-2xl'>{cardsData.frase}</p>
                            <ul className='text-xl md:text-2xl flex flex-col gap-5'>
                                {cardsData.itens.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
            <button className="px-6 py-3 mt-10 bg-[#1B4960] text-white text-xl rounded-sm flex flex-row gap-1 justify-center"><FaWhatsapp size={28} />Fale com um especialista!</button>
        </section >
    );
}