---
sidebar_position: 6
---

# 정기결제취소

정기결제 취소를 요청하는 예시입니다.

:::info
테스트요청주소 : https://testpgapi2.korpay.com/api/test/payCanTest <Green>`POST`</Green> <br/>
**위주소는 테스트 주소임으로 실연동과는 차이가 있을 수 있습니다.**
:::
## 파라미터 정보


### 요청 파라미터
---
**ordNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
주문번호

---
**canAmt** <Green>**String**</Green> <Gray>`12byte`</Gray><br/>
취소금액

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**canNm** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
취소자이름

---
**canMsg** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
취소사유

### 응답 파라미터
---
**res_code** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
응답값(0000: 정상 이외의값 에러)

---
**res_msg** <Green>**String**</Green> <Gray>`1000byte`</Gray><br/>
결과메세지

---
**cancel_date** <Green>**String**</Green> <Gray>`8byte`</Gray><br/>
취소날짜(yyyyMMdd)

---
**cancel_time** <Green>**String**</Green> <Gray>`6byte`</Gray><br/>
취소시간(hhmmss)


## 취소 요청 예시

취소 요청 예시

```shell title="요청예시"
curl --request POST \
  --url https://testpgapi2.korpay.com/api/cancel  \
  --header 'Content-Type: application/json' \
  --data '{"mid":"ktest5502m","ordNo","123456789112345678911234567891","canNm":"코페이","canMsg":"취소테스트","canAmt":"5000"}'
```


```json title="응답예시"
{
    "res_code": "0000",
    "res_msg": "취소 성공",
    "cancel_date": "20230101",
    "cancel_time": "141249"
}
```
export const Green = ({children}) => (
    <span
        style={{
        color:"#00A661"
    }}>
        {children}
    </span>
);

export const Gray = ({children}) => (
    <span
        style={{
        color:"#898989"
    }}>
        {children}
    </span>
);
