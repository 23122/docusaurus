---
sidebar_position: 2
---

# MID할부개월수 조회

결제시 사용가능한 할부개월수를 조회하는 방법입니다.

- 테스트요청주소 : https://testpgapi2.korpay.com/api/init POST

## 파라미터 정보

- 결제요청을 하기 위한 기본 데이터를 가져온다.



### 요청 파라미터
---
**mid** String size(10)

KORPAY발급 관리계정

---
**mkey** String size(100)

MID 암호화키



### 응답 파라미터
---
**mkey** String size(100)

MID 암호화 키

---
**mid** String size(10)

KORPAY발급 관리계정

---
**quota** String size(2)

할부 가능 개월(00: 일시불 02:2개월...)

---
**manual_flg** String size(1)

수기결제 가능여부(0: 불가능 1: 가능)

---
**sms_flg** String size(1)

SMS 결제 가능여부(0: 불가능 1: 가능)

---
**res_code** String size(4)

응답코드(0000 : 정상, 9999: 에러)

---
**res_msg** String

응답메세지

## 할부개월수 조회예시

결제 요청 예시

```shell title="요청예시"
curl --request POST \
  --url https://testpgapi2.korpay.com/api/init \
  --header 'Authorization: Basic dGVzdF9za196WExrS0V5cE5BcldtbzUwblgzbG1lYXhZRzVSOg==' \
  --header 'Content-Type: application/json' \
  --data '{"mid":"ktest5578m","mkey":"G/pYro4XipgrmecKdlvWwkSfGcg4y"}'
```


```json title="응답예시"
{
    "mkey": "pYro4XipgrmecKdlvWwkSfGcg4y",
    "res_msg": "수기결제 가능 여부 : 가능,SMS결제 가능 여부 : 가능,할부 가능 개월수 : 12",
    "sms_flg": "1",
    "quota": "12",
    "mid": "ktest5578m",
    "manual_flg": "1",
    "res_code": "0000"
}

```
