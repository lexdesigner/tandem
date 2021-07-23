import React from "react"
import Button from "../components/button"

export default class Complectation extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data
    this.handleModalOpen = props.handleModalOpen
  }
  render() {
    return (
      <div className="sm:w-1/2 md:w-1/3 text-center order-2 sm:order-1 md:order-none mt-6 sm:mt-0">
        <div className="inline-block md:text-sm lg:text-base">
          <div className="text-3xl font-medium">{this.data.name}</div>
          <div>
            Выгода до{" "}
            <span className="text-exeed-orange font-bold text-2xl md:text-xl lg:text-2xl">
              {this.data.bonus}
            </span>{" "}
            руб.*
          </div>
          <div>
            Цена от <span>{this.data.price}</span> руб.**
          </div>

          <Button
            color="red"
            text="Получить предложение"
            handleModalOpen={this.handleModalOpen}
          />
          <Button
            color="red"
            text="Пройти тест-драйв"
            handleModalOpen={this.handleModalOpen}
          />
          <Button
            color="turquoise"
            text="Рассчитать кредит"
            handleModalOpen={this.handleModalOpen}
          />
        </div>
      </div>
    )
  }
}
