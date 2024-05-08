export const addItem = (newitem, setFunc) => {
    setFunc(
        oldItems => [
            ...oldItems,
            newitem
        ]);
};

export const updateItem = (index, key, value, setFunc) => {
    setFunc(
        oldItems => [
            oldItems.slice(0, index),
            {
                ...oldItems[index],
                [key]: value
            },
            oldItems.slice(index + 1, oldItems.length)
        ]
    )
};

export const deleteItem = (index, setFunc) => {
    setFunc(
        oldItems => [
            oldItems.slice(0, index),
            oldItems.slice(index+1, oldItems.length)
        ]
    )
};