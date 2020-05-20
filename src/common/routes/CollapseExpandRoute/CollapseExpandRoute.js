import React, { Component } from 'react'
import { CollapseExpand } from '../../components/CollapseExpand'
import { withToggle } from '../../hocs/withToggle'
import { observer } from 'mobx-react'

@observer
class CollapseExpandRoute extends Component {
    
    listTitle = "Sample Shopping List"
    itemsList = ["Eggs", "Bread"]

    render() {
        const { toggleStatus, onToggle } = this.props
        return (
                <CollapseExpand
                itemsList={this.itemsList}
                listTitle={this.listTitle}
                toggleStatus={toggleStatus}
                onToggle={onToggle}
                />
        )
    }
}

const EnhancedCollapseExpandRoute = withToggle(CollapseExpandRoute)

export { EnhancedCollapseExpandRoute }