import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const OverlayBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-60 z-[9998] transition-opacity duration-300"
                onClick={handleClose}
            />

            {/* Banner Container */}
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
                <div className="relative animate-fadeIn">
                    {/* Banner Image Container - Square dimensions with rounded corners */}
                    <div
                        className="relative bg-white shadow-2xl"
                        style={{
                            width: '400px',
                            height: '400px',
                            maxWidth: '85vw',
                            maxHeight: '85vw',
                            borderRadius: '24px',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Close Button - Inside top-right of image */}
                        <button
                            onClick={handleClose}
                            className="absolute bg-white hover:bg-red-50 text-red-600 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
                            aria-label="Close banner"
                            style={{
                                zIndex: 99999,
                                top: '16px',
                                right: '16px',
                                width: '48px',
                                height: '48px',
                                border: '3px solid #dc2626',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <AiOutlineClose className="w-6 h-6 font-bold" style={{ strokeWidth: '2px' }} />
                        </button>

                        <img
                            src="/assets/25thOverlayBanner.png"
                            alt="25th Anniversary Banner"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                // Fallback if .png doesn't exist, try .jpg
                                const target = e.target as HTMLImageElement;
                                if (target.src.endsWith('.png')) {
                                    target.src = '/assets/25thOverlayBanner.jpg';
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverlayBanner;
