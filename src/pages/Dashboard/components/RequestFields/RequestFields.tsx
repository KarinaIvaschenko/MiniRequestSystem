import {type ChangeEvent, type FC, useState} from "react";
import Input from "../../../../components/Input/Input.tsx";
import type {OptionSelectType} from "../../../../helpers/types.ts";
import {statusList} from "../../../../helpers/statusList.ts";

interface IRequestFields {
    title: string;
    description: string;
    status: string;
    onTitleChange: (e: string) => void;
    onDescriptionChange: (e: string) => void;
    onStatusChange: (e: string) => void;
    showStatus?: boolean;
    errors?: Record<string, string>
}

const RequestFields: FC<IRequestFields> = ({
                                               title,
                                               description,
                                               status,
                                               onTitleChange,
                                               onDescriptionChange,
                                               onStatusChange,
                                               showStatus,
                                               errors
                                           }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);

    const handleToggleSelect = () => setIsOpenSelect((prev) => !prev);

    const handleSelect = (option: OptionSelectType) => {
        onStatusChange(option.value);
        setIsOpenSelect(false);
    };
    return (
        <div className="add-request-form__inputs">
            <Input id="title" label="Title" value={title}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => onTitleChange(e.target.value)}
                   error={errors?.title}/>
            <Input id="description" label="Description" value={description}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => onDescriptionChange(e.target.value)}
                   error={errors?.description}/>
            {showStatus && (
                <Input
                    id="status"
                    label="Status"
                    value={statusList.find((s) => s.value === status)?.label || ""}
                    onClick={handleToggleSelect}
                    isSelect
                    isOpenSelect={isOpenSelect}
                    onSelect={handleSelect}
                    options={statusList}
                    error={errors?.status}
                />
            )}
        </div>
    );
};

export default RequestFields;