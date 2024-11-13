import { useEffect, useState } from "react"

const DigitalClock = () => {

    const [time, setTime] = useState<string>();

    useEffect(() => {

        const options: Intl.DateTimeFormatOptions = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };

        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-US', options);
            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [])

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{time}</span>
            </div>
        </div>
    )
}

export default DigitalClock