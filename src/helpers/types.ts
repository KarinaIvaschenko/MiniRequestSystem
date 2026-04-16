export type RequestsListType = {
    id: string;
    title: string;
    description: string;
    status: string;
    role: string;
};

export type RoleSwitcherType = "user" | "manager";

export type StatusListType = {
    value: string;
    label: string;
}

export type OptionSelectType = {
    value: string;
    label: string;
}
