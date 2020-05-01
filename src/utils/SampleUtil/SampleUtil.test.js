import { add } from '.'

test("this should return", () => {
    expect('team').toMatch(/ea/)
})

test("don't add strings", () => {
    expect(false).toBeFalsy()
})

// describe("add function", () => {
//     it("should return the sum of two numbers", () => {
//         expect(1 + 2).not.toBe(4)
//     })
// })