---
sidebar_position: 1
---

# 연동 기본 정보

월정기결제(빌링결제) 연동에 대한 기본 정보 설명입니다.

:::info
모든 테스트는 계약이후 진행되어야 합니다.
:::

## 필수값

1. 데이터 전송 방식은 <Green>`POST`</Green> 방식으로 전송합니다.
2. hash : sha256(`mid` + `ediDate` + `amt` + `shopkey`) 영어문자 소문자.
3. ordNo : 주문번호 길이 반드시 30자리 중복 x (취소요청시 고유값)
4. 할부기간제한: 5만원이상 요청 건에 대해 12개월 제한(12개월 이상시 요청)
5. 부분취소는 적용 안됨.

## API 테스트 정보
:::tip
파라미터 유효성 테스트는 정기결제 테스트에서 지원하고 있습니다. <br/>
기술지원 (PG개발팀 : dev@korpay.com , 070-7012-1447)
:::
### 테스트 계정 정보

- MID : ktest5502m
- MKEY : UZSqMunQn0l6BYeGWGK02bgp5zb6Qrgxtotu5eMxlDkjO/0MVKnkyJ+Ugz+9s/F05rMOoo78fcrUTogrNUog6g==

export const Green = ({children}) => (
<span
style={{
color:"#00A661"
}}>
{children}
</span>
);
