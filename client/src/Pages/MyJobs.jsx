import React, { useEffect, useState } from 'react'

const MyJobs = () => {
    const email = "pedrolaumatos@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/myJobs/pedrolaumatos@gmail.com`)
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        });
    }, [])
    return (
        <div className='max-w-screen mx-auto xl:px-24 px-4'>
            <div className='bg-appWhite-300 pt-40 px-4 lg:px-16'>
                <div className='my-jobs-container'>
                    <h1>Minhas vagas</h1>
                    <div>
                        <input type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'/>
                        <button className='bg-appBlue-500 text-white font-semibold '></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyJobs