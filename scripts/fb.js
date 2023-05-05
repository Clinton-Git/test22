import Script from "next/script";
import { useState, useEffect } from "react";

export const applyFBScript = () => {
    const [px, setPx] = useState(null);
    const [imgUrl, setImgUrl] = useState(
        `https://www.facebook.com/tr?id=${px}&ev=PageView&noscript=1`
    );

    if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        if (!px) {
            setPx(urlParams.get("px"));
        }
    }

    useEffect(() => {
        setImgUrl(`https://www.facebook.com/tr?id=${px}&ev=PageView&noscript=1`);
    }, [px]);

    return (
        <>
            <Script id="fb">
                {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${px});
        fbq('track', 'PageView');`}
            </Script>

            <img
                id="fb-img"
                height="1"
                width="1"
                style={{ display: "none" }}
                src={imgUrl}
            />
        </>
    );
};
