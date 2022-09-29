const addToDb = (e) => {
    let breakTime = {};

    const quantity = breakTime[e];
    if (!quantity) {
        breakTime[e] = 1;
    }
    localStorage.setItem("break-time", JSON.stringify(breakTime));
};
const getStoredTime = () => {
    let breakTime = {};
    const storedBreakTime = localStorage.getItem("break-time");
    if (storedBreakTime) {
        breakTime = JSON.parse(storedBreakTime);
    }
    return breakTime;
};
export { addToDb, getStoredTime };