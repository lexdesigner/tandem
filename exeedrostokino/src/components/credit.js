import React from "react"
import { render } from "react-dom"
import Button from "../components/button"
import InputMask from "react-input-mask";

export default class Credit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          phone: "",
        }
      }

      onChange = (event) => {
        this.setState({
          phone: event.target.value
        });
      }
    
      handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }
      handleSubmit = event => {
        event.preventDefault()
        console.log('submit from credit')
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: this.state.phone })
        };
        fetch('/send.php', requestOptions)
          .then(response => response.json())
          .then(console.log('test'));
        //ym(68955580,'reachGoal','forma_otpravlena')
      }

    render(){
        return (
            <div className="mb-8 relative">
                <img src="/images/credit-block.jpg" className="w-full" alt=""/>
                <div className="sm:absolute inset-0 flex justify-center">
                    <div className="container h-full flex items-center justify-center sm:justify-start">
                        <div className="bg-white py-4 md:py-8 px-2 sm:px-6 bg-opacity-75">
                            <form className="form" onSubmit={this.handleSubmit}>
                            <div className="leading-none font-medium text-base sm:text-lg text-center mb-6">Кредит на льготных условиях<br/>в <span className="text-xl sm:text-2xl uppercase">Ростокино Премиум</span></div>
                            <div className="mb-2">
                                <InputMask mask="+7 (999) 999-99-99" onChange={this.onChange} value={this.props.value} name="phone" placeholder="Ваш телефон" className="shadow text-center appearance-none border border-exeed-orange w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <Button submit="yes" color="dark" text="ОСТАВИТЬ ЗАЯВКУ" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}