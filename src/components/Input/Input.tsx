import type {ChangeEvent, FC} from "react";
import './styles.scss';
import type {OptionSelectType} from "../../helpers/types.ts";

export interface IInput {
    id: string;
    label: string;
    value: string;
    error?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    isSelect?: boolean;
    isOpenSelect?: boolean;
    onSelect?: (option: OptionSelectType) => void;
    options?: OptionSelectType[];
}

const Input: FC<IInput> = ({
                               id,
                               label,
                               value,
                               error,
                               onChange,
                               onClick,
                               isSelect,
                               onSelect,
                               isOpenSelect,
                               options,
                               ...props
                           }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id} className="input-label">
                {label}
            </label>

            <div className="input-field">
                <input
                    id={id}
                    name={id}
                    className="input"
                    value={value}
                    onChange={onChange}
                    onClick={isSelect ? onClick : undefined}
                    readOnly={isSelect}
                    type="text"
                    {...props} />

                {isSelect && (
                    <span className={`input-arrow ${isOpenSelect ? 'input-arrow--open' : ''}`}>▼</span>
                )}
            </div>

            {isSelect && isOpenSelect && options && (
                <ul className="input-select">
                    {options.map((option, index) => (
                        <li key={`${index}-${option.value}-${option.label}`} className="input-select__option" onClick={() => onSelect?.(option)}>
                            <p className="input-select__option-text">{option.label}</p>
                        </li>
                    ))}
                </ul>
            )}

            {error && <span className="input-error">{error}</span>}
        </div>
    );
};

export default Input;