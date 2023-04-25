---
sidebar_position: 4
---

# 결제서비스사,결제대행사 정보

결제서비스 및 결제대행사 정보를 요청하는 예시입니다.

- 요청주소 : https://testpgapi2.korpay.com/api/receipt <Green>`POST`</Green>

## 파라미터 정보


### 요청 파라미터
---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
KORPAY발급 관리계정

---
**ordNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
주문번호

### 응답 파라미터
---
**van_co_name** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제대행사 회사명

---
**van_co_rep_name** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제대행사 대표자명

---
**van_co_addr** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제대행사 주소

---
**van_co_no** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제대행사 사업자번호

---
**pg_co_name** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제서비스사 회사명

---
**pg_co_rep_name** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제서비스사 대표자명

---
**pg_co_addr** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제서비스사 주소

---
**van_co_no** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결제대행사 사업자번호

---
**res_msg** <Green>**String**</Green> <Gray>`1000byte`</Gray><br/>
응답메세지

## 대행사 정보 요청 예시

대행사 정보 요청 예시

```shell title="요청예시"
curl --request POST \
  --url https://testpgapi2.korpay.com/api/receipt \
  --header 'Content-Type: application/json' \
  --data '{"ordNo":"123456789112345678911234567891","mid":"ktest5578m"}'
```


```json title="응답성공예시"
{
    "res_msg": "조회 성공",
    "van_co_name": "다날",
    "pg_co_no": "2068190716",
    "van_co_no": "1138144055",
    "van_co_rep_name": "박상만",
    "van_co_addr": "경기도 성남시 분당구 분당로 55 퍼스트타워 9층",
    "pg_co_addr": "서울 성동구 성수일로 77 서울숲IT밸리 608-611호",
    "pg_co_rep_name": "채수철",
    "pg_co_name": "주식회사 코페이",
    "res_code": "0000"
}
```

```json title="응답실패예시"
{
    "resultCd": "9999",
    "res_msg": "해당 mid의 주문번호가 존재하지 않습니다."
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