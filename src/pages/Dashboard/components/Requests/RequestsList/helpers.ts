export const tableTitles = (role: string) => {
    const titles = ["Title", "Description", "Status"];
    if (role === "manager") titles.unshift("ID");
    return titles;
}