import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-slate-600 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={38} weight='bold' />
                        <InstagramLogo size={38} weight='bold' />
                        <FacebookLogo size={38} weight='bold' />
                    </div>
                    <p className='text-sm font-regular'>
                            Farma 77 | Copyright: {data}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer