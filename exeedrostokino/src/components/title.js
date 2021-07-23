import React from "react"

export default function Title(props) {
    return (
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl leading-tight mb-8 font-medium italic uppercase">{props.text}</h2>
    )
}