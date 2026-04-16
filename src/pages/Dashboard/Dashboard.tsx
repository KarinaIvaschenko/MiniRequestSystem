import './styles.scss';
import RoleSwitcher from "./components/RoleSwitcher/RoleSwitcher.tsx";
import MainButton from "../../components/Buttons/MainButton/MainButton.tsx";
import Requests from "./components/Requests/Requests.tsx";
import {useState} from "react";
import AddRequestForm from "./components/Requests/AddRequestForm/AddRequestForm.tsx";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import Filter from "./components/Filter/Filter.tsx";
import {setRoleSwitcher} from "../../store/userSlice.ts";
import {resetFilteredRequestsList} from "../../store/requestsSlice.ts";

const Dashboard = () => {
    const {roleSwitcher} = useAppSelector(store => store.userSlice);
    const {requestsList} = useAppSelector(store => store.requestsSlice);

    const [openAddRequestForm, setOpenAddRequestForm] = useState<boolean>(false);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const isManager = roleSwitcher === "manager";

    const handleToggleRole = () => {
        dispatch(setRoleSwitcher(!isManager ? "manager" : "user"));
        setOpenFilter(false);
        setOpenAddRequestForm(false);
        dispatch(resetFilteredRequestsList());
    };

    const handleAddRequest = () => {
        setOpenAddRequestForm(!openAddRequestForm);
    }

    const handleOpenFilter = () => {
        const next = !openFilter;
        setOpenFilter(next);
        if (!next) dispatch(resetFilteredRequestsList());
    }

    return (
        <div className="container dashboard">
            <RoleSwitcher handleToggleRole={handleToggleRole}/>
            <div className="dashboard__requests">
                <div className="dashboard__add-request add-request">
                    <MainButton
                        text="Add Request"
                        onClick={handleAddRequest}
                        icon={"/images/plus.png"}
                        altIcon={"Plus"}
                        stylesIcon={{filter: "brightness(0) invert(1)"}}
                        stylesText={{textTransform: "uppercase"}}/>
                    {isManager && requestsList.length > 0 &&  (
                        <div className="add-request__filter">
                            <MainButton onClick={handleOpenFilter} icon={'/images/filter.png'} altIcon={"Filter"}
                                        stylesIcon={{filter: "brightness(0) invert(1)"}}/>
                            {openFilter && (
                                <Filter/>
                            )}
                        </div>
                    )}
                    {openAddRequestForm && <AddRequestForm onClose={handleAddRequest}/>}
                </div>
                <Requests/>
            </div>
        </div>
    );
};

export default Dashboard;