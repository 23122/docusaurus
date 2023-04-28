import React, {useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import axios from 'axios';
// Add react-live imports you need here

function SugiAppChecker(json) {
  const [status, setStatus] = useState('');

  async function appCheck() {
    try { // todo
      console.log(json.json);
      const response = await fetch("http://localhost:8081/api/test/payAppTest", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(json.json)),
      });
      const result = await response.text();
      setStatus(result);
    } catch (error) {
      console.error(error);
      setStatus('Error');
    }
  }

  return (
      <div>
        <button className='httpBtn' onClick={appCheck}>결제</button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

function SugiCanChecker(json) {
  const [status, setStatus] = useState('');

  async function canCheck() {
    try { // todo
      console.log(json.json);
      const response = await fetch("http://localhost:8081/api/test/payCanTest", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(json.json)),
      });
      const result = await response.text();
      setStatus(result);
    } catch (error) {
      console.error(error);
      setStatus('Error');
    }
  }

  return (
      <div>
        <button className='httpBtn' onClick={canCheck}>취소</button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

function BillRegChecker(json) {
  const [status, setStatus] = useState('');

  async function billRegCheck() {
    try { // todo
      console.log(json.json);
      const response = await fetch("http://localhost:8081/api/test/billRegTest", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(json.json)),
      });
      const result = await response.text();
      setStatus(result);
    } catch (error) {
      console.error(error);
      setStatus('Error');
    }
  }

  return (
      <div>
        <button className='httpBtn' onClick={billRegCheck}>발급</button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

function BillAppChecker(json) {
  const [status, setStatus] = useState('');

  async function billAppCheck() {
    try { // todo
      console.log(json.json);
      const response = await fetch("http://localhost:8081/api/test/billAppTest", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(json.json)),
      });
      const result = await response.text();
      setStatus(result);
    } catch (error) {
      console.error(error);
      setStatus('Error');
    }
  }

  return (
      <div>
        <button className='httpBtn' onClick={billAppCheck}>결제</button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

const ReactLiveScope = {
  React,
  ...React,
  SugiAppChecker,
  SugiCanChecker,
  BillRegChecker,
  BillAppChecker,
};

export default ReactLiveScope;
