import React from 'react';


export const Js10 = () => {

    type funType = {
        id: string
        title: string
        isDone: boolean
    }

    const identity = <funType, >(value: funType[]): funType[] => {
        return (value)
    }

    // console.log(identity<funType>([{id: '123', title: "test", isDone: true}]), typeof identity([1, 2]))

    type DataType = {
        data: number[]
    }

    let numbers = [1, 2, 3]

    let reverseArray = <DataType, >(numbers: DataType[]): DataType[] => {
        return numbers
    }
    console.log(reverseArray(numbers), typeof reverseArray(numbers))

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

