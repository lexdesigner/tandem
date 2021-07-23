import React from "react"
import Button from "../components/button"
import Title from "../components/title"

export default function Advantages(props) {
  return (
    <div className="bg-dark-blue text-white">
      <div className="container mx-auto py-12">
        <Title text="Особые условия покупки в&nbsp;Ростокино&nbsp;Премиум" />
        <div className="w-3/4 text-xs sm:text-sm md:text-base mx-auto sm:mb-6 flex flex-wrap items-start justify-between text-center leading-none">
          <div
            className="w-1/2 sm:w-1/5 sm:w-auto mb-6 sm:mb-0 cursor-pointer"
            onClick={props.handleModalOpen}
          >
            <div className="w-8 sm:w-10 md:w-12 mx-auto mb-4">
              <img src="/images/adv-1.png" alt="" />
            </div>
            <span>
              Льготная
              <br />
              кредитная ставка
            </span>
          </div>
          <div
            className="w-1/2 sm:w-1/5 sm:w-auto mb-6 sm:mb-0 cursor-pointer"
            onClick={props.handleModalOpen}
          >
            <div className="w-8 sm:w-10 md:w-12 mx-auto mb-4">
              <img src="/images/adv-3.png" alt="" />
            </div>
            <span>
              Зимняя <br />
              резина в подарок
            </span>
          </div>
          <div
            className="w-1/2 sm:w-1/5 sm:w-auto mb-6 sm:mb-0 cursor-pointer"
            onClick={props.handleModalOpen}
          >
            <div className="w-8 sm:w-10 md:w-12 mx-auto mb-4">
              <img src="/images/adv-2.png" alt="" />
            </div>
            <span>
              Выгодный
              <br />
              TRADE IN
            </span>
          </div>
          <div
            className="w-1/2 sm:w-1/5 sm:w-auto mb-6 sm:mb-0 cursor-pointer"
            onClick={props.handleModalOpen}
          >
            <div className="w-8 sm:w-10 md:w-12 mx-auto mb-4">
              <img src="/images/adv-3.png" alt="" />
            </div>
            <span>
              Подарок
              <br />
              каждому клиенту
            </span>
          </div>
          <div
            className="w-1/2 sm:w-1/5 sm:w-auto mb-6 sm:mb-0 cursor-pointer"
            onClick={props.handleModalOpen}
          >
            <div className="w-8 sm:w-10 md:w-12 mx-auto mb-4">
              <img src="/images/adv-4.png" alt="" />
            </div>
            <span>
              Бесплатный
              <br />
              шиномонтаж
              <br />и хранение шин*
            </span>
          </div>
        </div>
        <div className="w-64 mx-auto">
          <Button
            color="bronze"
            text="Получить предложение"
            handleModalOpen={props.handleModalOpen}
          />
        </div>
      </div>
    </div>
  )
}
