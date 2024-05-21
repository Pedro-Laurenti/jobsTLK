import React from 'react'
import InputField from '../Components/InputField'

const Location = ({handleChange}) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Regiões    </h4>

            <div>
                <label className="sidebar-label-container">
                <input type="radio" name='test' id='test-2' value="" onChange={handleChange} />
                    <span className='checkmark'></span>Todos
                </label>

                <InputField handleChange={handleChange} title="Jaraguá" name="test" />
                <InputField handleChange={handleChange} title="Anápolis" name="test" />
                <InputField handleChange={handleChange} title="Nerópolis" name="test" />
                <InputField handleChange={handleChange} title="Goianésia" name="test" />
                <InputField handleChange={handleChange} title="Taguatinga" name="test" />
            </div>
        </div>
    )
}

export default Location