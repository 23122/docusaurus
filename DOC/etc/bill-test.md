---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 빌키발급 및 승인 테스트

데모로 빌키발급 및 승인 테스트를 진행 할 수 있는 페이지입니다.

:::info
해당 페이지에서 제공하는 테스트는 데이터 유효성 검사입니다.<br/>
실결제 연동과 차이가 있을 수 있습니다.
:::

## 테스트

<Tabs>
<TabItem value="billRegTest" label="빌키발급테스트">

:::warning
json='{}' 형식을 지켜주세요.<br/>
들여쓰기없이 한줄로 작성해주세요.<br/>
hashStr은 검증되지 않습니다.
:::

```jsx live
<BillRegChecker
    json='{"cpCd":"02","mid":"ktest5502m","cardPw":"12","cardNo":"5236120116287096","hashStr":"","ordNm":"코페이","mbsUsrId":"test","ordNo":"552910522133041","cardTypeCd":"01","payMethod":"CARD","ediDate":"20230428144158","goodsAmt":"1004","goodsNm":"빌키발급테스트","trxCd":"0","quotaMon":"00","ordTel":"01012345678","mbsReserved":"","ordEmail":"dev@korpay.com","reqType":"1","ordAuthNo":"990101","noIntFlg":"0","pointFlg":"0","expireYymm":"1122"}'
/>
```

</TabItem>
<TabItem value="billAppTest" label="빌키결제테스트">

:::warning
json='{}' 형식을 지켜주세요. <br/>
들여쓰기없이 한줄로 작성해주세요. <br/>
저장된 빌키정보가 없기에 실결제 시 차이가 있을 수 있습니다.
:::

```jsx live
<BillAppChecker 
    json='{"bid":"dlkajflkasd","mid":"ktest5502m","mkey":"UZSqMunQn0l6BYeGWGK02bgp5zb6Qrgxtotu5eMxlDkjO/0MVKnkyJ+Ugz+9s/F05rMOoo78fcrUTogrNUog6g==","ordNo":"55036111231561","goodsNM":"빌키결제","goodsAmt":"1000","quotaMon":"00","noIntFlg":"0","pointFlg":"0","ordNm":"코페이","ordTel":"01012345678","ordEmail":"dev@korpay.com","trxCd":"0","payMethod":"CARD","msbUsrId":"","mbsReserved":""}'
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
