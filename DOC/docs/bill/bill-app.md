---
sidebar_position: 4
---

# 빌키결제

빌키를 사용하여 결제하는 방법입니다.

:::info
테스트요청주소 : https://testpgapi2.korpay.com/api/test/billAppTest <Green>`POST`</Green> <br/>
**위주소는 테스트 주소임으로 실연동과는 차이가 있을 수 있습니다.**
:::
## 파라미터 정보


### 요청 파라미터
---
**ordNo** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Gray>`30byte`</Gray><br/>
주문번호

---
**bid** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
빌키 (KORPAY에서 발급한 빌키)

---
**mkey** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
MID 암호화키

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**goodsAmt** <Green>**String**</Green> <Gray>`15byte`</Gray><br/>
상품금액

---
**goodsNm** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
상품명

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
**mbsUsrId** <Green>**String**</Green> <Red>nullable</Red> <Gray>`20byte`</Gray><br/>
고객ID

---
**mbsReserved** <Green>**String**</Green> <Red>nullable</Red> <Gray>`20byte`</Gray> <br/>
예약필드

---
**noIntFlg** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray> <br/>
무이자여부(0 고정)

---
**pointFlg** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray> <br/>
포인트(0 고정)

---
**trxCd** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray><br/>
승인구분 (0 고정)

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
**tid** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Gray>`30byte`</Gray> <br/>
거래고유번호 (ex : ktest5561m01032012021713340481)

---
**appNo** <Green>**String**</Green> <Gray>`8byte`</Gray> <br/>
카드사 승인번호(12345678)

---
**appDtm** <Green>**String**</Green> <Gray>`16byte`</Gray><br/>
승인시각(yyyyMMddHHmmss)

---
**fnCd** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
카드 매입사 (코드정보 확인)

---
**ordNo** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Gray>`30byte`</Gray><br/>
주문번호

---
**ordNm** <Green>**String**</Green> <Gray>`30byte`</Gray> <br/>
구매자명

---
**quota** <Green>**String**</Green> <Gray>`10byte`</Gray> <br/>
할부개월 (00 : 일시불, 01 : 1개월...)

---
**goodsNm** <Green>**String**</Green> <Gray>`100byte`</Gray> <br/>
상품명

---
**amt** <Green>**String**</Green> <Gray>`15byte`</Gray> <br/>
금액 (amt > 0)

---
**cancelYN** <Green>**String**</Green> <Red>고정</Red> <Gray>`1byte`</Gray> <br/>
취소구분 (N 고정)

## 결제 요청 예시

결제 요청 예시

```shell title="요청예시"
curl --location --request POST 'https://testpgapi2.korpay.com/api/test/billAppTest' \
  --header 'Content-Type: application/json' \
  --data-raw '{
	"bid":"dlkajflkasd",
	"mid":"ktest5502m",
	"mkey":"UZSqMunQn0l6BYeGWGK02bgp5zb6Qrgxtotu5eMxlDkjO/0MVKnkyJ+Ugz+9s/F05rMOoo78fcrUTogrNUog6g==",
	"ordNo":"55036111231561"
	"goodsNM":"빌키결제",
	"goodsAmt":"1000",
	"quotaMon":"00",
	"noIntFlg":"0",
	"pointFlg":"0",
	"ordNm":"코페이",
	"ordTel":"01012345678",
	"ordEmail":"dev@korpay.com",
	"trxCd":"0",
	"payMethod":"CARD",
	"msbUsrId":"",
	"mbsReserved":""
}'
```

```json title="응답예시"
{
    "resultCd":"0000",
    "resultMsg":"카드 결제 성공",
    "tid":"ktest6201m01012301251537000703",
    "fnCd":"02",
    "appNo":"12345678",
    "appDtm":"20230101012345",
    "amt":"1000",
    "goodsNm":"빌키결제테스트",
    "quota":"00",
    "cancelYN":"N",
    "ordNm":"코페이"
    "ordNo":"55036111231561",
    "payMethod":"CARD"
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