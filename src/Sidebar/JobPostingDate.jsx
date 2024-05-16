import React from 'react'
import InputField from '../Components/InputField';

const JobPostingDate = ({handleChange}) => {
    const now = new Date();

    const twentyFourHoursAgo =  new Date( now - 24 * 60 * 60 * 1000);
    
    const sevenDaysAgo =  new Date( now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo =  new Date( now - 30 *24 * 60 * 60 * 1000);
    

    // converter data para string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
    return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Postado em</h4>

        <div>
            <label className="sidebar-label-container">
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                <span className='checkmark'></span>Todo período
            </label>

            <InputField
                onChange={handleChange}
                value={twentyFourHoursAgoDate} title="Últimas 24 horas"
                name="test3" 
            />
            <InputField
                handleChange={handleChange}
                value={sevenDaysAgoDate}
                title="Últimos 7 dias"
                name="test3"
            />
            <InputField
                handleChange={handleChange}
                value={thirtyDaysAgoDate}
                title="Último mês"
                name="test3"
            />
        </div>
    </div>
    )
}

export default JobPostingDate