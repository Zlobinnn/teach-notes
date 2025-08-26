import React from 'react';
import { Lesson } from './Lesson';

interface Props {
    className?: string;
    name: string;
}

export const Student: React.FC<Props> = ({ name }) => {
    return (
        <div className="flex flex-col w-[50vw] bg-white p-3 px-5 rounded-2xl gap-5">
            <div className="flex items-center justify-between flex-1">
                <div>
                    <h1 className="text-xl font-bold">Страница ученика</h1>
                </div>

                <button className="flex text-lg bg-neutral-100 p-2 rounded-2xl gap-3 hover:bg-neutral-200">
                    <p className="flex items-center justify-center text-2xl">+</p>
                    <p className="flex items-center justify-center">Добавить занятие</p>
                </button>
            </div>

            <div className='flex gap-5'>
                <div className='w-30 h-30 bg-neutral-200 rounded-full'>
                </div>

                <div className='flex flex-col'>
                    <p className='text-3xl'>{name}</p>
                    <p>tg:primer</p>
                    <p>Мама: Елена</p>
                    <p>+7 910 12 32</p>
                </div>
            </div>

            <div>
                <div className="flex p-2 rounded-2xl text-lg items-center px-5">
                    <p className='w-[20%] flex items-center justify-center'>Дата занятия</p>
                    <p className='w-[60%] flex items-center justify-center'>Информация</p>
                    <p className='w-[20%] flex items-center justify-center'>Платёж</p>
                </div>
                <hr className=' border border-neutral-200'/>
            </div>

            <div className='flex flex-col'>
                <Lesson date={'5 августа'} info={'Разбирали ОГЭ'} cost={'1200 ₽'}/>
                <Lesson date={'23 июля'} info={'Функции'} cost={'1200₽'}/>
                <Lesson date={'1 июля'} info={'Задачи на синусы косинусы'} cost={'1200 ₽'}/>
            </div>

        </div>
    );
};