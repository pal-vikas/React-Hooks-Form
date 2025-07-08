import { useState } from "react";
import { useForm } from "react-hook-form"


function ControlledComponentForm() {

   const {register, handleSubmit, reset} = useForm();

   function submitHandler(data)
   {
        console.log(data);
        reset();
   }

    return (
        <div>
            <div className="mx-auto flex h-screen w-full items-center justify-center">
                <form action="" onSubmit={handleSubmit(submitHandler)} className="w-[600px] border border-neutral-400 p-10 rounded-lg" >

                    <div className="text-center mb-2">
                        <h1 className="text-2xl font-bold">React Hooks forms</h1>
                        <p className="text-sm text-neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam soluta, ipsa quam commodi dicta.
                        </p>
                    </div>


                    <div className="flex justify-center gap-5 mt-">
                        <input type="text" {...register ('name')} className="border rounded-lg p-2 outline-violet-200 " placeholder='Enter the Name' />
                        <input type="email" {...register ('email')} className="border rounded-lg p-2 outline-violet-200 "  placeholder='Enter the Email' />
                    </div>
                    <div className="mx-auto flex items-center justify-center">
                        <input className="my-5 rounded-lg bg-black text-white py-2 px-4" type="submit" />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ControlledComponentForm
