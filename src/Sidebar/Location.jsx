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

                <InputField handleChange={handleChange} value="jaragua" title="Jaraguá" name="test" />
                <InputField handleChange={handleChange} value="anapolis" title="Anápolis" name="test" />
                <InputField handleChange={handleChange} value="neropolis" title="Nerópolis" name="test" />
                <InputField handleChange={handleChange} value="goianesia" title="Goianésia" name="test" />
                <InputField handleChange={handleChange} value="taguatinga" title="Taguatinga" name="test" />
            </div>
        </div>
    )
}

export default Location