import React from "react"

export default function Footer() {
  return (
    <div className="p-2 bg-black text-center text-white text-xs leading-snug">
      <a href="#" className="underline">
        Дисклеймер{" "}
      </a>{" "}
      <br />
      <a href="/politic.pdf" target="_blank" className="underline">
        {" "}
        Политика конфиденциальности{" "}
      </a>{" "}
      <br />
      <p className="my-2 text-gray-500">
        * Максимальная возможная выгода достигается при суммировании всех
        маркетинговых программ ДЦ Ростокино Премиум: по программе TRADE - IN,
        кредитной программы и индивидуальной скидки от ДЦ Ростокино Премиум.{" "}
        <br />
        ** Указаны минимальные возможные цены комплектаций с учетом получения
        максимальной возможной выгоды.{" "}
      </p>
      <p className="my-2 text-gray-500">
        Не является публичной офертой.Подробности узнавайте в отделе продаж
        Ростокино Премиум.{" "}
      </p>{" "}
      <p className="text-center mt-2"> Ростокино Премиум &copy; 2021 </p>{" "}
    </div>
  )
}
