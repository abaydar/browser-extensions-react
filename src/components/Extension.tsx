import './Extension.css'

export interface ExtensionProps {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

const Extension = ({ logo, name, description, isActive }: ExtensionProps) => {
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

export default Extension;