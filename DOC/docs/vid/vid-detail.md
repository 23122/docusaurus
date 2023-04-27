---
sidebar_position: 4
---

# 거래상세내역

수기결제를 요청하는 예시입니다.

:::info
테스트요청주소 : https://testpgapi.korpay.com/api/payments/detail <Green>`GET`</Green> <br/>
기술지원 (PG개발팀 : 070-7012-1447)
:::
## 파라미터 정보


### 요청 파라미터
---
**id** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
총판 ID (KORPAY제공 상점 VID)


:::tip
`tid`, `appNo` 중 택 1
:::

**tid** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Red>택 1</Red> <Gray>`30byte`</Gray><br/>
거래고유번호 (ex : ktest5561m01032012021713340481)

---
**appNo** <Green>**String**</Green> <Red>택 1</Red> <Gray>`20byte`</Gray><br/>
카드사 승인번호(12345678)


### 응답 파라미터
---
**vid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
총판 ID (KORPAY제공 상점 VID)

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**tid** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Gray>`30byte`</Gray><br/>
거래고유번호 (ex : ktest5561m01032012021713340481)

---
**coNo** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
사업자 번호 (1234567890)

---
**coNm** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
사업자 상호명

---
**appCardCd** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
카드 매입사 (코드정보 확인)

---
**appNo** <Green>**String**</Green> <Gray>`20byte`</Gray><br/>
카드사 승인번호(12345678)

---
**appDt** <Green>**String**</Green> <Gray>`8byte`</Gray><br/>
승인일자 (yyyyDDmm)

---
**appTm** <Green>**String**</Green> <Gray>`6byte`</Gray><br/>
승인시간 (hhMMss)

---
**ccDt** <Green>**String**</Green> <Gray>`8byte`</Gray><br/>
취소일자 (yyyyDDmm)

---
**appTm** <Green>**String**</Green> <Gray>`6byte`</Gray><br/>
취소시간 (hhMMss)

---
**goodsAmt** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
거래금액

---
**goodsAmt** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
거래 공급가액

---
**goodsVat** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
거래 부가세

---
**goodsNm** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
거래 상품명

---
**stmtCycleCd** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
정산주기

---
**trxStCd** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
거래상태코드(0:승인,1:전취소,2:후취소)

---
**quotaMon** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
할부개월 (00 : 일시불, 01 : 1개월...)

---
**reqNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
거래요청번호

---
**ordNo** <Green>**String**</Green> <Gray>`40byte`</Gray><br/>
주문번호 (12016120230411100300)

---
**catId** <Green>**String**</Green> <Gray>`20byte`</Gray><br/>
단말기 CAT_ID (단말기 터미널 아이디, 온라인 거래 일때는 가맹점 MID)

---


## 거래 상세내역 요청 예시

요청 예시

```shell title="요청예시"
curl --location 'https://testpgapi.korpay.com/api/payments/detail?id=ctest0001a&tid=ktest6201m01012301251537000703' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: 87c2c7752026253cfd0284a0f6be8ad9fdf07992d1b225326bce24c628db00d4'
```


```json title="응답예시"
{
  "vid": "ctest0001a",
  "mid": "ktest6201m",
  "tid": "ktest6201m01012301251537000703",
  "coNo": "3153400737",
  "coNm": "글로벌페이먼트(갤컴 온라인)",
  "appCardCd": "02",
  "appNo": "30000256",
  "appDt": "20230125",
  "appTm": "153737",
  "goodsAmt": 1000,
  "goodsSplAmt": 909,
  "goodsVat": 91,
  "goodsNm": "테스트상품",
  "stmtCycleCd": "D1",
  "trxStCd": "0",
  "quotaMon": "00",
  "reqNo": "2023012515C2495098",
  "ordNo": "55036111231561"
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

export const Red = ({children}) => (
<span
style={{
color:"#DB0010"
}}>
{children}
</span>
);

export const Yellow = ({children}) => (
<span
style={{
color:"rgb(255, 196, 38)"
}}>
{children}
</span>
);

export const Blue = ({children}) => (
<span
style={{
color:"rgb(83, 140, 233)"
}}>
{children}
</span>
);
