import { useState } from 'react'

function Checkbox({ label = "All Pages" }) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className="checkbox-container">
            <span className="text">{label}</span>

            <input
                type="checkbox"
                className="checkbox-input"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </div>
    )
}

export default Checkbox