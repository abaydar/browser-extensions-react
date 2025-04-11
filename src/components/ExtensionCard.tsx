import './ExtensionCard.css'

export interface ExtensionCardProps {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

const ExtensionCard = ({ logo, name, description, isActive }: ExtensionCardProps) => {
    return (
        <div>
            <img src={logo} alt={`${name}-logo`}/>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>Delete</button>
            <input type="checkbox" checked={isActive}/>
        </div>
    )
}

export default ExtensionCard;