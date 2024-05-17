import React from 'react'

const EmploymentType = () => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Experiência</h4>

            <div>
                <label className="sidebar-label-container">
                <input type="radio" name='test' id='test-4' value="" onChange={handleChange} />
                    <span className='checkmark'></span>Todos
                </label>

                <InputField handleChange={handleChange} value="Qualquer experiência" title="Qualquer experiência" name="test" />
                <InputField handleChange={handleChange} value="Estágio" title="Estágio" name="test" />
                <InputField handleChange={handleChange} value="Superior" title="Superior" name="test" />
                <InputField handleChange={handleChange} value="Pós graduação" title="Pós graduação" name="test" />
            </div>
        </div>
    )
}

export default EmploymentType