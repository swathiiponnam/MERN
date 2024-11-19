import Counter from "./Counter"
import {render, screen} from '@testing-library/react'

describe('counter', ()=>{
    it("checking the intial value of count is 0",()=>{
        render(<Counter initialValue = {0}/>);
        const selectedElement = screen.getByRole('count')
        const checkCount = Number(selectedElement.textContent)
        expect(checkCount).toBe(0)
    })
})