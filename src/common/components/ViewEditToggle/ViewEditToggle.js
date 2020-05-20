import React, { Component } from 'react'
import { ViewEditToggleContainer, Header, BodyTrueContainer, BodyFalseContainer, UserInputEL, CancelButton, EditButton, InstructionText } from './styles'

class ViewEditToggle extends Component {
    render() {
        const { toggleStatus, onToggle, userInput, onChangeUserInput } = this.props
        return (
            <ViewEditToggleContainer>
                <Header>ViewEditToggle</Header>
                {toggleStatus?
                <BodyTrueContainer>
                    <UserInputEL type="text" value={userInput} onChange={onChangeUserInput}/>
                    <CancelButton onClick={onToggle}>Cancel</CancelButton>
                </BodyTrueContainer>:
                <BodyFalseContainer>
                    <InstructionText>Click on the edit button to start editing</InstructionText>
                    <EditButton onClick={onToggle}>Edit</EditButton>
                </BodyFalseContainer>}
            </ViewEditToggleContainer>
        )
    }
}

export { ViewEditToggle }

