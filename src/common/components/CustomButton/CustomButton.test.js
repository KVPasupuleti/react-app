import React from 'react'
import { CustomButton } from '.'
import { render } from '@testing-library/react'

describe("Custom Button tests", () => {
    it("should show custom button on the page", () => {
        
        const { getByText } = render(
            <CustomButton/>
        )

        getByText(/Custom Button/)
    })
})