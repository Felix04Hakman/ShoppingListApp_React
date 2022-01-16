import {useState} from "react";

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    return [
        value,
        setValue,
        {
            value,
            onChange
        }
    ];
}