import { useEffect, useState } from 'react';
import Banner from  '../Components/Banner'
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    useEffect(() => {
        setIsLoading(true);

        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data);
            setIsLoading(false)
        })
    }, [])

    // handle input change
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    // filtro de jobs por título
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    // ------------- radio filter ------------- //
    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // ------------- button based filtering ------------- //
    const handleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    // CAlculate index range
    const calculatePageRange = () => {
        const startIndex = (currentPage -1) *itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {startIndex,endIndex}
    }

    // function for the next page
    const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
            setCurrentPage(currentPage + 1)
        }
    }

    // function for the next page
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    // NORMALIZATION IN FILTERS
    function normalizeString(str) {
        if (!str) return ''; // Evita erros caso str seja null ou undefined
        // Converter para minúsculas
        str = str.toLowerCase();
        
        // Substituir espaços por traços
        str = str.replace(/\s+/g, '-');
        
        // Remover acentos
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        return str;
    }

    // MAIN FUNCTION
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        // Input itens filter
        if(query){
            filteredJobs = filteredItems;
        }

        // category filter
        if (selected) {
            const normalizedSelected = normalizeString(selected);
        
            filteredJobs = filteredJobs.filter(
                ({
                    jobLocation,
                    maxPrice,
                    experienceLevel,
                    salaryType,
                    employmentType,
                    postingDate
                }) => 
                    
                (
                    normalizeString(jobLocation) === normalizedSelected ||
                    parseInt(maxPrice) >= parseInt(selected) ||
                    postingDate >= selected ||
                    normalizeString(salaryType) === normalizedSelected ||
                    normalizeString(employmentType) === normalizedSelected ||
                    normalizeString(experienceLevel) === normalizedSelected
                )
            );
            // console.log(filteredJobs);
        }
        
        // slice data per current page
        const{startIndex, endIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex)

        return filteredJobs.map((data, i) => <Card key={i} data={data} />)
    }

    const result = filteredData(jobs, selectedCategory, query);



    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>

            {/* main content */}
            <div className=' w-full md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
                <div className=' bg-appWhite-100 p-4 rounded'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick}/>    
                </div>

                <div className='col-span-2 bg-appWhite-100 p-4 rounded-sm'>
                    {
                        isLoading ? (<p className='font-medium'>Carregando...</p>) : result.length > 0 ? (<Jobs result={result}/>) : <>
                            <h3 className='text-lg font-bo ld mb-2'>{result.length} vagas</h3>
                            <p>Nenhum cargo encontrado!</p>
                        </>
                    }

                    {/* Paginação */}

                    {
                        result.length > 0 ? (
                            <div className='flex justify-center mt-4 space-x-8'>
                                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Anterior</button>
                                <span className='mx-2'>Pág. {currentPage} de {Math.ceil(filteredItems.length / itemsPerPage)} </span>
                                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline disabled:no-underline	'>Próximo</button>
                            </div>
                        ) : ""
                    }
                    
                </div>

                <div className=' bg-appWhite-100 p-4 rounded'>R</div>
            </div>
        </div>
    )
}

export default Home;