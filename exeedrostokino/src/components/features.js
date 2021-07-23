import React from "react"
import Title from "./title"

export default class Features extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeFeature: 0}
        this.data = props.data
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id){
        e.preventDefault()
        this.setState(state => ({
            activeFeature: id
          }));
    }

    render() {
        let buttons = this.data.list.map((feature, index) => {
            let style = ''
            if(index === this.state.activeFeature)
                style = 'border-2 border-bronze text-bronze';
            else
                style = 'border-2 border-bronze bg-bronze text-white';
            return <a href="#" onClick={(e) => this.handleClick(e, index)} key={index} className={style + ' skew-button text-xxs sm:text-xs md:text-sm mb-1 py-1 px-2 sm:px-4 transform'}><span>{feature.name}</span></a>
            })
        const blocks = this.data.list.map((feature, index) => {
            let style = ''
            if(index !== this.state.activeFeature)
                style = 'hidden';
            let title = ''
            if(feature.title)
                title = "<h3 class='text-xl sm:text-2xl md:text-3xl font-bold leading-none mb-3'>" + feature.name + "</h3>"
            return <div key={index} className={style + " sm:w-11/12 md:w-5/6 mx-auto mt-3 flex flex-wrap items-center justify-center sm:justify-start"}><div className="sm:w-5/12 mb-3 md:mb-0"><img src={feature.image} alt=""/></div><div className="sm:w-7/12 px-6 leading-tight text-sm md:text-base" dangerouslySetInnerHTML={{__html: title+feature.content}} /></div>
        });
    
        return (
        <div className="container mx-auto pt-16 pb-12">
            <Title text={this.data.title} />
            <div className="flex flex-wrap justify-center leading-none">
                {buttons}
            </div>
            {blocks}
        </div>
        )
    }
}