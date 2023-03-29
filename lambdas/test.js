const data = [{ "name": "Bank of Honolulu", "share": 7.142857142857142 }, { "name": "National State Bank of Metropolis", "share": 21.428571428571427 }, { "name": "First Alliance Bank & Trust Co.", "share": 7.142857142857142 }, { "name": "Malta National Bank", "share": 14.285714285714285 }, { "name": "Superior Bank, FSB", "share": 21.428571428571427 }, { "name": "Sinclair National Bank", "share": 7.142857142857142 }, { "name": "Hamilton Bank, NA", "share": 14.285714285714285 }, { "name": "Bank of Sierra Blanca", "share": 7.142857142857142 }, { "name": "Oakwood Deposit Bank Co.", "share": 14.285714285714285 }, { "name": "NextBank, NA", "share": 7.142857142857142 }, { "name": "Net 1st National Bank", "share": 14.285714285714285 }, { "name": "New Century Bank", "share": 7.142857142857142 }, { "name": "Connecticut Bank of Commerce", "share": 7.142857142857142 }, { "name": "Universal Federal Savings Bank", "share": 21.428571428571427 }]


const mapRawData = (rawData) => {
    const totalCount = rawData.length;
    const secondColumnCounts = {};

    // Count the number of times the second field value appears in the objects
    for (let i = 0; i < rawData.length; i++) {
        const value = rawData[i][Object.keys(rawData[i])[1]];
        secondColumnCounts[value] = secondColumnCounts[value] ? secondColumnCounts[value] + 1 : 1;
    }

    // Create a new array of objects with the first and second columns
    const newArray = [];
    for (let i = 0; i < rawData.length; i++) {
        const firstColumnValue = rawData[i][Object.keys(rawData[i])[0]];
        const secondColumnValue = (secondColumnCounts[rawData[i][Object.keys(rawData[i])[1]]] / totalCount) * 100;
        newArray.push({
            "name": firstColumnValue,
            "share": secondColumnValue
        });
    }
    console.log(newArray);
    return newArray;
}

mapRawData(data);