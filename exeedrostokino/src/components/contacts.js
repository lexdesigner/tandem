import React from "react"
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function Contacts(props){
    return (
    <YMaps>
    <div className="relative">
        <Map id="map" height="400" width="100%" defaultState={{ center: [55.838571128943435,37.63566160978698], zoom: 17 }}>
            <Placemark geometry={[55.838571128943435,37.63566160978698]} />
        </Map>
        <div className="sm:absolute inset-0 flex items-center justify-center sm:justify-start">
            <div className="w-full sm:w-auto bg-black bg-opacity-75 text-white sm:ml-6 p-6 text-center h-full">
                <img src="/images/exeed-logo.svg" className="w-64 mx-auto mb-6" alt=""/>
                <div className="font-tactic text-xl font-bold uppercase">Ростокино Премиум</div>
                <div className="text-xs leading-none mb-3">Официальный дилер CHERYEXEED</div>
                <img src="/images/rostokino.jpg" className="w-64 mx-auto mb-3" alt="Ростокино Премиум"/>
                <a href="tel:+74991133632" className="font-bold font-tactic text-xl leading-none">+7 (499) 113-36-32</a>
                <a className="cursor-pointer block text-xs underline" onClick={props.handleModalOpen}>Заказать звонок</a>
                <div className="text-sm leading-none mt-3">г.Москва,<br/>ул. Сельскохозяйственная 30 стр. 1</div>
            </div>
        </div>
    </div>
    </YMaps>
    )
}