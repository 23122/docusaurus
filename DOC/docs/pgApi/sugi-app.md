---
sidebar_position: 3
---

# 수기결제요청

수기결제를 요청하는 예시입니다.

- 테스트요청주소 : https://testpgapi2.korpay.com/api/manualpay POST

## 파라미터 정보


### 요청 파라미터
---
**ordNo** String size(30)

주문번호

---
**mkey** String size(100)

MID 암호화키

---
**mid** String size(10)

KORPAY발급 관리계정

---
**goodsAmt** String size(12)

승인금액

---
**cardNo** String size(20)

카드번호

---
**expireYymm** String size(4)

카드번호 유효기간(yyMM)

---
**quotaMon** String size(2)

할부기간(00(일시불), 01, 02...)

---
**goodsAmt** String size(12)

승인금액

---
**buyer_nm** String size(50)

구매자명

---
**goodsNm** String size(50)

상품명

---
**ordHp** String size(20)

구매자 휴대폰 번호(01012345678)

---
**hashKey** String size(100)

해시키(sha256(mid+amt) 영어문자 소문자)



### 응답 파라미터
---
**res_code** String size(4)

응답값(0000: 정상 이외의값 에러)

---
**res_msg** String size(1000)

결과메세지

---
**APP_NO** String size(16)

승인번호(12345678)

---
**APP_DATE** String size(10)

승인일시(yyyyMMddHHmmss)

---
**VAN_CP_CD** String size(10)

카드 발급사

---
**VAN_ISS_CP_CD** String size(10)

카드 매입사


## 결제 요청 예시

결제 요청 예시

```shell title="요청예시"
curl --request POST \
  --url https://testpgapi2.korpay.com/api/manualpay \
  --header 'Authorization: Basic dGVzdF9za196WExrS0V5cE5BcldtbzUwblgzbG1lYXhZRzVSOg==' \
  --header 'Content-Type: application/json' \
  --data '{"ordNo":"123456789112345678911234567891","mkey":"G/pYro4XipgrmecKdlvWwkSfGcg4y","mid":"ktest5578m","goodsAmt":"5000","cardNo":"1234123412341234","expireYymm":"2301","quotaMon":"00","buyer_nm":"코페이","goodsNm":"결제테스트","ordHp":"01012345678","hashKey":""}'
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