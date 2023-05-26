import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import axios from 'axios';
// Add react-live imports you need here

function SugiAppChecker(json) {
  const [status, setStatus] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  async function appCheck() {
    try {
      setTimeLeft(10);
      // todo
      const response = await fetch("https://testpgapi2.korpay.com/api/test/payAppTest", {
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

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
      <div>
        <button
            className='httpBtn'
            onClick={appCheck}
            disabled={timeLeft > 0}
        >
          {timeLeft > 0 ? `결제 (${timeLeft}s)` : '결제'}
        </button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

function SugiCanChecker(json) {
  const [status, setStatus] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  async function canCheck() {
    try {
      setTimeLeft(10);
      // todo
      const response = await fetch("https://testpgapi2.korpay.com/api/test/payCanTest", {
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

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
      <div>
        <button
            className='httpBtn'
            onClick={canCheck}
            disabled={timeLeft > 0}
        >
          {timeLeft > 0 ? `취소 (${timeLeft}s)` : '취소'}
        </button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

function BillRegChecker(json) {
  const [status, setStatus] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  async function billRegCheck() {
    try {
      setTimeLeft(10);
      // todo
      const response = await fetch("https://testpgapi2.korpay.com/api/test/billRegTest", {
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

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
      <div>
        <button
            className='httpBtn'
            onClick={canCheck}
            disabled={timeLeft > 0}
        >
          {timeLeft > 0 ? `생성 (${timeLeft}s)` : '생성'}
        </button>
        {status && <div>결과값: {status}</div>}
      </div>
  );
}

function BillAppChecker(json) {
  const [status, setStatus] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  async function billAppCheck() {
    try {
      setTimeLeft(10);
      // todo
      const response = await fetch("https://testpgapi2.korpay.com/api/test/billAppTest", {
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
        <button
            className='httpBtn'
            onClick={canCheck}
            disabled={timeLeft > 0}
        >
          {timeLeft > 0 ? `결제 (${timeLeft}s)` : '결제'}
        </button>
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
