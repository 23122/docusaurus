---
sidebar_position: 1
---

# 연동 기본 정보

실시간결제내역(Noti) 연동에 대한 기본 정보 설명입니다.

## 노티 설명

1. 가맹점에서 응답서버를 준비하셔아 합니다.
2. 응답서버 URL를 메일로 영업담당자에게 요청
3. 결제내역을 <Green>`POST`</Green> 방식으로 전달합니다.
4. 노티 수신확인은 `HTTP STATUS`로 확인합니다. (200:수신, 이외 미수신)
5. 미수신 일경우 2분간격으로 5회 재전송 실시합니다.
6. **연동문의는 영업담당자에게 문의**
7. 기술지원 (PG개발팀 : dev@korpay.com , 070-7012-1447)


[//]: # (Create a file at `src/pages/my-react-page.js`:)

[//]: # ()
[//]: # (```jsx title="src/pages/my-react-page.js")

[//]: # (import React from 'react';)

[//]: # (import Layout from '@theme/Layout';)

[//]: # ()
[//]: # (export default function MyReactPage&#40;&#41; {)

[//]: # (  return &#40;)

[//]: # (    <Layout>)

[//]: # (      <h1>My React page</h1>)

[//]: # (      <p>This is a React page</p>)

[//]: # (    </Layout>)

[//]: # (  &#41;;)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (A new page is now available at [http://localhost:3000/my-react-page]&#40;http://localhost:3000/my-react-page&#41;.)

[//]: # ()
[//]: # (## Create your first Markdown Page)

[//]: # ()
[//]: # (Create a file at `src/pages/my-markdown-page.md`:)

[//]: # ()
[//]: # (```mdx title="src/pages/my-markdown-page.md")

[//]: # (# My Markdown page)

[//]: # ()
[//]: # (This is a Markdown page)

[//]: # (```)

[//]: # ()
[//]: # (A new page is now available at [http://localhost:3000/my-markdown-page]&#40;http://localhost:3000/my-markdown-page&#41;.)

export const Green = ({children}) => (
<span
style={{
color:"#00A661"
}}>
{children}
</span>
);