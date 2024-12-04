import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const Loader = () => (
    <div className="flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const Converter = ({ uploadedFile }) => {
    const [outputFormat, setOutputFormat] = useState("webp");
    const [convertedImage, setConvertedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleConversion = async () => {
        if (!uploadedFile) return alert("Please upload an image first!");
        setLoading(true);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
        };

        try {
            const compressedImage = await imageCompression(uploadedFile, options);
            const blob = new Blob([compressedImage], { type: `image/${outputFormat}` });
            const url = URL.createObjectURL(blob);
            setConvertedImage(url);

            // Show success toast after successful conversion
            toast.success("Image converted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.error("Error converting image:", error);
            toast.error("Error converting image. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className="flex flex-col max-w-[74rem] mb-24 mx-auto border-4 border-red-500 border-dashed items-center gap-4 p-6 bg-gray-700 rounded-md shadow-md">
            <div className="flex items-center gap-4">
                <span className="text-white text-sm">to</span>
                <div className="relative inline-block cursor-pointer">
                    <select className="w-full cursor-pointer px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md shadow-sm appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 ease-in-out"
                        value={outputFormat}
                        onChange={(e) => setOutputFormat(e.target.value)}>
                        <option value="webp">WEBP</option>
                        <option value="png">PNG</option>
                        <option value="jpg">JPG</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                        <IoIosArrowDown />
                    </span>
                </div>

                <button
                    className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                    onClick={handleConversion}
                >
                    Convert
                </button>
            </div>
            {loading ? (
                <Loader />
            ) : (
                convertedImage && (
                    <a
                    href={convertedImage}
                    download={`converted.${outputFormat}`}
                    className="inline-flex items-center gap-4 mt-4 px-8 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                  >
                    <FaDownload className="text-lg" />
                    Download Image
                  </a>
                )
            )}
        </div>
        </>
    );
};

export default Converter;