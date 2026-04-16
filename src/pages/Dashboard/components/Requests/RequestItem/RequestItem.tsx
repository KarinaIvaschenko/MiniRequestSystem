import type {RequestsListType} from "../../../../../helpers/types.ts";
import {type FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks.ts";
import {statusList} from "../../../../../helpers/statusList.ts";
import {setRequest} from "../../../../../store/requestsSlice.ts";

interface IRequestItem {
    request: RequestsListType;
}

const RequestItem: FC<IRequestItem> = ({request}) => {
    const {roleSwitcher} = useAppSelector(store => store.userSlice);
    const dispatch = useAppDispatch();

    const currentStatusId = statusList.find((status) => status.label === request.status)?.value;
    const isManager = roleSwitcher === "manager";

    const renderTrText = () => {
        const trList = [
            {text: request.title, key: "title"},
            {text: request.description, key: "description"},
            {text: request.status, key: "status"}
        ];
        if (isManager) trList.unshift({
            text: request.id,
            key: "id"
        });

        return trList;
    }

    const handleStatusClick = () => {
        const currentIndex = statusList.findIndex((s) => s.label === request.status);
        if (currentIndex === -1) return;

        const next = statusList[currentIndex + 1];
        if (!next) return;
        dispatch(setRequest({...request, status: next.value}));
    }

    return (
        <tr>
            {renderTrText().map((item) => (
                <td
                    key={item.key}
                    onClick={item.key === "status" ? handleStatusClick : undefined}
                    style={{
                        cursor: item.key === "status" ? "pointer" : "default",
                    }}
                >
                    {item.key === "status" && isManager && Number(currentStatusId) !== 3 ? (
                        <div className="change-status">
                            <img className="change-status__img" src="/images/arrow.png" alt="change status" width={20}
                                 height={20}/>
                            <span>{item.text}</span>
                        </div>
                    ) : (
                        item.text
                    )}
                </td>
            ))}
        </tr>
    );
};

export default RequestItem;