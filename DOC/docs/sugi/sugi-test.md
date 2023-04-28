---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 수기결제 및 취소 테스트

데모로 수기결제 및 취소 테스트를 진행 할 수 있는 페이지입니다.

:::info
해당 페이지에서 제공하는 테스트는 데이터 유효성 검사입니다.<br/>
실결제 연동과 차이가 있을 수 있습니다.
:::

## 테스트

<Tabs>
<TabItem value="appTest" label="승인테스트">

:::warning
json='{}' 형식을 지켜주세요.<br/>
들여쓰기없이 한줄로 작성해주세요.
:::

```jsx live
<SugiAppChecker 
    json='{"ordNo":"123456789112345678911234567891","mkey":"G/pYro4XipgrmecKdlvWwkSfGcg4ynESEMvFfX9pKRdSe4DeD8Zrit0erZM61aXZkiplylpIuEkvLYhbRPDPhA==Z","mid":"ktest5578m","goodsAmt":"5000","cardNo":"5236120116287096","expireYymm":"2301","quotaMon":"00","buyer_nm":"코페이","goodsNm":"결제테스트","ordHp":"01012345678","hashKey":""}'
/>
```

</TabItem>
<TabItem value="canTest" label="취소테스트">

:::warning
json='{}' 형식을 지켜주세요.<br/>
들여쓰기없이 한줄로 작성해주세요.
:::

```jsx live
<SugiCanChecker 
    json='{"mid":"ktest5578m","ordNo":"123456789112345678911234567891","canNm":"코페이","canMsg":"취소테스트","canAmt":"5000"}'
/>
```
</TabItem>
</Tabs>


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
