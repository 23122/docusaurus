---
sidebar_position: 3
---

# 빌키발급

정기결제를 요청할 수 있는 빌키를 발급하는 방법입니다.

:::info
테스트요청주소 : https://testpgapi2.korpay.com/api/test/billRegTest<Green>`POST`</Green> <br/>
**위주소는 테스트 주소임으로 실연동과는 차이가 있을 수 있습니다.**
:::
## 파라미터 정보


### 요청 파라미터
---
**ordNo** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Gray>`30byte`</Gray><br/>
주문번호

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**goodsAmt** <Green>**String**</Green> <Gray>`12byte`</Gray><br/>
상품금액

---
**goodsNm** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
상품명

---
**cardNo** <Green>**String**</Green> <Gray>`20byte`</Gray><br/>
카드번호

---
**cardPw** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
카드 비밀번호 앞 2자리

---
**cpCd** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
카드 매입사 (코드정보 확인)

---
**expireYymm** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
카드번호 유효기간(yyMM)

---
**ordAuthNo** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
개인카드 : 생년월일(yyMMdd)<br/>
법인카드 : 사업자번호(1234567890)

---
**quotaMon** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
할부기간(00(일시불), 01, 02...)

---
**ordNm** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
구매자명

---
**ordTel** <Green>**String**</Green> <Red>nullable</Red> <Gray>`15byte`</Gray><br/>
구매자 휴대폰 번호(01012345678)

---
**ordEmail** <Green>**String**</Green> <Red>nullable</Red> <Gray>`40byte`</Gray><br/>
구매자 이메일 (dev@korpay.com)

---
**ediDate** <Green>**String**</Green> <Gray>`14byte`</Gray><br/>
승인요청시간 (yyyyMMddHHmmss)

---
**hashStr** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
해시키 (sha256(mid + ediDate + amt + shopkey) 영어문자 소문자)

---
**cardTypeCd** <Green>**String**</Green> <Gray>`2byte`</Gray> <br/>
카드유형 (01 : 개인, 02 : 법인)

---
**mbsUsrId** <Green>**String**</Green> <Red>nullable</Red> <Gray>`20byte`</Gray><br/>
고객ID

---
**mbsReserved** <Green>**String**</Green> <Red>nullable</Red> <Gray>`20byte`</Gray> <br/>
예약필드

---
**reqType** <Green>**String**</Green> <Red>nullable</Red> <Gray>`1byte`</Gray> <br/>
빌키발급옵션 (0 : 빌키발행, 1 : 빌키발행+결제)

---
**noIntFlg** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray> <br/>
무이자여부(0 고정)

---
**pointFlg** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray> <br/>
포인트(0 고정)

---
**trxCd** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray><br/>
승인구분 ("0": 승인, "1": 취소)

---
**payMethod** <Green>**String**</Green> <Red>고정</Red> <Gray>`4byte`</Gray> <br/>
결제수단 (CARD: 카드결제 고정)


### 응답 파라미터
---
**resultCd** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
응답값("0000" 또는 "3001": 정상승인 이외의값 에러)

---
**resultMsg** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결과메세지

---
**payMethod** <Green>**String**</Green> <Gray>`16byte`</Gray><br/>
결제방법(CARD 고정)

---
**bid** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
빌키(KORPAY에서 발급한 빌키)

---
**appDtm** <Green>**String**</Green> <Gray>`16byte`</Gray><br/>
승인시각(yyyyMMddHHmmss)

---
**fnCd** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
카드 매입사 (코드정보 확인)

---
**ordNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
주문번호


## 결제 요청 예시

결제 요청 예시

```shell title="요청예시"
curl --location --request POST 'https://testpgapi2.korpay.com/api/test/billRegTest' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "cpCd":"02", 
    "mid":"ktest5502m", 
    "cardPw":"12", 
    "cardNo":"1234123412341234", 
    "hashStr":"", 
    "ordNm":"코페이", 
    "mbsUsrId":"test", 
    "ordNo":"552910522133041", 
    "cardTypeCd":"01", 
    "payMethod":"CARD", 
    "ediDate":"20230428144158", 
    "goodsAmt":"1004",  
    "goodsNm":"빌키발급테스트", 
    "trxCd":"0", 
    "quotaMon":"00", 
    "ordTel":"01012345678", 
    "mbsReserved":"", 
    "ordEmail":"dev@korpay.com", 
    "reqType":"1", 
    "ordAuthNo":"990101", 
    "noIntFlg":"0", 
    "pointFlg":"0", 
    "expireYymm":"1122"
  }'
```


```json title="응답예시"
{
    "resultCd ": "0000",
    "resultMsg ": "카드 결제 성공",
    "appDtm": "20210615173045",
    "payMethod": "CARD",
    "bid": "dlkajflkasd",
    "fnCd": "02",
    "ordNo": "552910522133041"
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