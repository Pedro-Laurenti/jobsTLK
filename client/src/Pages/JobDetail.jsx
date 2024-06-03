import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../Components/PageHeader';

const JobDetail = () => {
    const {id} = useParams();
    const [job,
        setJob] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const {value: url} = await Swal.fire({input: "url", inputLabel: "URL address", inputPlaceholder: "Enter the URL"});
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    }

    return (
        <div className='max-w-screen mx-auto xl:px-24 px-4'>
            <div className='pt-40 px-4 lg:px-16'>
            <PageHeader title={"Detalhes da vaga"} path={"detalhes"} />
            <div className='pt-10'>
                <h2>Id da vaga: {id}</h2>
                <h1 className='text-5xl font-bold text-primary mb-4'>{job.jobTitle}</h1>
                <button className='bg-appBlue-500 px-8 py-2 text-white' onClick={handleApply}>Candidatar-se</button>
            </div>
            </div>
        </div>

    )
}

export default JobDetail