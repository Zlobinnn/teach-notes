import React from "react";

interface Props {
    className?: string;
    name: string;
}

export const StudentInList: React.FC<Props> = ({ name }) => {

    return (
        <div className="flex text-lg items-center px-2">
            <div className="w-[25%] flex items-center gap-3">
                <div className="w-15 h-15 bg-neutral-300 rounded-full"></div>
                <p>{name}</p>
            </div>

            <div className="w-[25%] flex items-center justify-center">
                <p>Математика</p>
            </div>

            <div className="w-[25%] flex items-center justify-center">
                <p>10 августа</p>
            </div>

            <div className="w-[25%] flex items-center justify-center">
                <div className="bg-neutral-100 p-2 rounded-2xl">Оплачено</div>
            </div>
        </div>
    );
};