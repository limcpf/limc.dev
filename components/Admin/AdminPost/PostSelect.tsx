'use client';
import {useEffect, useRef, useState} from "react";

export default function PostSelect({
                                           value,
    isChild,
                                           dataFunction,
                                           setFunction,
                                           parentValue,
                                       }: {
    value: string | undefined,
    isChild: boolean,
    setFunction?: Function;
    dataFunction?: (name?: string) => Promise<any>;
    parentValue?: string;
}) {
    const [data, setData] = useState<{key: string, value: string}[]>([]);
    const ref = useRef<HTMLSelectElement>(null);
    const [v, setV] = useState<string>(value || "");

    useEffect(() => {
        if (setFunction) setFunction(v);
        if (isChild) {
            if (!parentValue) {
                setData([]);
                if (setFunction) setFunction("");
                if (ref.current) ref.current.value = "";

                return;
            }
        }
        if (!dataFunction) return;
        dataFunction(parentValue).then((d) => {
            if (ref.current) ref.current.value = "";
            setData(d as {key: string, value: string}[]);
        });
    }, [parentValue]);

    const className = "bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5";
    return (
        <select
            disabled={isChild && !parentValue}
            ref={ref}
            className={className}
            value={v}
            onChange={(evt) => {
                if (setFunction) setFunction(evt.currentTarget.value);
                setV(evt.currentTarget.value);
            }}
        >
            <option selected value="">{isChild && !parentValue ? "상위 데이터를 선택해주세요" : "대상을 선택해주세요"}</option>
            {data &&
                data.map(({ key, value }: {key:string, value:string}, i: number) => (
                    <option key={key + i + value} value={`${value}`}>
                        {key}
                    </option>
                ))}
        </select>
    );
}