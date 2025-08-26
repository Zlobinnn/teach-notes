import React from "react";
import { StudentInList } from "./StudentInList";

interface Props {
    className?: string;

}

export const StudentsList: React.FC<Props> = ({ }) => {
    return (
        <div className="flex flex-col w-[50vw] bg-white p-3 rounded-2xl gap-5">
            <div className="flex items-center justify-between flex-1 px-2">
                <div>
                    <h1 className="text-xl font-bold">Список учеников</h1>
                </div>

                <button className="flex text-lg bg-neutral-100 p-2 rounded-2xl gap-3 hover:bg-neutral-200">
                    <p className="flex items-center justify-center text-2xl">+</p>
                    <p className="flex items-center justify-center">Добавить ученика</p>
                </button>
            </div>

            <div className="flex bg-neutral-100 p-2 rounded-2xl text-md items-center text-neutral-500 px-5">
                <div className="w-[25%] flex items-center justify-center">
                    <p>Имя</p>
                </div>
                <div className="w-[25%] flex items-center justify-center">
                    <p>Предмет</p>
                </div>
                <div className="w-[25%] flex items-center justify-center">
                    <p>Последнее занятие</p>
                </div>
                <div className="w-[25%] flex items-center justify-center">
                    <p>Оплата</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 px-2">
                <StudentInList name="Милана"/>
                <StudentInList name="Соня"/>
            </div>
        </div>
    );
};