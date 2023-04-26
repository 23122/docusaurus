---
sidebar_position: 4
---

# 수기결제요청(구인증)

수기결제를 요청하는 예시입니다.

:::warning
테스트요청주소 : https://testpgapi2.korpay.com/api/manualpay <Green>`POST`</Green> <br/>
실제 결제가 이뤄지기 때문에 테스트시 연락 선행 필수 (PG개발팀 : 070-7012-1447)
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
KORPAY발급 관리계정

---
**goodsAmt** <Green>**String**</Green> <Gray>`12byte`</Gray><br/>
승인금액

---
**cardNo** <Green>**String**</Green> <Gray>`20byte`</Gray><br/>
카드번호

---
**expireYymm** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
카드번호 유효기간(yyMM)

---
**quotaMon** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
할부기간(00(일시불), 01, 02...)

---
**goodsAmt**  <Green>**String**</Green> <Gray>`12byte`</Gray><br/>
승인금액

---
**buyer_nm** <Green>**String**</Green> <Gray>`50byte`</Gray><br/>
구매자명

---
**goodsNm** <Green>**String**</Green> <Gray>`50byte`</Gray><br/>
상품명

---
**ordHp** <Green>**String**</Green> <Gray>`20byte`</Gray><br/>
구매자 휴대폰 번호(01012345678)

---
**certNo** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
개인카드 : 생년월일(yyMMdd)<br/>
법인카드 : 사업자번호(1234567890)

---
**certPw** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
카드 비밀번호 앞 2자리

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
curl --request POST \
  --url https://testpgapi2.korpay.com/api/manualpay \
  --header 'Content-Type: application/json' \
  --data '{"ordNo":"123456789112345678911234567891","mkey":"G/pYro4XipgrmecKdlvWwkSfGcg4y","mid":"ktest5578m","goodsAmt":"5000","cardNo":"1234123412341234","expireYymm":"2301","quotaMon":"00","buyer_nm":"코페이","goodsNm":"결제테스트","ordHp":"01012345678","hashKey":"","certPw":"12","certNo":"990101"}'
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
