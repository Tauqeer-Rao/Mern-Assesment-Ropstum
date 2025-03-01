import React from 'react'

const StatCard = ({ value, label }) => {
    return (
        <div className="flex flex-col gap-3 text-center sm:text-left">
            <p className="text-3xl sm:text-4xl md:text-[40px] leading-[48px] base_color font-medium font-frank_luhi">
                {value}
            </p>
            <p className="text-base sm:text-lg">{label}</p>
        </div>
    );
};

export default StatCard