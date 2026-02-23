import Image from "next/image";

export default function Processo() {
    const passos = [
        { id: "01", titulo: "Você entra em contato", desc: "Primeiro passo simples e direto para entender sua situação." },
        { id: "02", titulo: "Analisamos sua situação e documentos", desc: "Avaliação cuidadosa do seu histórico, laudos e contribuições." },
        { id: "03", titulo: "Explicamos se há direito e qual o melhor caminho", desc: "Você entende suas chances e as opções possíveis, sem promessas." },
        { id: "04", titulo: "Orientamos sobre perícia, documentos e prazos", desc: "Tudo explicado de forma clara para evitar erros e atrasos." },
        { id: "05", titulo: "Atuamos com total transparência", desc: "Acompanhamento responsável, com informações claras em cada etapa." },
    ];

    return (
        <section className="relative text-white bg-[#1B4960] p-20 flex flex-col gap-20 overflow-hidden">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-4xl">Como funciona o processo de análise</h2>
                <Image src="/LogoBranca.png" alt="Icone" width={100} height={100} />
            </div>

            <div className="flex flex-row w-full justify-between items-start">
                
                {passos.map((passo, index) => (
                    <article key={index} className="flex flex-col items-center flex-1 text-center relative">
                       
                        <span className="opacity-50 font-bold text-[10rem] leading-none">
                            {passo.id}
                        </span>

                        <div className="relative w-full flex items-center justify-center my-10">
                           
                            {index !== passos.length - 1 && (
                                <div className="absolute left-1/2 w-full border-t-2 border-white z-00" />
                            )}

                            <span className="w-5 h-5 bg-linear-to-b from-[#1C749F] to-[#0A2A39] rounded-full z-10" />
                        </div>

                        <h3 className="text-2xl font-semibold">{passo.titulo}</h3>
                        <p className="text-[1.3rem] opacity-80 mt-2 px-4">
                            {passo.desc}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}