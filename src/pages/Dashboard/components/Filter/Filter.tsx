import { useAppDispatch, useAppSelector } from "../../../../store/hooks.ts";
import { useEffect, useState } from "react";
import { resetFilteredRequestsList, setFilteredRequestsList } from "../../../../store/requestsSlice.ts";
import MainButton from "../../../../components/Buttons/MainButton/MainButton.tsx";
import { statusList } from "../../../../helpers/statusList.ts";
import './styles.scss';

const Filter = () => {
    const { requestsList } = useAppSelector(store => store.requestsSlice);
    const dispatch = useAppDispatch();

    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!status) {
            dispatch(resetFilteredRequestsList());
            return;
        }

        const filtered = requestsList.filter((req) => req.status === status);
        dispatch(setFilteredRequestsList(filtered));
    }, [status, requestsList, dispatch]);

    const resetFilter = () => {
        setStatus("");
    };

    return (
        <div className="filter">
            <div className="filter__statuses">
                {statusList.map((s) => (
                    <MainButton
                        key={s.value}
                        text={s.label}
                        onClick={() => setStatus(s.value)}
                        stylesBtn={status === s.value ? { opacity: 1 } : { opacity: 0.6 }}
                        stylesText={{textTransform: "capitalize"}}
                    />
                ))}
            </div>
            <div className="filter__btn">
                <MainButton onClick={resetFilter} text="All"  stylesBtn={!status ? { opacity: 1 } : { opacity: 0.6 }}/>
            </div>
        </div>
    );
};

export default Filter;