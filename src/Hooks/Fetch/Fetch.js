import { useEffect, useState } from "react"

const Fetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return data;
}

export default Fetch;