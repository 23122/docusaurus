import React, { useState } from 'react';
import axios from 'axios';

function SugiChecker() {
    const [json, setJson] = useState('');
    const [status, setStatus] = useState('');
    const [option, setOption] = useState('');

    async function checkStatus() {
        try { // todo
            const response = await fetch("http://localhost:8081/api/test/payAppTest", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(JSON.parse(json)),
            });
            const result  = await response.text();
            setStatus(result);
        } catch (error) {
            console.error(error);
            setStatus('Error');
        }
    }

    return (
        <div>
            <textarea
                className='http'
                type="text"
                placeholder="전송할 JSON 데이터를 입력하세요"
                value={json}
                onChange={(event) => setJson(event.target.value)}
            ></textarea>
            <button className='httpBtn' onClick={checkStatus}>결제하기</button>
            {status && <div>결과값: {status}</div>}
        </div>
    );
}

export default SugiChecker;

