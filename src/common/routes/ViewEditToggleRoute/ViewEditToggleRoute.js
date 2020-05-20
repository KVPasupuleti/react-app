import React, { Component } from 'react'
import { ViewEditToggle } from '../../components/ViewEditToggle'
import { withToggle } from '../../hocs/withToggle'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class ViewEditToggleRoute extends Component {

    @observable userInput = "Click on the edit button to start editing"

    onChangeUserInput = (e) => {
        this.userInput = e.target.value
    }

    render() {
        const { toggleStatus, onToggle } = this.props
        return (
            <ViewEditToggle
            userInput={this.userInput}
            onChangeUserInput={this.onChangeUserInput}
            toggleStatus={toggleStatus}
            onToggle={onToggle}
            />
            )
    }
}

const EnhancedViewEditToggleRoute = withToggle(ViewEditToggleRoute)

export { EnhancedViewEditToggleRoute }