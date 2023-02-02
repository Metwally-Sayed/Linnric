import React from 'react'

const OrderFormProgressBar = ({ title, subtitle, children, backgroundcolor, bordercolor, color }) => {
    return (
        <div className='flex w-full p-1 flex-col'>
            <div className='flex items-center w-full'>
                <div className='w-1/4'>
                    <div className="rounded-full w-8 h-8 flex items-center justify-center " style={{ backgroundColor: backgroundcolor, border: "1px solid " + bordercolor }}>
                        {children}
                    </div>
                </div>
                <div className='w-3/4'>
                    <h2 className='text-xl font-bold' style={{ color: color }}>{title}</h2>
                </div>
            </div>
            <div className='flex items-center w-full'>
                <div className='w-1/4'></div>
                <div className='w-3/4'>
                    <p className='text-lg font-light' style={{ color: color }}>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderFormProgressBar