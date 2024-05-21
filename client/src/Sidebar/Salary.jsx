import React from 'react'
import Button from './Button'
import RangeField from '../Components/RangeField'

const Salary = ({handleChange, handleClick}) => {
    return (
        <div>
            <h4 className='text-lg font-medium my-4'>Remuneração</h4>

            <label className="sidebar-label-container mb-4">
                <input type="radio" name='test' id='test-3' value="" onChange={handleChange} />
                <span className='checkmark'></span>Todos
            </label>

            <div className='mb-4 w-full flex'>
                <Button onClickHandler={handleClick} value="Hora" title="Hora"/>
                <Button onClickHandler={handleClick} value="Mensal" title="Mensal"/>
                <Button onClickHandler={handleClick} value="Anual" title="Anual"/>
            </div>

            <div>
                <RangeField handleChange={handleChange} name="test" />
            </div>

        </div>
    )
}

export default Salary