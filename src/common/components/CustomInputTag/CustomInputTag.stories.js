import React from 'react'
import { CustomInputTag } from "../../components/CustomInputTag"
import notes from '../CustomInputTag/notes.md'

export default {
    component: CustomInputTag,
    title: 'ComponentsInput',
    parameters: { notes: notes },
}

export const customInputTag = () => <CustomInputTag text="small"/>

customInputTag.story = {
decorators: [storyFun => <div style={{backgroundColor: "green"}}>{storyFun()}</div>]
}