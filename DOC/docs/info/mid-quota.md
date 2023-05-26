---
sidebar_position: 1
---

# MID할부개월수 조회

결제시 사용가능한 할부개월수를 조회하는 방법입니다.

- 요청주소 : https://testpgapi2.korpay.com/api/init <Green>`POST`</Green>

## 파라미터 정보

- 결제요청을 하기 위한 기본 데이터를 가져온다.



### 요청 파라미터
---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**mkey** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
MID 암호화키



### 응답 파라미터
---
**mkey** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
MID 암호화 키

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**quota** <Green>**String**</Green> <Gray>`2byte`</Gray><br/>
할부 가능 개월(00: 일시불 02:2개월...)

---
**manual_flg** <Green>**String**</Green> <Gray>`1byte`</Gray><br/>
수기결제 가능여부(0: 불가능 1: 가능)

---
**sms_flg** <Green>**String**</Green> <Gray>`1byte`</Gray><br/>
SMS 결제 가능여부(0: 불가능 1: 가능)

---
**res_code** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
응답코드(0000 : 정상, 9999: 에러)

---
**res_msg** <Green>**String**</Green> <Gray>`1000byte`</Gray><br/>
응답메세지

## 할부개월수 조회예시

결제 요청 예시

```shell title="요청예시"
curl --request POST \
  --url https://testpgapi2.korpay.com/api/init \
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