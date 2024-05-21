import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {

    const {selectedOption, setSelectedOption} = useState(null);

    const {register, handleSubmit,  formState: {
            errors
    }} = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        console.log(data);
    };

    const options = [
        {value:"Illustrator", label:"Illustrator"},
        {value:"Photoshop", label:"Photoshop"},
        {value:"Figma", label:"Figma"},
        {value:"Wordpress", label:"Wordpress"},
        {value:"PowerBI", label:"PowerBI"},
        {value:"Excel", label:"Excel"},
        {value:"Canva", label:"Canva"},
    ]

    return (
        <div className='max-w-screen mx-auto xl:px-24 px-4'>
            {/* FORM */}
            <div className='bg-appWhite-300 py-10 px-4 lg:px-16'>
                <div className='bg-appWhite-100 w-full mt-52 py-5 px-10'>

                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Título da vaga
                                    <input type="text" placeholder="Título" {...register("jobTitle", {required: true, maxLength: 80})} className='create-job-input' />
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Empresa
                                    <input type="text" placeholder="Ex: Therapies Love Kids" {...register("companyName", {required: true, maxLength: 80})} className='create-job-input' />
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Salário mínimo
                                    <input type="text" placeholder="Salário mínimo" {...register("minPrice", {required: true, maxLength: 80})} className='create-job-input' />
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Salário máximo
                                <input type="text" placeholder="Salário máximo" {...register("maxPrice", {required: true, maxLength: 80})} className='create-job-input' />
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Tipo de salário
                                    <select {...register("salaryType", { required: true })} className='create-job-input'>
                                        <option value="">Escolha</option>
                                        <option value="Hora">Hora</option>
                                        <option value="Mensal">Mensal</option>
                                        <option value="Anual">Anual</option>
                                    </select>
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Localização
                                    <input type="text" placeholder="Localização" {...register("jobLocation", {required: true, maxLength: 80})} className='create-job-input' />
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Data da postagem
                                    <input
                                        type="date"
                                        placeholder="Ex: 2024-01-12"
                                        {...register("postingDate",{required: true, maxLength: 80})} className='create-job-input'
                                    />
                                </label>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Nível de experiência
                                    <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                                        <option value="">Escolha</option>
                                        <option value="Superior">Superior</option>
                                        <option value="Estágio">Estágio</option>
                                        <option value="Pós graduação">Pós graduação</option>
                                        <option value="Qualquer experiência">Qualquer experiência</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <label className='block mb-2 text-lg w-full'>Skills
                                <CreatableSelect
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    placeholder="Selecione"
                                    className='create-job-input py-4 w-full'
                                    isClearable
                                    isMulti
                                />
                            </label>
                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Logo da empresa
                                    <input
                                        type="url"
                                        placeholder='COle a URL da logo: https://weshare.com/img1'
                                        {...register("companyLogo")}
                                        className='create-job-input'
                                    />
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Regime de trabalho
                                    <select {...register("employmentType", { required: true })} className='create-job-input'>
                                        <option value="">Escolha</option>
                                        <option value="Integral">Integral</option>
                                        <option value="Meio expediente">Meio expediente</option>
                                        <option value="Temporário">Temporário</option>
                                    </select>
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='w-full'>
                            <label className='block mb-2 text-lg'>Descrição do trabalho
                                <textarea className='w-full pl-3 py-1.5 focus:outline-none' rows={10} placeholder='Descrição detalhada' {...register("description")}>
                                </textarea>
                            </label>
                        </div>

                        {/* ROW */}
                        <div className='w-full'>
                            <label className='block mb-2 text-lg'>Vaga postada por:
                                <input
                                    type='email'
                                    placeholder='Seu email'
                                    {...register("postedBy")}
                                    className='create-job-input'
                                />
                            </label>
                        </div>

                        <input type="submit" className='block mt-12 bg-appBlue-500 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer hover:bg-appBlue-700'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateJob