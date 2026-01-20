import { useState } from 'react'
import Checkbox from './checkbox.tsx'

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
            <div>
                {pages.map((pageNum) => (
                    <Checkbox key={pageNum} label={`Page ${pageNum}`} />
                ))}
            </div>
            <div>

            </div>
        </>
    )
}

export default Container