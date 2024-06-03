import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import CreatableSelect from 'react-select/creatable';
import CurrencyInput from 'react-currency-input-field';

const CreateJob = () => {

    const {selectedOption, setSelectedOption} = useState(null);

    const {register, handleSubmit,  formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        data.companyLogo = image;
        // console.log(data);
        fetch("http://localhost:3000/post-job", {
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data)
        }).then(res => res.json()).then((result) => {
            console.log(result);
            if(result.acknowledged === true ){
                alert("Vaga postada com sucesso!")
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
    ];

    const [image, setImage] = useState("");

    const coverToBase64 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
                console.log(reader.result)
            };
            reader.onerror = (error) => {
                console.log.error("Error: ", error);
            };
        }
    };



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
                                    <input type="text" placeholder="Título" {...register("jobTitle", {required: false, maxLength: 80})} className='create-job-input' />

                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Empresa
                                    <input type="text" placeholder="Ex: Therapies Love Kids" {...register("companyName", {required: false, maxLength: 80})} className='create-job-input' />
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Salário mensal
                                <CurrencyInput
                                    id="input-example"
                                    name="input-name"
                                    placeholder="Salário mínimo"
                                    defaultValue={1000}
                                    decimalsLimit={2}
                                    onValueChange={(value, name, values) => console.log(value, name, values)}
                                    className='create-job-input' 
                                    {...register("mensalPrice", {required: false, maxLength: 80})}
                                />
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Tipo de salário
                                    <select {...register("salaryType", { required: false })} className='create-job-input'>
                                        <option value="Hora">Hora</option>
                                        <option value="Mensal">Mensal</option>
                                        <option value="Anual">Anual</option>
                                    </select>
                                </label>
                            </div>

                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Localização
                                    <select {...register("jobLocation", { required: false })} className='create-job-input'>
                                        <option value="Nerópolis">Nerópolis</option>
                                        <option value="Goianésia">Goianésia</option>
                                        <option value="Taguatinga">Taguatinga</option>
                                        <option value="Anápolis">Anápolis</option>
                                        <option value="Jaraguá">Jaraguá</option>
                                    </select>
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Data da postagem
                                    <input
                                        type="date"
                                        placeholder="Ex: 2024-01-12"
                                        {...register("postingDate",{required: false, maxLength: 80})} className='create-job-input'
                                    />
                                </label>
                            </div>
                        </div>

                        {/* ROW */}
                        <div className='create-job-flex'>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Nível de formação
                                    <select {...register("experienceLevel", { required: false })} className='create-job-input'>
                                        <option value="Superior">Superior</option>
                                        <option value="Estágio">Estágio</option>
                                        <option value="Pós graduação">Pós graduação</option>
                                        <option value="Qualquer experiência">Qualquer experiência</option>
                                    </select>
                                </label>
                            </div>


                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Área de atuação
                                <select {...register("areaAtuacao", { required: false })} className='create-job-input'>
                                    <optgroup label="Administrativo">
                                        <option value="ADM">Admnistrativo</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Financeiro">Financeiro</option>
                                        <option value="Faturamento">Faturamento</option>
                                        <option value="Comercial">Comercial</option>
                                        <option value="RH">Recursos Humanos</option>
                                    </optgroup>
                                    <optgroup label="Saúde">
                                        <option value="Fonoaudiologia">Fonoaudiologia</option>
                                        <option value="Musicoterapia">Musicoterapia</option>
                                        <option value="Neuropsicologia">Neuropsicologia</option>
                                        <option value="Psicomotricidade">Psicomotricidade</option>
                                        <option value="Fisioterapia">Fisioterapia</option>
                                        <option value="TerapiaOcupacional">Terapia Ocupacional</option>
                                        <option value="Psicologia">Psicologia</option>
                                        <option value="Neuropsicologia">Neuropsicologia</option>
                                    </optgroup>
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
                                    className='py-4 w-full'
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
                                        accept='image/*'
                                        type="file"
                                        {...register("companyLogo")}
                                        onChange={coverToBase64}
                                        className='create-job-input'
                                    />
                                    {image === "" || image === null ? null : (
                                        <img width={100} height={100} src={image} alt="Logo da empresa" />
                                    )}
                                </label>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>Regime de trabalho
                                    <select {...register("employmentType", { required: false })} className='create-job-input'>
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