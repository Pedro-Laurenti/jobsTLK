import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const Newsletter = () => {
    return (
        <div>
            <div className='mb-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Novas vagas
                </h3>
                <p className='text-primary/75 text-base mb-4'>Receba novas vagas da nossa rede diretamente pelo seu e-mail.</p>

                <div className='w-full space-y-4'>
                    <input type="text" name='email' id='email' placeholder='Seu melhor email' className='w-full block py-2 pl-3 border focus:outline-none'/>
                    <input type="submit" value={"Enviar"} className='w-full block py-2 pl-3 border focus:outline-none bg-appBlue-500 rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>

            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />
                    Seja notificado rapidamente
                </h3> 
                <p className='text-primary/75 text-base mb-4'>Receba novas vagas da nossa rede diretamente pelo seu e-mail.</p>

                <div className='w-full space-y-4'>
                    <input type="submit" value={"Enviar curriculum"} className='w-full block py-2 pl-3 border focus:outline-none bg-appBlue-500 rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter