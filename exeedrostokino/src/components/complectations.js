import React from "react"
import Complectation from "../components/complectation"
import Title from "../components/title"
import Button from "../components/button"

export default class Complectations extends React.Component {
    constructor(props) {
        super(props)
        this.data = props.data
        this.handleModalOpen = props.handleModalOpen;
    }

    render(){
        return (
        <div className="container mx-auto pt-6 md:pt-12">
            <Title text={this.data.title} />
            <div className="flex flex-wrap justify-center items-center mx-3 xl:mx-32">
                <Complectation data={this.data.list[0]} handleModalOpen={this.handleModalOpen} />
                <div className="md:w-1/3 order-1 sm:order-2 md:order-none sm:mt-4 md:mt-0">
                    <img src="/images/complectation.jpg" alt="" className="mb-4"/>
                    <Button color="bronze" blank="yes" modal="no" type="outline" text="Подробнее о комплектациях" href="/docs/cheryexeed-txl-package.pdf" />
                </div>
                <Complectation data={this.data.list[1]} handleModalOpen={this.handleModalOpen} />
            </div>
        </div>
        )
    }
}