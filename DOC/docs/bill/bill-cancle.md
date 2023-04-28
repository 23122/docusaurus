---
sidebar_position: 5
---

# 빌키해제

발급된 빌키를 취소하는 예시입니다.

:::info
테스트요청주소 : https://testpgapi2.korpay.com/api/test/billDelTest <Green>`POST`</Green> <br/>
**위주소는 테스트 주소임으로 실연동과는 차이가 있을 수 있습니다.**
:::
## 파라미터 정보


### 요청 파라미터
---
**bid** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
빌키(KORPAY에서 발급한 빌키)

---
**mid** <Green>**String**</Green> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**ordNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
주문번호

### 응답 파라미터
---
**resultCd** <Green>**String**</Green> <Gray>`4byte`</Gray><br/>
응답값(0000: 정상 이외의값 에러)

---
**resultMsg** <Green>**String**</Green> <Gray>`100byte`</Gray><br/>
결과메세지

---
**ordNo** <Green>**String**</Green> <Gray>`30byte`</Gray><br/>
주문번호

## 취소 요청 예시

취소 요청 예시

```shell title="요청예시"
curl --request POST \
  --url https://testpgapi2.korpay.com/api/test/billDelTest  \
  --header 'Content-Type: application/json' \
  --data '{"mid":"ktest5502m","ordNo","123456789112345678911234567891","bid":"dlkajflkasd"}'
```


```json title="응답예시"
{
    "resultCd": "0000",
    "resultMsg": "취소 성공",
    "ordNo": "123456789112345678911234567891"
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