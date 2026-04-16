import {useAppSelector} from "../../../../store/hooks.ts";
import RequestsList from "./RequestsList/RequestsList.tsx";
import './styles.scss';

const Requests = () => {
    const {filteredRequestsList} = useAppSelector(store => store.requestsSlice);

    return (
        <div className="requests">
            {filteredRequestsList.length > 0 ? (
                <RequestsList/>
            ) : (
                <h2 className="requests__text">No requests found</h2>
            )}
        </div>
    );
};

export default Requests;