import type {FC} from "react";
import './styles.scss';

interface IToggleSwitch {
    checked: boolean;
    onChange: () => void;
}

const ToggleSwitch: FC<IToggleSwitch> = ({checked, onChange}) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <span className="slider round"></span>
        </label>
    );
};
export default ToggleSwitch;