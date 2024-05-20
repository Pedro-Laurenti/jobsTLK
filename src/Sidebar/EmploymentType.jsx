import React from 'react'
import InputField from '../Components/InputField'

const EmploymentType = ({handleChange}) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Tipo</h4>

            <div>
                <label className="sidebar-label-container">
                <input type="radio" name='test' id='test-4' value="" onChange={handleChange} />
                    <span className='checkmark'></span>Todos
                </label>

                <InputField handleChange={handleChange} value="Integral" title="Integral" name="test" />
                <InputField handleChange={handleChange} value="Temporário" title="Temporário" name="test" />
                <InputField handleChange={handleChange} value="Meio expediente" title="Meio expediente" name="test" />
            </div>
        </div>
    )
}

export default EmploymentType