export default function ProcessoMobile() {
    return (
        <section className="w-full p-10  bg-[#1B4960] items-center text-white flex flex-col gap-10">
            <h2 className="text-center text-3xl">Como funciona o processo de análise</h2>

            <div className="flex flex-col gap-10">

                {/*01*/}
                <article className="flex flex-col gap-3">
                    <span className="opacity-50 font-bold text-8xl">01</span>
                    <h3 className="text-2xl font-semibold">Você entra em contato</h3>
                    <p className="text-[1.3rem]">Primeiro passo simples e direto para entender sua situação.</p>
                </article>

                {/*02*/}
                <article className="flex flex-col gap-3">
                    <span className="opacity-50 font-bold text-8xl">02</span>
                    <h3 className="text-2xl font-semibold">Analisamos sua situação e documentos</h3>
                    <p className="text-[1.3rem]">Avaliação cuidadosa do seu histórico, laudos e contribuições.</p>
                </article>

                {/*03*/}
                <article className="flex flex-col gap-3">
                    <span className="opacity-50 font-bold text-8xl">03</span>
                    <h3 className="text-2xl font-semibold">Explicamos se há direito e qual o melhor caminho</h3>
                    <p className="text-[1.3rem]">Você entende suas chances e as opções possíveis, sem promessas.</p>
                </article>

                {/*04*/}
                <article className="flex flex-col gap-3">
                    <span className="opacity-50 font-bold text-8xl">04</span>
                    <h3 className="text-2xl font-semibold">Orientamos sobre perícia, documentos e prazos</h3>
                    <p className="text-[1.3rem]">Tudo explicado de forma clara para evitar erros e atrasos.</p>
                </article>

                {/*05*/}
                <article className="flex flex-col gap-3">
                    <span className="opacity-50 font-bold text-8xl">05</span>
                    <h3 className="text-2xl font-semibold">Atuamos com total transparência</h3>
                    <p className="text-[1.3rem]">Acompanhamento responsável, com informações claras em cada etapa.</p>
                </article>
                
            </div>
        </section>
    );
}