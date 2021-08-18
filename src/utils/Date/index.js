const getChatTime = (date) =>{
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`;
};

const getDateChat = (oldDate) =>{
    const year = oldDate.getFullYear();
    const mounth = oldDate.getMonth() + 1;
    const date = oldDate.getDate();

    return `${year}-${mounth}-${date}`;
};

export {getChatTime, getDateChat};
