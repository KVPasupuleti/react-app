import React, { Component } from 'react'
import withToggle from '../../hocs/withToggle'
import { CollapseExpandContainer, Header, BodyTrueContainer, BodyContainer, CollapseButton, ExpandButton, ListTitleTextEl, ListItemContainer, ListItemEl } from './styles'

class CollapseExpand extends Component {
    render() {
        const { itemsList, listTitle, toggleStatus, onToggle } = this.props
        return (
            <CollapseExpandContainer>
                <Header>CollapseExpand</Header>
                <BodyContainer>
                <ListTitleTextEl>{listTitle}:</ListTitleTextEl>
                {toggleStatus?
                <BodyTrueContainer>
                    <CollapseButton onClick={onToggle}>Collapse</CollapseButton>
                    <ListItemContainer>
                    {itemsList.map(item => <ListItemEl key={item}>{item}</ListItemEl>)}
                    </ListItemContainer>
                </BodyTrueContainer>:
                <ExpandButton onClick={onToggle}>Expand</ExpandButton>
                }
                </BodyContainer>
            </CollapseExpandContainer>
        )
    }
}

// const EnhancedCollapseExpand = withToggle(CollapseExpand)

export { CollapseExpand }
