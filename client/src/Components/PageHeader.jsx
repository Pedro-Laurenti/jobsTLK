import React from 'react'

const PageHeader = ({title, path}) => {
    return (
        <div className=' py-24 mt-3 bg-slate-50 rounded-2xl flex items-center justify-center'>
            <div>
                <h2 className=' text-3xl text-appBlue-500 font-medium mb-1 text-center'>{title}</h2>
                <p className='text-sm text-center'><a href="/">Início</a> / {path}</p>
            </div>
        </div>
    )
}

export default PageHeader