import React from 'react'
import { render } from '@testing-library/react'

import { HelloMessage } from "."

describe("HelloMessage tests", () => {
    it("should fill the input tags", () => {
        const { getByText, getByPlaceholderText, debug } = render(<HelloMessage username="kr" password="si"/>)
        const usernameElement = getByPlaceholderText(/username/i);
        const passwordElement = getByPlaceholderText(/password/i);

        usernameElement.nodeValue = "kv"
        passwordElement.nodeValue = "si"
        //debug();
    })

})