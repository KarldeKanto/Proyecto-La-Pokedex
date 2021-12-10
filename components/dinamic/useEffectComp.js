import React, { useEffect, useState } from 'react';

export default function useEffectAdvancedPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handlescroll = () => {
        console.log("Te gustan los easter egg ehhhh 😎🤙");
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        handlescroll();
        window.addEventListener('scroll', handlescroll);
        return () => { window.removeEventListener('scroll', handlescroll); }
    }, [])

    return (
        <div className="text-3xl text-gray-400 font-mono">
            {windowWidth}
        </div>
    )
}