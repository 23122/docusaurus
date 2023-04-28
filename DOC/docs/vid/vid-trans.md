---
sidebar_position: 3
---

# 거래내역 리스트

수기결제를 요청하는 예시입니다.

:::info
테스트요청주소 : https://testpgapi.korpay.com/api/payments/list <Green>`GET`</Green> <br/>
기술지원 (PG개발팀 : 070-7012-1447)
:::
## 파라미터 정보


### 요청 파라미터
---
**mid** <Green>**String**</Green> <Red>선택</Red> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**id** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
총판 VID (KORPAY제공 상점 VID)

---
**frDt** <Green>**String**</Green> <Gray>`8byte`</Gray><br/>
조회 기간 시작일 (yyyyDDmm)

---
**toDt** <Green>**String**</Green> <Gray>`8byte`</Gray><br/>
조회 기간 종료일 (yyyyDDmm)

---
**quotaMon** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
할부기간(00(일시불), 01, 02...)

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
승인시간 (HHmmss)

---
**ccDt** <Green>**String**</Green> <Gray>`8byte`</Gray><br/>
취소일자 (yyyyDDmm)

---
**appTm** <Green>**String**</Green> <Gray>`6byte`</Gray><br/>
취소시간 (HHmmss)

---
**goodsAmt** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
거래금액

---
**goodsNm** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
거래 상품명

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
---
**approval** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
승인금액 합계

---
**cancel** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
당일 취소금액 합계 (전취소)

---
**aftercancel** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
결제일 지난 후 취소금액 합계 (후취소)


## 거래내역 리스트 요청 예시

요청 예시

```shell title="요청예시"
curl --location https://testpgapi.korpay.com/api/payments/list?id=ctest0001a&frDt=20230120&toDt=20230127 \
  --header 'Content-Type: application/json' \
  --header 'Authorization: 87c2c7752026253cfd0284a0f6be8ad9fdf07992d1b225326bce24c628db00d4'
```


```json title="응답예시"
[
  {
    "approval": 6000,
    "beforeCancel": 4000,
    "afterCancel": 4000
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301250958070355",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30000177",
    "appDt": "20230125",
    "appTm": "095922",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "0",
    "quotaMon": "00",
    "reqNo": "2023012509C1350322",
    "ordNo": "550360315220003131"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301251011210057",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30000188",
    "appDt": "20230125",
    "appTm": "101215",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "0",
    "quotaMon": "00",
    "reqNo": "2023012510C2367520",
    "ordNo": "55036031522000313111"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301251016200802",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30000199",
    "appDt": "20230125",
    "appTm": "101659",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "0",
    "quotaMon": "00",
    "reqNo": "2023012510C2375172",
    "ordNo": "550360405060526"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301251529040244",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30000234",
    "appDt": "20230125",
    "appTm": "153015",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "0",
    "quotaMon": "00",
    "reqNo": "2023012515C1492272",
    "ordNo": "550361108080043112"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301251534510267",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30000245",
    "appDt": "20230125",
    "appTm": "153522",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "0",
    "quotaMon": "00",
    "reqNo": "2023012515C1494328",
    "ordNo": "5503611121051381188787"
  },
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
    "goodsNm": "테스트상품",
    "trxStCd": "0",
    "quotaMon": "00",
    "reqNo": "2023012515C2495098",
    "ordNo": "55036111231561"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6202m",
    "tid": "ktest6202m01012301251521030770",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인 할부확인)",
    "appCardCd": "02",
    "appNo": "30057664",
    "appDt": "20230125",
    "appTm": "152114",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "1",
    "quotaMon": "00",
    "reqNo": "2023012515C2490770",
    "ordNo": "550361102064015131"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest5902m",
    "tid": "ktest5902m01012301261009330671",
    "coNo": "2068190716",
    "coNm": "섹타_비&>인증테스트",
    "appCardCd": "01",
    "appNo": "40661106",
    "appDt": "20230126",
    "appTm": "101133",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "1",
    "quotaMon": "00",
    "reqNo": "0126C1518409",
    "ordNo": "550381226141551"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301261111450851",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30000278",
    "appDt": "20230126",
    "appTm": "111230",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "1",
    "quotaMon": "00",
    "reqNo": "2023012611C1648450",
    "ordNo": "550390207185146"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6202m",
    "tid": "ktest6202m01012301261110170278",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인 할부확인)",
    "appCardCd": "02",
    "appNo": "30057697",
    "appDt": "20230126",
    "appTm": "111029",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "1",
    "quotaMon": "00",
    "reqNo": "2023012611C1648230",
    "ordNo": "550390206004708"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301271405250449",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30036813",
    "appDt": "20230127",
    "appTm": "140605",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "2",
    "quotaMon": "00",
    "reqNo": "2023012714C2806908",
    "ordNo": "550420228221845"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6201m",
    "tid": "ktest6201m01012301271419480416",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인)",
    "appCardCd": "02",
    "appNo": "30036835",
    "appDt": "20230127",
    "appTm": "142020",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "2",
    "quotaMon": "00",
    "reqNo": "2023012714C2809368",
    "ordNo": "550420314082217"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6202m",
    "tid": "ktest6202m01012301271353470687",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인 할부확인)",
    "appCardCd": "02",
    "appNo": "30036802",
    "appDt": "20230127",
    "appTm": "135359",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "2",
    "quotaMon": "00",
    "reqNo": "2023012713C2802448",
    "ordNo": "550420224032402"
  },
  {
    "vid": "ctest0001a",
    "mid": "ktest6202m",
    "tid": "ktest6202m01012301271419220603",
    "coNo": "3153400737",
    "coNm": "글로벌페이먼트(갤컴 온라인 할부확인)",
    "appCardCd": "02",
    "appNo": "30036824",
    "appDt": "20230127",
    "appTm": "141933",
    "goodsAmt": 1000,
    "goodsNm": "테스트상품",
    "trxStCd": "2",
    "quotaMon": "00",
    "reqNo": "2023012714C2809300",
    "ordNo": "550420313225140"
  }
]
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

