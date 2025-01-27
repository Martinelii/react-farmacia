function Navbar(){
    return(
        <>
            <div className="w-full flex justify-center py-4 bg-slate-600 text-white">

                <div className="container flex justify-between text-lg">
                    Farmacia

                    <div className="flex gap-4">
                        Produtos
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar