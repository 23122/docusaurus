---
sidebar_position: 1
---

# 연동 기본 정보

수기결제 API 연동에 대한 기본 정보 설명입니다.

:::info
모든 테스트는 계약이후 진행되어야 합니다.
:::

## 필수값

1. 데이터 전송 방식은 <Green>`POST`</Green> 방식으로 전송합니다.
2. hash : sha256(`mid` + `amt`) 영어문자 소문자.
3. ordNo : 주문번호 길이 반드시 30자리 중복 x (취소요청시 고유값)
4. 할부기간제한: 5만원이상 요청 건에 대해 12개월 제한(12개월 이상시 요청)
5. 부분취소는 적용 안됨.
6. 구인증 거래시 거래 카드가 개인카드면 생년월일(yyMMdd), 법인카드면 사업자번호

## API 테스트 정보
:::tip
파라미터 유효성 테스트는 **수기결제 및 취소 테스트**에서 지원하고 있습니다. <br/>
기술지원 (PG개발팀 : dev@korpay.com , 070-7012-1447)
:::
### 테스트 계정 정보

- MID : ktest5578m
- MKEY : G/pYro4XipgrmecKdlvWwkSfGcg4ynESEMvFfX9pKRdSe4DeD8Zrit0erZM61aXZkiplylpIuEkvLYhbRPDPhA==

export const Green = ({children}) => (
<span
style={{
color:"#00A661"
}}>
{children}
</span>
);
