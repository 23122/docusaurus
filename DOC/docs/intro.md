---
sidebar_position: 1
---

# API 연동안내

Korpay의 지불결제 서비스를 이용하는 가맹점이 가맹점의 web 페이지에서 Korpay와 결제 연동을 통해<br/>
Korpay의 결제 서비스를 가맹점의 사용자에게 제공하는 방법을 제공합니다.

## 연동준비

코페이 PG서비스를 이용하실려면 먼저 영업담당자와의 계약이 필요합니다.<br/>
이용가능한 서비스는 계약에따라 달라질 수 있습니다.<br/>

### 연동 문의사항

서비스 관련 문의 사항은 영업담당자에게 연락주세요.<br/>
:::warning
**수기결제(인증)은 별도전달합니다.**
:::

## API 테스트
:::note
본 사이트에서 제공하는 테스트주소는 실 결제가 일어나는 주소와 상의합니다. <br/>
연동문서에서 제공하는 테스트는 실결제가 일어나지 않기 때문에 실연동시 차이가 있을 수 있습니다.<br/>
:::

## 요구사항

- Web server : SHA256 Hash값의 생성 / httpClient(http Background) 통신이 가능한 웹 서버
- DBMS : Korpay에서는 결제 결과 DATA를 제공해 드리며 DB처리는 가맹점에서 관리하셔야 합니다. 이러한 경우에는 별도의 DBMS가 필요합니다.
- 소스버전 : JAVA 1.7 이상입니다.

## 샘플소스

- 샘플소스는 가맹점의 환경에 맞도록 수정하여 사용할 수 있습니다.
- Korpay PGAPI 는 표준 웹 통신만을 사용합니다.
- 결제요청시에는 페이지이동(Form POST Action), API 통신시에는 httpClient 통신을 이용
- HTTPS API Request(httpClient 통신)= httpClient 등의 http Background 통신이 가능한 유틸을 통해서 웹페이지를 요청후 그 결과를 수신