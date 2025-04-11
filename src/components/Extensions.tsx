import { useEffect, useState } from "react";
import ExtensionCard, { ExtensionCardProps } from "./ExtensionCard";
import './Extensions.css';

const Extensions = () => {
    const [extensions, setExtensions] = useState<ExtensionCardProps[]>([]);

    const getExtensions = async () => {
        try {
            const response = await fetch('./data.json');
            const data = await response.json();
            setExtensions(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getExtensions();
    }, []);

    return (
        <>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Inactive</button>
        </div>
        <div className="extensions-wrapper">
            {extensions.map((extension) => (
                <ExtensionCard name={extension.name} logo={extension.logo} description={extension.description} isActive={extension.isActive} />
            ))}
        </div>
        </>
    )
}

export default Extensions