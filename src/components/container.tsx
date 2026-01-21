import { useState } from 'react'
import Checkbox from './checkbox.tsx'
import PrimaryButton from './primarybutton.tsx'

function Container() {
    //set how many checkbox
    const page_nunber = 6
    const pages = Array.from({ length: page_nunber }, (_, i) => i + 1);

    // to manage checked state of individual checkboxes and all pages checkbox
    const [checkedPages, setCheckedPages] = useState<number[]>([])

    const allChecked = checkedPages.length === pages.length

    // toggle All Pages
    const handleToggleAll = () => {
        if (allChecked) {
            setCheckedPages([]) // uncheck all
        } else {
            setCheckedPages(pages) // check all
        }
    }

    // toggle single page
    const handleTogglePage = (pageNum: number) => {
        setCheckedPages(prev => {
            if (prev.includes(pageNum)) {
                return prev.filter(p => p !== pageNum)
            } else {
                return [...prev, pageNum]
            }
        })
    }

    return (
        <>
            <div className='component-container'>
                <Checkbox label="All Pages" checked={allChecked} onChange={handleToggleAll}/>
                <hr className='divider' />
                <div className="checkbox-scroll">
                    {pages.map((pageNum) => (
                        <Checkbox key={pageNum} label={`Page ${pageNum}`} checked={checkedPages.includes(pageNum)} onChange={() => handleTogglePage(pageNum)}/>
                    ))}
                </div>
                <hr className='divider' />
                <div className='button-container'>
                    <PrimaryButton label="Done" />
                </div>
            </div>
        </>
    )
}

export default Container