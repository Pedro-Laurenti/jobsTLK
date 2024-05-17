import React, { useRef, useEffect, useState } from 'react';

const RangeField = ({ handleChange, value, name, initialValue }) => {
    const inputRef = useRef(null);
    const [percentage, setPercentage] = useState(initialValue || 0);

    useEffect(() => {
        if (initialValue) {
            setPercentage(initialValue);
            handleChange({ target: { name, value: initialValue } }); // Propague o valor inicial para o handleChange
        }
    }, [initialValue, handleChange, name]);

    const logValue = () => {
        if (inputRef.current) {
            setPercentage(inputRef.current.value);
            handleChange({ target: { name, value: inputRef.current.value } }); // Propague o novo valor para o handleChange
        }
    };

    return (
        <>
            <label className="w-full">
                <input
                    className="w-full"
                    type="range"
                    name={name}
                    value={value || percentage} // Use value se for fornecido, caso contrário, use o estado interno percentage
                    onChange={(e) => {
                        handleChange(e);
                        logValue();
                    }}
                    ref={inputRef}
                    min="1"
                    max="100"
                    step="1"
                />
            </label>
            <div className="text-end min-w-fit" style={{ width: `${value || percentage}%` }}>
                R$ {value || percentage}.000
            </div>
        </>
    );
};

export default RangeField;