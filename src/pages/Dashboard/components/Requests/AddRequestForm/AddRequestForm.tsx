import {type FC, type FormEventHandler, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks.ts";
import {addRequest} from "../../../../../store/requestsSlice.ts";
import MainButton from "../../../../../components/Buttons/MainButton/MainButton.tsx";
import RequestFields from "../../RequestFields/RequestFields.tsx";

interface IAddRequestForm {
    onClose: () => void;
}

const AddRequestForm: FC<IAddRequestForm> = ({onClose}) => {
    const {roleSwitcher} = useAppSelector(store => store.userSlice);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(roleSwitcher === "user" ? "1" : "");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const dispatch = useAppDispatch();

    const handleSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;
        const newRequest = {
            id: crypto.randomUUID(),
            title,
            description,
            status,
            role: roleSwitcher
        }
        dispatch(addRequest(newRequest));
        onClose();
        resetForm();
        setErrors({});
    }

    const isFormValid = () => {
        const newErrors: Record<string, string> = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!description.trim()) newErrors.description = "Description is required";
        if (roleSwitcher === "manager" && !status.trim()) newErrors.status = "Status is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setStatus("");
    }

    return (
        <form className="add-request-form" onSubmit={handleSubmitForm}>
                <RequestFields
                    title={title}
                    description={description}
                    status={status}
                    onTitleChange={setTitle}
                    onDescriptionChange={setDescription}
                    onStatusChange={setStatus}
                    showStatus={roleSwitcher === "manager"}
                    errors={errors}
                />
            <MainButton text={"Add"} type='submit' stylesBtn={{display: "flex", alignSelf: "flex-end"}}/>
        </form>
    );
};

export default AddRequestForm;