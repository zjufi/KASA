import { useState } from "react";
import "../style/collapse.css"; 

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapse-container">
            <button className="collapse-button" onClick={handleToggle}>
                <span>{title}</span>
                <img
                    src={isOpen ? "../assets_images/arrow/arrow-up.png" : "/assets_images/arrow/arrow-down.png"}
                    alt="Toggle arrow"
                    className="collapse-arrow"
                />
            </button>
            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse;
