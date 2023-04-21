---
sidebar_position: 1
---

# 연동 기본 정보

수기결제 API 연동에 대한 기본 정보 설명입니다.

## 필수값

1. 데이터 전송 방식은 POST 방식으로 전송합니다.
2. hash : sha256(mid+amt) 영어문자 소문자.
3. ordNo : 주문번호 길이 반드시 30자리 중복 x (취소요청시 고유값)
4. 할부기간제한: 5만원이상 요청 건에 대해 12개월 제한(12개월 이상시 요청)
5. 부분취소는 적용 안됨.

## API 테스트 정보

- 실제 결제가 이뤄지기 때문에 테스트시 연락 선행 필수(PG개발팀 : 070-7012-1447)

### 테스트 계정 정보

- MID : ktest5578m
- MKEY : G/pYro4XipgrmecKdlvWwkSfGcg4y(별도전달)

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
