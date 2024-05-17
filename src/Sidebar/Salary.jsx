import React from 'react'
import Button from './Button'
import RangeField from '../Components/RangeField'

const Salary = ({handleChange, handleClick}) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Remuneração</h4>
            <div className='mb-4 w-full'>
                <Button onClickHandler={handleClick} value="Hora" title="Hora"/>
                <Button onClickHandler={handleClick} value="Mensal" title="Mensal"/>
                <Button onClickHandler={handleClick} value="Anual" title="Anual"/>
            </div>

            <div>
                <RangeField handleChange={handleChange} name="test" />
            </div>

            <label className="sidebar-label-container mt-4">
                <input type="radio" name='test' id='test-3' value="" onChange={handleChange} />
                <span className='checkmark'></span>Todos
            </label>
        </div>
    )
}

export default Salary