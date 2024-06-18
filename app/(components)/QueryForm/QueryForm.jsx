"use client"
import React from 'react'

const QueryForm = () => {
    const handleSubmit = ()=>{
        console.log("submitting")
    }
    return (
        <>
            <div className="w-[100%] md:w-[69%] lg:w-[70%] xl:w-[45%] h-[100vh] md:h-[80vh] xl:h-[90vh] bg-white flex flex-col justify-center items-center gap-3 pl-4 rounded-xl">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="w-full text-3xl py-3 font-[600] flex justify-center items-center sm:justify-center md:justify-center lg:justify-start">Contact Us</div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="">First Name <span className="text-red-600">*</span></div>
                            <input type="text" className="px-2 py-2 border-2 border-solid outline-none w-[260px] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="">Last Name <span className="text-red-600">*</span></div>
                            <input type="text" className="px-2 py-2 border-2 border-solid outline-none w-[260px] rounded-md" />
                        </div>
                    </div>
                    {/*  */}

                    <div className="flex flex-col justify-evenly items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="">Email Address <span className="text-red-600">*</span></div>
                            <input type="text" className="px-2 py-2 border-2 border-solid outline-none w-[260px] sm:w-[525px] rounded-md" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="">
                        <div className="flex justify-start items-center px-8">
                            <div className="my-2">Query Type <span className="text-red-600">*</span></div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 cursor-pointer">
                            <div className="flex justify-start gap-5 items-center px-6 py-2 border-2 border-solid outline-none w-[260px] rounded-md cursor-pointer">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="default-radio-1" className="cursor-pointer">General Query</label>
                            </div>
                            <div className="flex justify-start gap-5 items-center px-6 py-2 border-2 border-solid outline-none w-[260px] rounded-md cursor-pointer">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="default-radio-2" className="cursor-pointer">Support Request</label>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col justify-evenly items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="">Message <span className="text-red-600">*</span></div>
                            <textarea name="" id="" className="px-2 py-2 border-2 border-solid outline-none w-[260px] sm:w-[525px] rounded-md"></textarea>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-center sm:justify-start gap-2 items-center my-3 cursor-pointer">
                        <input type="checkbox" id="termsCheckbox" className="mr-2" />
                        <label htmlFor="termsCheckbox" className="text-sm flex-shrink">I consent to being contracted by the team</label>
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