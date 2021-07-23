import React from "react"
import Button from "../components/button"

export default function Header(props) {
    return (
    <header className="bg-exeed-dark text-white py-2">
        <div className="container mx-auto px-2 md:px-0 flex flex-wrap items-center justify-center lg:justify-between">
            <div className="w-full sm:w-1/2 md:w-auto flex justify-center items-center">
                <div><img src="/images/exeed-logo.svg" alt="Cheryexeed в Ростокино Премиум" className="w-32 xl:w-48"/></div>
                <span className="mx-2">|</span>
                <div className="font-medium text-xs xl:text-base">Ростокино Премиум</div>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto md:mx-3 flex justify-center items-center my-1 sm:my-0">
                <div className="mr-2"><img src="/images/pin.svg" className="w-3 xl:w-4" alt=""/></div>
                <div className="text-xs leading-none">Москва,<br/>Сельскохозяйственная 30 стр. 1</div>
            </div>
            <a href="tel:+74991133632" className="w-full sm:w-auto sm:mr-3 md:mr-0 text-center font-medium text-lg xl:text-xl">+7 (499) 113-36-32</a>
            <Button color="bronze" arrow="no" size="tight" type="outline" handleModalOpen={props.handleModalOpen} text="Заказать звонок" />
        </div>
    </header>
    )
}