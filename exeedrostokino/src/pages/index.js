import React, { Component } from "react"
import ReactModal from "react-modal"
import { window, document, exists } from "browser-monads"

import Header from "../components/header"
import Banner from "../components/banner"
import Button from "../components/button"
import Complectations from "../components/complectations"
import Features from "../components/features"
import Advantages from "../components/advantages"
import Gallery from "../components/gallery"
import Contacts from "../components/contacts"
import Credit from "../components/credit"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import InputMask from "react-input-mask"

import JSONData from "../../content/landing-content.json"

ReactModal.setAppElement("#___gatsby")

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      isModalOpen2: false,
      phone: "",
    }
    this.handleModalOpen = this.handleModalOpen.bind(this)
  }

  onChange = event => {
    this.setState({
      phone: event.target.value,
    })
  }

  beforeMaskedStateChange = ({ nextState }) => {
    let { value } = nextState
    if (value == "+7 (8__) ___-__-__") {
      value = "+7 (___) ___-__-__"
      nextState.selection = {
        start: 4,
        end: 4,
      }
    }
    // value = "+7 (___) ___-__-__"
    // if (value.endsWith("/")) {
    //   value = value.slice(0, -1)
    // }
    return {
      ...nextState,
      value,
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log("window")
    //window.ctw.createRequest('exeedrostokino.ru', this.state.phone, [], function(success, data){ console.log(success, data); } );

    // useEffect(() => {
    //   // Обновляем заголовок документа с помощью API браузерa
    //   document.title = 'Вы нажали раз';
    // });

    console.log("ref", this.refs.phone.value)
    var phonereg = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/
    if (!this.state.phone.match(phonereg)) {
      console.log("НЕ ВАЛИДЕН")
      return false
    }

    //alert(`Welcome ${this.state.phone}!`)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: this.state.phone }),
    }
    fetch("/send.php", requestOptions)
      .then(response => response.json())
      .then(console.log("test"))

    this.setState({ isModalOpen: false })
    this.setState({ isModalOpen2: true })

    let phone_ct = this.state.phone.replace(/[^0-9]/gim, "")
    if (phone_ct != "") {
      if (phone_ct[0] == "7") {
        phone_ct = phone_ct.substring(1)
      }
      if (phone_ct[0] == "8") {
        phone_ct = phone_ct.substring(1)
      }
      phone_ct = "7" + phone_ct
      window.ctw.createRequest("exeedrostokino.ru", phone_ct, [], function (
        success,
        data
      ) {
        console.log(success, data)
      })
    }

    ym(68955580, "reachGoal", "forma_otpravlena")

    gtag("event", "send", {
      event_category: "callback_form_on_site",
      event_label: "forma_otpravlena",
    })
  }

  handleModalOpen = event => {
    event.preventDefault()
    // console.log('handleModalOpen: ', event);
    ym(68955580, "reachGoal", "cleek")
    this.setState({ isModalOpen: true })
    console.log("open")
  }

  handleModalOpen2 = event => {
    event.preventDefault()
    // console.log('handleModalOpen: ', event);
    ym(68955580, "reachGoal", "cleek")
    this.setState({ isModalOpen2: true })
    console.log("open")
  }

  handleModalClose = event => {
    event.preventDefault()
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }
  handleModalClose2 = event => {
    event.preventDefault()
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen2: false })
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            РОСТОКИНО ПРЕМИУМ | официальный дилер CHERYEXEED в Москве | Купить
            CHERYEXEED TXL с выгодой до 440 000 руб.
          </title>
          <meta
            name="description"
            content="РОСТОКИНО ПРЕМИУМ — официальный дилер CHERYEXEED в Москве. Купить CHERYEXEED TXL с выгодой до 440 000 руб."
          />
          <meta
            name="keywords"
            content="cheryexeed, txl, chery exeed, чери эксид, официальный дилер"
          />
          <link rel="canonical" href="https://exeedrostokino.ru/" />
        </Helmet>
        <Header handleModalOpen={this.handleModalOpen} />
        <Banner handleModalOpen={this.handleModalOpen} />
        <Complectations
          data={JSONData.complectations}
          handleModalOpen={this.handleModalOpen}
        />
        <Features data={JSONData.features} />
        <Advantages handleModalOpen={this.handleModalOpen} />
        <Gallery data={JSONData.gallery} />
        <Features data={JSONData.features2} />
        <Credit />
        <Contacts handleModalOpen={this.handleModalOpen} />
        <Footer />
        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Example Modal In Gatsby"
          className="w-11/12 sm:w-2/3 lg:w-2/5 xl:w-1/4 px-6 py-3 shadow mx-auto bg-bronze text-white"
        >
          <div className="text-right pr-2">
            <button onClick={this.handleModalClose} className="text-lg">
              x
            </button>
          </div>
          <div className="font-bold text-2xl mb-4 leading-none text-center">
            Оставьте заявку
            <br />и мы вам перезвоним
          </div>
          <form id="form1" onSubmit={this.handleSubmit}>
            <div className="mb-2">
              <InputMask
                mask="+7 (999) 999-99-99"
                ref="phone"
                onChange={this.onChange}
                value={this.state.phone}
                name="phone"
                placeholder="Ваш телефон"
                className="shadow text-center appearance-none border border-exeed-orange w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                beforeMaskedStateChange={this.beforeMaskedStateChange}
              />
            </div>
            <Button submit="yes" text="ОТПРАВИТЬ ЗАЯВКУ" color="dark" />
          </form>
        </ReactModal>

        <ReactModal
          isOpen={this.state.isModalOpen2}
          onRequestClose={this.handleModalClose2}
          className="w-11/12 sm:w-2/3 lg:w-2/5 xl:w-1/4 px-6 py-3 shadow mx-auto bg-bronze text-white"
        >
          <div className="text-right pr-2">
            <button onClick={this.handleModalClose2} className="text-lg">
              x
            </button>
          </div>
          <div className="font-bold text-2xl mb-4 leading-none text-center">
            Ваша заявка отправлена
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default IndexPage
