import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
export default function withScreenSizeDetectors(WrappedComponent) {

return class extends Component {

    @observable windowWidth = window.innerWidth

    isMobile = () => {
        if(this.windowWidth < 576)
            return true
        return false
    }

    isTablet = () => {
        if(this.windowWidth >= 576 && window.innerWidth < 992)
            return true
        return false
    }

    isDesktop = () => {
        if(this.windowWidth >= 992)
            return true
        return false
    }

    handleWidthChange = () => {
        this.windowWidth = window.innerWidth
    }

    render() {
        window.addEventListener("resize", this.handleWidthChange)
        console.log(this.windowWidth)
        return (
            <div>
                <WrappedComponent windowWidth={this.windowWidth} isMobile={this.isMobile} isTablet={this.isTablet} isDesktop={this.isDesktop}/>
            </div>
        )
    }
}

}
