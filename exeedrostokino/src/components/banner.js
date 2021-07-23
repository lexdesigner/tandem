import React from "react"

export default function Banner(props) {
    return (
    <img src="/images/banner.jpg" alt="" className="w-full" onClick={props.handleModalOpen}/>
    )
}