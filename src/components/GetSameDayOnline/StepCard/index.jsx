import React from 'react'

const StepCard = ({ step, title, description, align = "left", center = false }) => {
    return (
        <div
            className={`bg-white ring-1 ring-[#49C7AB] p-6 rounded-2xl w-full ${center ? "max-w-[683px] text-center" : "max-w-[477px]"
                } ${align === "right" && !center ? "ml-auto" : ""}`}
        >
            <p className="text-lg font-medium secondary_color">
                {step} - {title}
            </p>
            <p className="text-base font-normal description_color">{description}</p>
        </div>
    );
};

export default StepCard