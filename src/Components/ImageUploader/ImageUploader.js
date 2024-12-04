import React, { useEffect, useState } from "react";
import { GrUpload } from "react-icons/gr";
import { FcLandscape } from "react-icons/fc";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from 'framer-motion';
import image from '../assets/image-upload.svg'
import image2 from '../assets/rounded-triangle.svg'

const ImageUploader = ({ setUploadedFile }) => {
    const [fileDetails, setFileDetails] = useState(null);
    const [animate, setAnimate] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileDetails({
                name: file.name,
                size: (file.size / 1024).toFixed(1) + " KB",
            });
            setUploadedFile(file);
        }
    };

    const handleDelete = () => {
        setFileDetails(null);
        setUploadedFile(null);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate((prev) => !prev);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);


    return (



        <div
            className="relative bg-no-repeat bg-contain py-28"
            style={{ backgroundImage: `url(${image2})` }}>



            <div className="px-10 container mx-auto">
                <div className="p-6 bg-gray-700 mt-20 border-4 border-red-500 border-dashed rounded-md shadow-md flex flex-col gap-4 items-center">
                    {!fileDetails ? (
                        <div className="flex flex-col items-center justify-center gap-4">
                            <motion.div
                                className="flex justify-center items-center"
                                animate={{
                                    y: animate ? 5 : -5,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                            >
                                <img alt="gallery-icon" src={image} className="w-24" />
                            </motion.div>



                            <p className="text-center text-white text-lg font-semibold">
                                Drop your images or click to Browse
                            </p>


                            <p className="text-center text-gray-400 text-sm">
                                Convert JPG, PNG, WebP. Max 10 MB.
                            </p>


                            <div className="flex flex-col items-center gap-4">
                                <label
                                    className="flex items-center justify-center text-white cursor-pointer rounded-md"
                                    htmlFor="file-input"
                                >
                                    <div className="flex items-center group justify-center mt-5 cursor-pointer">
                                        <div
                                            className="relative flex items-center px-5 py-2 rounded-sm text-black bg-white isolation-auto z-10 border border-gray-500 border-dotted before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 duration-700 hover:text-white"
                                        >
                                            <GrUpload className="text-black mr-4 duration-700 group-hover:text-white" />

                                            Select files
                                        </div>
                                    </div>


                                </label>
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between w-full bg-gray-800 px-4 py-2 rounded-md">

                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                                    <FcLandscape className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-white">{fileDetails.name}</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">


                                <span className="px-1 sm:block hidden sm:ms-14 border-green-500 border text-white rounded-sm text-xs">
                                    READY
                                </span>
                            </div>


                            <div className="flex items-center justify-center">
                                <p className="text-gray-400 text-sm">{fileDetails.size}</p>
                            </div>


                            <button
                                className="text-gray-400 hover:text-red-500 p-[2px] border-red-500 border duration-500 transition-all"
                                onClick={handleDelete}
                            >
                                <LiaTimesSolid className="text-xl" />
                            </button>
                        </div>
                    )
                    }
                </div >
            </div>
        </div >

    );
};

export default ImageUploader;