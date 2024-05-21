import React from 'react'

const Button = ({onClickHandler, value, title}) => {
    return (
        <button onClick={onClickHandler || togleBtnEvent} value={value} className={`px-4 py-1 border text-base hover:bg-appBlue-500 hover:text-white w-full`}>
            {title}
        </button>
    )
}

export default Button