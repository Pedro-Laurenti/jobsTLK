import { useEffect, useState } from 'react';
import Banner from  '../Components/Banner'
import Card from '../Components/Card';
import Jobs from './Jobs';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, [])

    // handle input change
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    // filtro de jobs por título
    const filteredItens = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    // ------------- radio filter ------------- //
    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // ------------- button based filtering ------------- //
    const handleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    // MAIN FUNCTIONS
    const filteredData = (jobs, selected, query) => {
        let filteredJob = jobs;

        // Input itens filter
        if(query){
            filteredJob = filteredItens;
        }

        // category filter
        if (selected){
            filteredJob = filteredJob.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ));
            console.log(filteredJob)
        }

        return filteredJob.map((data, i) => <Card key={i} data={data} />)
    }

    const result = filteredData(jobs, selectedCategory, query);



    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>


            {/* main content */}
            <div>
                <Jobs result={result}/>
            </div>
        </div>
    )
}

export default Home