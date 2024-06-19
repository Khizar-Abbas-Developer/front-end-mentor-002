"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const QueryForm = () => {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        query_type: "",
        agreement: false,
    })
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.first_name || !data.last_name || !data.email || !data.message || !data.query_type) {
            toast.error("please fill all the fields")
        } else if (!data.agreement) {
            toast.error("Agree the terms and conditions")
        } else {
            toast.success("submitted successfully")
            console.log(data);
        }
    }
    return (
        <>
            <div className="w-[100%] h-[100vh] md:w-[69%] lg:w-[70%] xl:w-[45%] md:h-[80vh] xl:h-[90vh] bg-white flex flex-col justify-center items-center gap-3 pl-4 rounded-xl">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="w-full text-3xl mt-12 py-3 font-[600] flex justify-center items-center sm:justify-center md:justify-center lg:justify-start">Contact Us</div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="">First Name <span className="text-red-600">*</span></div>
                            <input type="text" name='first_name' autoComplete='off' onChange={handleInputChange} className="px-2 py-2 border-2 border-solid outline-none w-[260px] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="">Last Name <span className="text-red-600">*</span></div>
                            <input type="text" name='last_name' autoComplete='off' onChange={handleInputChange} className="px-2 py-2 border-2 border-solid outline-none w-[260px] rounded-md" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col justify-evenly items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="">Email Address <span className="text-red-600">*</span></div>
                            <input type="text" name='email' autoComplete='off' onChange={handleInputChange} className="px-2 py-2 border-2 border-solid outline-none w-[260px] sm:w-[525px] rounded-md" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="">
                        <div className="flex justify-start items-center px-8">
                            <div className="my-2">Query Type <span className="text-red-600">*</span></div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 cursor-pointer">
                            <div className="flex justify-start gap-5 items-center px-6 py-2 border-2 border-solid outline-none w-[260px] rounded-md cursor-pointer">
                                <input id="default-radio-1" onChange={handleInputChange} type="radio" value="general" name="query_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="default-radio-1" className="cursor-pointer">General Query</label>
                            </div>
                            <div className="flex justify-start gap-5 items-center px-6 py-2 border-2 border-solid outline-none w-[260px] rounded-md cursor-pointer">
                                <input id="default-radio-2" onChange={handleInputChange} type="radio" value="support" name="query_type" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="default-radio-2" className="cursor-pointer">Support Request</label>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col justify-evenly items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="">Message <span className="text-red-600">*</span></div>
                            <textarea name="message" id="" onChange={handleInputChange} className="px-2 py-2 border-2 border-solid outline-none w-[260px] sm:w-[525px] rounded-md"></textarea>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-center w-full sm:justify-start gap-2 items-center my-3 cursor-pointer">
                        <input type="checkbox" id="termsCheckbox" name="agreement" checked={data.agreement} onChange={handleInputChange} className="mr-2" />
                        <label htmlFor="termsCheckbox" className="text-sm flex-shrink w-[150px]">I consent to being contacted by the team</label>
                    </div>
                    {/*  */}
                    <div className="px-8 xl:w-[100%]">
                        <button className="w-[260px] xl:w-[100%] bg-[#0C7D69] py-3 rounded-md text-white">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QueryForm