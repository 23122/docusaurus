---
sidebar_position: 3
---

# 수기결제요청(비인증)

수기결제를 요청하는 예시입니다.

:::info
테스트요청주소 : https://testpgapi2.korpay.com/api/test/payAppTest <Green>`POST`</Green> <br/>
**위주소는 테스트 주소임으로 실연동과는 차이가 있을 수 있습니다.**
:::
## 파라미터 정보


### 요청 파라미터
---
**ordNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
주문번호

---
**mkey** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
MID 암호화키

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**goodsAmt** <Green>**String**</Green> <Gray>`12byte`</Gray><br/>
승인금액

---
**cardNo** <Green>**String**</Green> <Gray>`13byte`</Gray><br/>
카드번호

---
**expireYymm** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
카드번호 유효기간(yyMM)

---
**quotaMon** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
할부기간(00(일시불), 01, 02...)

---
**buyer_nm** <Green>**String**</Green> <Gray>`50byte`</Gray><br/>
구매자명

---
**goodsNm** <Green>**String**</Green> <Gray>`50byte`</Gray><br/>
상품명

---
**ordHp** <Green>**String**</Green> <Gray>`15byte`</Gray><br/>
구매자 휴대폰 번호(01012345678)

---
**hashKey** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
해시키(sha256(mid+amt) 영어문자 소문자)



### 응답 파라미터
---
**res_code** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
응답값(0000: 정상 이외의값 에러)

---
**res_msg** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결과메세지

---
**APP_NO** <Green>**String**</Green> <Gray>`16byte`</Gray><br/>
승인번호(12345678)

---
**APP_DATE** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
승인일시(yyyyMMddHHmmss)

---
**VAN_CP_CD** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
카드 발급사

---
**VAN_ISS_CP_CD** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
카드 매입사


## 결제 요청 예시

결제 요청 예시

```shell title="요청예시"
curl --location --request POST 'https://testpgapi2.korpay.com/api/test/payAppTest' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "ordNo":"123456789112345678911234567891",
    "mkey":"G/pYro4XipgrmecKdlvWwkSfGcg4ynESEMvFfX9pKRdSe4DeD8Zrit0erZM61aXZkiplylpIuEkvLYhbRPDPhA==",
    "mid":"ktest5578m",
    "goodsAmt":"5000",
    "cardNo":"5236120116287096",
    "expireYymm":"2301",
    "quotaMon":"00",
    "buyer_nm":"코페이",
    "goodsNm":"결제테스트",
    "ordHp":"01012345678",
    "hashKey":""
}'
```


```json title="응답예시"
{
    "res_code": "0000",
    "res_msg": "카드 결제 성공",
    "APP_DATE": "20210615173045",
    "APP_NO": "30042320",
    "VAN_ISS_CP_CD": "국민카드",
    "VAN_CP_CD": "국민카드"
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
