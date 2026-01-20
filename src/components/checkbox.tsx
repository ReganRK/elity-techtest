import { useState } from 'react'

function Checkbox({ label = "All Pages" }) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <label className="checkbox-container">
            <span className="text">{label}</span>

            <input
                type="checkbox"
                className="checkbox-input"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />

            <span className="checkbox-box"></span>
        </label>
    )
}

export default Checkbox