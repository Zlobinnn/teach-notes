import React from 'react';

interface Props {
    className?: string;
    date: string;
    info: string;
    cost: string;
}

export const Lesson: React.FC<Props> = ({ date, info, cost }) => {
    return (
        <div className="flex p-2 rounded-2xl text-lg items-center px-5">
            <p className='w-[20%] flex items-center justify-center'>{date}</p>
            <p className='w-[60%] flex items-center'>{info}</p>
            <p className='w-[20%] flex items-center justify-center'>{cost}</p>
        </div>
    );
};