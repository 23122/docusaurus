import React, { useState } from 'react';

function JsonCheck() {
    const [jsonData, setJsonData] = useState('');
    const [isValidJson, setIsValidJson] = useState('');

    const exampleData = {
        "ordNo":"30",
        "mkey":"100",
        "mid":"10",
        "goodsAmt":"12",
        "cardNo":"13",
        "expireYymm":"4",
        "quotaMon":"2",
        "buyer_nm":"50",
        "goodsNm":"50",
        "ordHp":"15",
        "hashKey":"100"
    };

    function handleJsonChange(event) {
        const value = event.target.value;
        setJsonData(value);
        let isValid = '';
        try {
            const parsedData = JSON.parse(value);
            for (const key in parsedData) {
                if (exampleData.hasOwnProperty(key) && exampleData[key].toString() >= parsedData[key].toString().length) {
                    isValid = "JSON형식에 문제가 없습니다.";
                } else if(!exampleData.hasOwnProperty(key)) {
                    isValid = key +" 부분에 문제가 있습니다.";
                    break;
                } else if(exampleData[key].toString() != parsedData[key].toString().length) {
                    isValid = parsedData[key].toString()+" 부분에 문제가 있습니다.";
                    break;
                }
            }
        } catch (error) {
            // do nothing
        }
        setIsValidJson(isValid);
    }

    return (
        <div>
            <textarea value={jsonData} onChange={handleJsonChange} />
                {isValidJson &&<div>{isValidJson}</div>}
        </div>
    );
}

export default JsonCheck;