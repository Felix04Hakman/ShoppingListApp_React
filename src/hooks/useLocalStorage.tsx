import {useState} from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = useState(() => {
        try {
            const localStorageJson = localStorage.getItem(key);
            return localStorageJson ? JSON.parse(localStorageJson) : initialValue;
        }catch (e){
            return initialValue
        }
    })

    const updateValue = (value: any) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, updateValue];
}