import React, {useState,useEffect} from 'react'
import PageHeader from '../Components/PageHeader'

const SalaryPage = () => {

    const[searchText, setSearchText] = useState("");
    const [salary, setSalary] = useState([]);

    useEffect(() => {
        fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
    }, [searchText])

    const handleSearch = () => {
        const filter = jobs.filter(
            (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
        setSalary(filter)
    }
    

    return (
        <div className='max-w-screen mx-auto xl:px-24 px-4'>
            <div className='bg-appWhite-300 pt-40 px-4 lg:px-16'>
                <PageHeader title={"Salário estimado"} path={"Salário estimado"}/>

                <div className='mt-5'>
                    <div className='search-box p-2 text-center mb-2'>
                        <input type="text" name='search' id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={e => setSearchText(e.target.value)}/>
                        <button className='bg-appBlue-500 text-white font-semibold px-8 py-2 rounded-sm' onClick={handleSearch}>pesquisar</button>

                    </div>

                </div>

                {/* display card */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
                    {
                        salary.map((data) => (
                            <div key={data.id} className='shadow px-4 py-8'>
                                <h4 className='font-semibold text-xl'>{data.title}</h4>
                                <p className='my-2 font-medium text-appBlue-500 text-lg'>{data.salary}</p>
                                <div className='flex flex-wrap gap-4'>
                                    <a href="/" className='underline'>{data.status}</a>
                                    <a href="/" className='underline'>{data.skills}</a>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SalaryPage