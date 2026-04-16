import {useAppSelector} from "../../../../store/hooks.ts";
import ToggleSwitch from "../../../../components/ToggleSwitch/ToggleSwitch.tsx";
import './styles.css';
import type {FC} from "react";

interface IRoleSwitcher {
    handleToggleRole: () => void;
}

const RoleSwitcher: FC<IRoleSwitcher> = ({handleToggleRole}) => {
    const {roleSwitcher} = useAppSelector(store => store.userSlice);

    return (
        <div className="role-switcher">
            <h3 className="role-switcher__text">User</h3>
            <ToggleSwitch checked={roleSwitcher === "manager"} onChange={handleToggleRole}/>
            <h3 className="role-switcher__text">Manager</h3>
        </div>
    );
};

export default RoleSwitcher;