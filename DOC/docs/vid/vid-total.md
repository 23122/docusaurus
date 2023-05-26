---
sidebar_position: 4
---

# 기간별 거래금액

기간별 거래금액을 요청하는 예시입니다.

:::info
테스트요청주소 : https://testpgapi.korpay.com/api/payments/total <Green>`GET`</Green> <br/>
기술지원 (PG개발팀 : dev@korpay.com , 070-7012-1447)
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
**approval** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
승인금액 합계

---
**beforeCancel** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
당일 취소금액 합계 (전취소)

---
**afterCancel** <Blue>**int**</Blue> <Gray>`15byte`</Gray><br/>
결제일 지난 후 취소금액 합계 (후취소)


## 기간별 거래금액 요청 예시

요청 예시

```shell title="요청예시"
curl --location https://testpgapi.korpay.com/api/payments/total?id=ctest0001a&frDt=20230120&toDt=20230127 \
  --header 'Content-Type: application/json' \
  --header 'Authorization: 87c2c7752026253cfd0284a0f6be8ad9fdf07992d1b225326bce24c628db00d4'
```


```json title="응답예시"
{
    "approval": 6000,
    "beforeCancel": 4000,
    "afterCancel": 4000
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

