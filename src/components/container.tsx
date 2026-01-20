import { useState } from 'react'
import Checkbox from './checkbox.tsx'
import PrimaryButton from './primarybutton.tsx'

function Container() {
    const [count, setCount] = useState(0)
    //set how many checkbox
    const page_nunber = 6
    const pages = Array.from({ length: page_nunber }, (_, i) => i + 1);
    return (
        <>
            <div>
                <Checkbox label="All Pages" />
            </div>
            <hr />
            <div className="checkbox-scroll">
                {pages.map((pageNum) => (
                    <Checkbox key={pageNum} label={`Page ${pageNum}`} />
                ))}
            </div>
            <hr />
            <div>
                <PrimaryButton label="Done" />
            </div>
        </>
    )
}

export default Container