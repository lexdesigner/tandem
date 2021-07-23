import React from "react"

export default function Button(props){
    let href, classNames
    let target = ''

    if(props.href)
        href = props.href
    else
        href = '#feedback'
    
    switch(props.color){
        case 'bronze':
            if(props.type === 'outline')
                classNames = 'border-2 border-bronze text-bronze hover:bg-bronze hover:text-white'
            else
                classNames = 'bg-bronze text-white hover:bg-dark-gray'
            break
        case 'dark':
            classNames = 'bg-exeed-dark text-white hover:bg-exeed-orange'
            break
        case 'turquoise':
            classNames = 'bg-turquoise text-white hover:bg-dark-gray'
            break
        case 'red':
        default:
            classNames = 'bg-exeed-orange text-white hover:bg-dark-gray'
    }
    if(props.size !== 'tight'){
        classNames += ' py-2'
    }else{
        classNames += ' py-1'
    }
    if(props.modal !== 'no')
        classNames += ' open-modal'

    
    if(props.blank === 'yes')
        target += '_blank'

    let arrow = <svg className="w-3 h-4" viewBox="10 5 20 30" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="Group"><polygon id="Path" fillRule="nonzero" points="16.6666667 10 14.3083333 12.3583333 21.95 20 14.3083333 27.6416667 16.6666667 30 26.6666667 20"></polygon></g></svg>
    if(props.arrow === 'no') arrow = ''

    if(props.submit)
        return (
        <button type="submit" className={'mx-auto flex items-center justify-between px-3 transition-colors ease-in-out duration-500 my-1 ' + classNames}>
            <span>{props.text}</span>
            {arrow}    
        </button>
        )
    else
        return (
    <a href={href} className={'text-xs sm:text-sm lg:text-base leading-none flex items-center justify-between px-3 transition-colors ease-in-out duration-500 my-1 ' + classNames} target={target} onClick={props.handleModalOpen}>
        <span>{props.text}</span>
        {arrow}    
    </a>
    )
}