import React from 'react';

const Footer = () => {

    return (
        <>
            <div className="flex flex-col flex-1 overflow-hidden pt-13">
                <div className="absolute w-auto bottom-0 border-t text-center border-gray-200 p-4">
                    <a href="#" className="flex items-center text-center text-sm font-bold text-gray-900 hover:text-red-700">
                        <span className='text-center'>Developed by XronTech. </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
