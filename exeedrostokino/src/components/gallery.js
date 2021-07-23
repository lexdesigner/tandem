import React from "react"
import galleryStyles from "./gallery.module.css"


export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeSlide: 0}
        this.data = props.data
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index){
        if(index<0)
            index = this.data.length-1
        if(index === this.data.length)
            index = 0
        this.setState({activeSlide: index})
    }
    changeSlide(index){
        this.setState({activeSlide: index})
    }

    render(){
        const galleryItems = this.data.map((src, index) => {
            return <div key={index} onClick={() => this.changeSlide(index)} className="w-40 h-20 mx-3 bg-cover bg-center" style={{'backgroundImage': 'url('+src+')'}}></div>
        })
        const galleryDots = this.data.map((src, index) => {
            let active
            if(this.state.activeSlide === index)
                active = 'bg-exeed-orange'
            else
                active = ''
            return <div key={index} onClick={() => this.changeSlide(index)} className={'w-4 h-4 shadow bg-dark-gray mx-1 ' + active}></div>
        })
        return (
            <div className="relative mt-8">
                <div id="gallery" className={galleryStyles.gallery} style={{'backgroundImage': 'url('+this.data[this.state.activeSlide]+')'}}></div>
                <div className="absolute inset-x-0 bottom-0 mb-2 hidden sm:flex items-center justify-center">
                    <div onClick={() => this.handleClick(this.state.activeSlide-1)} className="cursor-pointer border-2 px-2 border-bronze text-bronze font-bold skew-button"><span>&laquo;</span></div>
                    {galleryItems}
                    <div onClick={() => this.handleClick(this.state.activeSlide+1)} className="cursor-pointer border-2 px-2 border-bronze text-bronze font-bold skew-button"><span>&raquo;</span></div>
                </div>
                <div className="sm:hidden mt-2 flex justify-center">{galleryDots}</div>
            </div>
        )
    }
}