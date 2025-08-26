import React from 'react';
import { IoIosHome } from "react-icons/io";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ }) => {
    return (
        <div className="w-[100%] absolute h-12 px-10 flex items-center justify-end">
            <button className="flex items-center justify-center hover:bg-white p-2 rounded-2xl">
                <IoIosHome size={30}/>
            </button>
        </div>
    );
};