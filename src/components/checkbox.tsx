function Checkbox({ label = "All Pages", checked, onChange }: { label?: string; checked?: boolean; onChange?: () => void }) {
    return (
        <div className="checkbox-container">
            <span className="text">{label}</span>

            <input
                type="checkbox"
                className="checkbox-input"
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}

export default Checkbox