function Home() {
    return (
        <>
            <div className="bg-slate-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farma 77
                        </h2>
                        <p className='text-xl'>
                            Os melhores preços aqui!!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Categoria
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img 
                            src="https://i.imgur.com/UAS5Pe9.png" 
                            alt="Imagem da Página Home" 
                            width="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home