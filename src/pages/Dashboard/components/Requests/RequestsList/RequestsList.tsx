import {useAppSelector} from "../../../../../store/hooks.ts";
import type {RequestsListType} from "../../../../../helpers/types.ts";
import RequestItem from "../RequestItem/RequestItem.tsx";
import {tableTitles} from "./helpers.ts";
import {statusList} from "../../../../../helpers/statusList.ts";

const RequestsList = () => {
    const {filteredRequestsList} = useAppSelector(store => store.requestsSlice);
    const {roleSwitcher} = useAppSelector(store => store.userSlice);

    const readyRequestsList = filteredRequestsList.map((request: RequestsListType) => ({
        ...request,
        ...(roleSwitcher === "manager" && {id: request.id}),
        status: statusList.find(s => s.value === request.status)?.label || ""
    }));

    const filterRequestsList = roleSwitcher === "user" ? readyRequestsList.filter(request => request.role === roleSwitcher) : readyRequestsList;

    return (
        <div className="requests-list">
            <h2 className="requests-list__text">Requests</h2>
            <table className="requests-list__table">
                <thead>
                <tr>
                    {tableTitles(roleSwitcher).map((title, index) => (
                        <th key={`${title} - ${index}`}>{title}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {filterRequestsList.map((request: RequestsListType) => (
                    <RequestItem key={request.id} request={request}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestsList;