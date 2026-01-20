import { useState } from 'react'

function PrimaryButton({ label = "Primary Button" }) {
    
    return (
        <button className="primary-button">
            {label}
        </button>
    )
}

export default PrimaryButton