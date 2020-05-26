import React from 'react'
import { render, getByPlaceholderText } from '@testing-library/react'
import { CustomInputTag } from '.'

describe('Custom Input Tag Tests', () => {
    it("should display the input tag", () => {
        const { getByPlaceholderText } = render(
            <CustomInputTag/>
        )

        getByPlaceholderText(/check basic story/)
    })
})
