export default function ProcessoMobile() {
    const passo = [
        { id: "01", titulo: "Você entra em contato", desc: "Primeiro passo simples e direto para entender sua situação." },
        { id: "02", titulo: "Analisamos sua situação e documentos", desc: "Avaliação cuidadosa do seu histórico, laudos e contribuições." },
        { id: "03", titulo: "Explicamos se há direito e qual o melhor caminho", desc: "Você entende suas chances e as opções possíveis, sem promessas." },
        { id: "04", titulo: "Orientamos sobre perícia, documentos e prazos", desc: "Tudo explicado de forma clara para evitar erros e atrasos." },
        { id: "05", titulo: "Atuamos com total transparência", desc: "Acompanhamento responsável, com informações claras em cada etapa." },
    ];

    return (
        <section className="w-full p-10  bg-[#1B4960] items-center text-white flex flex-col gap-10">
            <h2 className="text-center text-3xl">Como funciona o processo de análise</h2>

            <div className="flex flex-col gap-10">

                {/*01*/}
                {passo.map((passo, index) => (
                    <article key={index} className="flex flex-col gap-3">
                        <span className="opacity-50 font-bold text-8xl">{passo.id}</span>
                        <h3 className="text-2xl font-semibold">{passo.titulo}</h3>
                        <p className="text-[1.3rem]">{passo.desc}</p>
                    </article>
                    ))
                };


            </div>
        </section>
    );
}