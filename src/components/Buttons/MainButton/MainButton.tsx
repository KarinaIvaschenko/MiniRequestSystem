import type {CSSProperties, FC} from "react";
import './styles.css';

interface IMainButton {
    text?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    stylesBtn?: CSSProperties;
    stylesText?: CSSProperties;
    icon?: string;
    altIcon?: string;
    stylesIcon?: CSSProperties;
    disabled?: boolean;
}

const MainButton: FC<IMainButton> = ({
                                         text,
                                         onClick,
                                         type = "button",
                                         stylesBtn,
                                         stylesText,
                                         icon,
                                         altIcon,
                                         stylesIcon,
                                         disabled
                                     }) => {
    return (
        <button className={`main-button ${disabled ? 'disabled' : ''}`} type={type} onClick={onClick} style={stylesBtn}
                disabled={disabled}>
            {icon && <img src={icon} alt={altIcon} height={20} width={20} style={stylesIcon}/>}
            {text && <p className="main-button__text" style={stylesText}>{text}</p>}
        </button>
    );
};

export default MainButton;