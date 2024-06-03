import React, {useState} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
    const {id} = useParams();
    const {_id, companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description, experienceLevel, postedBy, skills} = useLoaderData()

    const {selectedOption, setSelectedOption} = useState(null);

    const {register, handleSubmit,  formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        fetch(`http://localhost:3000/update-job/${id}`, {
            method:'PATCH',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data)
        }).then(res => res.json()).then((result) => {
            console.log(result);
            if(result.acknowledged === true ){
                alert("Vaga atualizada com sucesso!")
            }
            reset()
        });
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
                                    <input type="text" placeholder="Título" {...register("jobTitle", {required: false, maxLength: 80})} className='create-job-input' defaultValue={jobTitle}/>
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Empresa
                                    <input type="text" placeholder="Ex: Therapies Love Kids" {...register("companyName", {required: false, maxLength: 80})} className='create-job-input' defaultValue={companyName}/>
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Salário mínimo
                                    <input type="text" placeholder="Salário mínimo" {...register("minPrice", {required: false, maxLength: 80})} className='create-job-input' defaultValue={minPrice}/>
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Salário máximo
                                <input type="text" placeholder="Salário máximo" {...register("maxPrice", {required: false, maxLength: 80})} className='create-job-input' defaultValue={minPrice}/>
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Tipo de salário
                                    <select {...register("salaryType", { required: false })} className='create-job-input'>
                                        <option value={salaryType}>{salaryType}</option>
                                        <option value="Hora">Hora</option>
                                        <option value="Mensal">Mensal</option>
                                        <option value="Anual">Anual</option>
                                    </select>
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Localização
                                    <input type="text" placeholder="Localização" {...register("jobLocation", {required: false, maxLength: 80})}
                                    defaultValue={jobLocation}
                                    className='create-job-input' />
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
                                        defaultValue={postingDate}
                                        {...register("postingDate",{required: false, maxLength: 80})} className='create-job-input'
                                    />
                                </label>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Nível de experiência
                                    <select {...register("experienceLevel", { required: false })} className='create-job-input'>
                                        <option value={experienceLevel}>{experienceLevel}</option>
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
                                    defaultValue={skills}
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
                                        placeholder='Cole a URL da logo: https://weshare.com/img1'
                                        {...register("companyLogo")}
                                        className='create-job-input'
                                        defaultValue={companyLogo}
                                    />
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Regime de trabalho
                                    <select {...register("employmentType", { required: false })} className='create-job-input'>
                                        <option value={employmentType}>{employmentType}</option>
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
                                <textarea className='w-full pl-3 py-1.5 focus:outline-none' rows={10} placeholder='Descrição detalhada' defaultValue={description} {...register("description")}>
                                </textarea>
                            </label>
                        </div>

                        {/* ROW */}
                        <div className='w-full'>
                            <label className='block mb-2 text-lg'>Vaga postada por:
                                <input
                                    type='email'
                                    defaultValue={postedBy} 
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

export default UpdateJob