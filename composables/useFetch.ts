export const getData = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '[]');
};
export const setData = async (key: string, value: any | []) => {
    localStorage.setItem(key, value || []);
    return value;
}