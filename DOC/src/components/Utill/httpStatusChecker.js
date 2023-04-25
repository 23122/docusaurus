import React, { useState } from 'react';
import axios from 'axios';

function HttpStatusChecker() {
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState('');
    const [option, setOption] = useState('');

    async function checkStatus() {
        try {
            let jsonData = {};
            switch (option) {
                case '': alert('항목을 선택하세요');
                    return false;
                    break;
                case '1':
                    jsonData = {
                        gid: "test11110g",
                        remainAmt: "0",
                        cancelYN: "N",
                        mid: "ktest6111m",
                        amt: "1000",
                        appNo: "30059295",
                        ccDnt: "",
                        buyerId: "",
                        cardNo: "12345678****123*",
                        tid: "ktest6111m01032304111003000874",
                        vid: "ctest0001a",
                        tPhone: "",
                        ordNm: "",
                        catId: "1234567890",
                        connCd: "0003",
                        ordNo: "12016120230411100300",
                        ediNo: "2023041110C1359126",
                        payMethod: "CARD",
                        quota: "00",
                        appDtm: "20230411100300",
                        goodsName: "1234567890",
                        appCardCd: "02",
                        notiDnt: "20230411101512",
                    };
                    break;
                case '2':
                    jsonData = {
                        "cashCrctFlg": "",
                        "gid": "test11110g",
                        "acqCardCd": "02",
                        "lmtDay": "",
                        "mid": "ktest5599m",
                        "amt": "1000",
                        "appNo": "30039792",
                        "ccDnt": "",
                        "cardNo": "12345678****1234",
                        "tid": "ktest5599m01012304111010250264",
                        "hashStr": "1cac0a74c232eae141dc7abc6ab04393c9594123b68416e05c3cd19281805118",
                        "vid": "ctest0001a",
                        "ordNm": "홍길*",
                        "connCd": "0005",
                        "ordNo": "552440430050704",
                        "payMethod": "CARD",
                        "fnNm": "국민",
                        "quota": "00",
                        "appDtm": "20230411101055",
                        "ediDate": "20230411101211",
                        "usePointAmt": "0",
                        "authType": "01",
                        "goodsName": "테스트상품",
                        "appCardCd": "02",
                        "charSet": "1",
                        "resultCd": "3001",
                        "cancelYN": "N",
                        "cardType": "01",
                        "resultMsg": "카드 결제 성공",
                        "catId": "ktest5599m",
                        "vacntNo": "",
                        "ediNo": "3040229491",
                        "socHpNo": "",
                        "notiDnt": "20230411101211"
                    };
                    break;
                case '3':
                    jsonData ={
                        "gid": "test11110g",
                        "remainAmt": "0",
                        "cancelYN": "Y",
                        "mid": "ktest6111m",
                        "amt": "1000",
                        "appNo": "30059295",
                        "ccDnt": "20230411102609",
                        "buyerId": "",
                        "cardNo": "12345678****123*",
                        "tid": "ktest6111m01032304111003000874",
                        "vid": "ctest0001a",
                        "tPhone": "",
                        "ordNm": "",
                        "catId": "1234567890",
                        "connCd": "0003",
                        "ordNo": "12016120230411100300",
                        "ediNo": "2023041110C1359126",
                        "payMethod": "CARD",
                        "quota": "00",
                        "appDtm": "20230411100300",
                        "goodsName": "1234567890",
                        "appCardCd": "02",
                        "notiDnt": "20230411102637"
                    };
                    break;
                case '4':
                    jsonData={
                        "cashCrctFlg": "",
                        "gid": "test11110g",
                        "acqCardCd": "02",
                        "lmtDay": "",
                        "mid": "ktest5599m",
                        "amt": "1000",
                        "appNo": "30039792",
                        "ccDnt": "20230411101521",
                        "cardNo": "12345678****1234",
                        "tid": "ktest5599m01012304111010250264",
                        "hashStr": "8eab4a185ae61d0ecf63dfc548913134d2eb0c49d2ad83732e2ba26d1785bc54",
                        "vid": "ctest0001a",
                        "ordNm": "홍길*",
                        "connCd": "0005",
                        "ordNo": "552440430050704",
                        "payMethod": "CARD",
                        "fnNm": "국민",
                        "quota": "00",
                        "appDtm": "20230411101055",
                        "ediDate": "20230411101637",
                        "usePointAmt": "0",
                        "authType": "01",
                        "goodsName": "테스트상품",
                        "appCardCd": "02",
                        "charSet": "1",
                        "resultCd": "2001",
                        "cancelYN": "Y",
                        "cardType": "01",
                        "resultMsg": "취소 성공",
                        "catId": "ktest5599m",
                        "vacntNo": "",
                        "ediNo": "3040229491",
                        "socHpNo": "",
                        "notiDnt": "20230411101637"
                    };
                    break;
                default:
                    jsonData={};
                    break;
            }
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });
            setStatus(`${response.status} ${response.statusText}`);
        } catch (error) {
            console.error(error);
            setStatus('Error');
        }
    }


    return (
        <div>
            <div>
                <select className='selecter' value={option} onChange={(event) => setOption(event.target.value)}>
                    <option value="">항목을선택하세요</option>
                    <option value="1">단말기승인</option>
                    <option value="2">온라인승인</option>
                    <option value="3">단말기취소</option>
                    <option value="4">온라인취소</option>
                </select>
            </div>
            <input
                className='http'
                type="text"
                placeholder="http부터 전송받을 URL주소를 입력해주세요."
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <button className='httpBtn' onClick={checkStatus}>노티전송</button>
            {status && <div>Status: {status}</div>}
        </div>
    );
}

export default HttpStatusChecker;

