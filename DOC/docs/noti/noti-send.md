---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 노티 연동

가맹점에서 응답서버를 준비하시면 해당주소로 결제내역을 <Green>`POST`</Green> 방식으로 전달합니다.
:::info
연동문의는 영업담당자에게 문의하셔야 합니다.
:::

## 파라미터 정보


### 전달 파라미터

---
**tid** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Red>단말기, 온라인</Red> <Gray>`30byte`</Gray> <br/>
거래고유번호 (ex : ktest5561m01032012021713340481)

---
**mid** <Green>**String**</Green> <Red>단말기, 온라인</Red> <Gray>`10byte`</Gray><br/>
상점 ID (KORPAY제공 상점 MID)

---
**gid** <Green>**String**</Green> <Red>단말기, 온라인</Red> <Gray>`10byte`</Gray><br/>
상점 GID (KORPAY제공 상점 GID)

---
**vid** <Green>**String**</Green> <Red>단말기, 온라인</Red> <Gray>`10byte`</Gray><br/>
총판 VID (KORPAY제공 상점 VID)

---
**payMethod** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
결제수단 (CARD: 카드결제 고정)

---
**appCardCd** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
발급사코드/ 카드코드/ 은행코드/ 상품권사코드/ 휴대폰코드

---
**cancelYN** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
취소구분 (Y: 취소, N: 승인)

---
**ediNo**  <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
VAN거래고유번호 (ex : 160737115186)

---
**appDtm** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
승인일 (yyyyMMddHHmmss)

---
**ccDnt** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
취소일 (cancelYN == Y, yyyyMMddHHmmss)

---
**amt** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
금액 (amt > 0)

---
**buyerId** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
구매자 ID

---
**ordNm** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
구매자명

---
**ordNo** <Green>**String**</Green> <Yellow>**Unique**</Yellow> <Red>단말기, 온라인</Red> <br/>
주문번호 (12016120230411100300)

---
**goodsName** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
상품명

---
**appNo** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
카드사 승인번호(12345678)

---
**quota** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
할부개월 (00 : 일시불, 01 : 1개월...)

---
**notiDnt** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
Noti 통보일 (CurrentTimeMillis 형식)

---
**cardNo** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
카드번호 (12345678\*\*\*\*1234)

---
**catId** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
단말기 CAT_ID (단말기 터미널 아이디, 온라인 거래 일때는 가맹점 MID)

---
**connCd** <Green>**String**</Green> <Red>단말기, 온라인</Red> <br/>
단말기/수기결제 구분 (0003: 오프라인 0005: 수기결제 : 0001 :인증결제)

---
**tPhone** <Green>**String**</Green> <Red>단말기</Red> <br/>
phone 번호 입력 사항 (단말기에서 올라오는 전화번호)

---
**remainAmt** <Green>**String**</Green> <Red>단말기</Red> <br/>
잔액 (승인 , 전체취소시에는 “0” 부분취소시에는 잔액)

---
**fnNm** <Green>**String**</Green> <Red>온라인</Red> <br/>
카드사/은행/입금은행/이동통신사 이름

---
**acqCardCd** <Green>**String**</Green> <Red>온라인</Red> <br/>
매입사코드

---
**usePointAmt** <Green>**String**</Green> <Red>온라인</Red> <br/>
카드사 사용포인트 (카드 포인트)

---
**vacntNo** <Green>**String**</Green> <Red>온라인</Red> <br/>
가상계좌 번호 (구매자 가상계좌번호)

---
**socHpNo** <Green>**String**</Green> <Red>온라인</Red> <br/>
휴대폰번호 (구매자 휴대폰번호)

---
**charSet** <Green>**String**</Green> <Red>온라인</Red> <br/>
**`1`** 고정

---
**hashStr** <Green>**String**</Green> <Red>온라인</Red> <br/>
수기결제 결제 해쉬키

---
**ediDate** <Green>**String**</Green> <Red>온라인</Red> <br/>
Noti 통보일 (CurrentTimeMillis 형식)

---
**lmtDay** <Green>**String**</Green> <Red>온라인</Red> <br/>
예약필드

---
**resultCd** <Green>**String**</Green> <Red>온라인</Red> <br/>
~~수기결제 상태값 (수기결재 3001 : 승인 , 2001: 취소 (cancelYN 으로 대체  요망) )~~

---
**cashCrctFlg** <Green>**String**</Green> <Red>온라인</Red> <br/>
~~현금영수증 발행여부 (현금영수증 발행여부  Y  : N  , 현재 사용 안함)~~


## 노티 발송 예시

<Tabs>
<TabItem value="catApp" label="단말기 승인샘플">

```shell
curl --location --request POST '수신받을 노티주소' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode "gid=test11110g" \
    --data-urlencode "remainAmt=0" \
    --data-urlencode "cancelYN=N" \
    --data-urlencode "mid=ktest6111m" \
    --data-urlencode "amt=1000" \
    --data-urlencode "appNo=30059295" \
    --data-urlencode "ccDnt=" \
    --data-urlencode "buyerId=" \
    --data-urlencode "cardNo=12345678****123*" \
    --data-urlencode "tid=ktest6111m01032304111003000874" \
    --data-urlencode "vid=ctest0001a" \
    --data-urlencode "tPhone=" \
    --data-urlencode "ordNm=" \
    --data-urlencode "catId=1234567890" \
    --data-urlencode "connCd=0003" \
    --data-urlencode "ordNo=12016120230411100300" \
    --data-urlencode "ediNo=2023041110C1359126" \
    --data-urlencode "payMethod=CARD" \
    --data-urlencode "quota=00" \
    --data-urlencode "appDtm=20230411100300" \
    --data-urlencode "goodsName=1234567890" \
    --data-urlencode "appCardCd=02" \
    --data-urlencode "notiDnt=20230411101512"
```

</TabItem>
<TabItem value="onlineApp" label="온라인 승인샘플">

```shell
curl --location --request POST '수신받을 노티주소' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode "cashCrctFlg=" \
    --data-urlencode "gid=test11110g" \
    --data-urlencode "acqCardCd=02" \
    --data-urlencode "lmtDay=" \
    --data-urlencode "mid=ktest5599m" \
    --data-urlencode "amt=1000" \
    --data-urlencode "appNo=30039792" \
    --data-urlencode "ccDnt=" \
    --data-urlencode "cardNo=12345678****1234" \
    --data-urlencode "tid=ktest5599m01012304111010250264" \
    --data-urlencode "hashStr=1cac0a74c232eae141dc7abc6ab04393c9594123b68416e05c3cd19281805118" \
    --data-urlencode "vid=ctest0001a" \
    --data-urlencode "ordNm=홍길*" \
    --data-urlencode "connCd=0005" \
    --data-urlencode "ordNo=552440430050704" \
    --data-urlencode "payMethod=CARD" \
    --data-urlencode "fnNm=국민" \
    --data-urlencode "quota=00" \
    --data-urlencode "appDtm=20230411101055" \
    --data-urlencode "ediDate=20230411101211" \
    --data-urlencode "usePointAmt=0" \
    --data-urlencode "authType=01" \
    --data-urlencode "goodsName=테스트상품" \
    --data-urlencode "appCardCd=02" \
    --data-urlencode "charSet=1" \
    --data-urlencode "resultCd=3001" \
    --data-urlencode "cancelYN=N" \
    --data-urlencode "cardType=01" \
    --data-urlencode "resultMsg=카드 결제 성공" \
    --data-urlencode "catId=ktest5599m" \
    --data-urlencode "vacntNo=" \
    --data-urlencode "ediNo=3040229491" \
    --data-urlencode "socHpNo=" \
    --data-urlencode "notiDnt=20230411101211"


```

</TabItem>
<TabItem value="java" label="단밀기 취소샘플">

```shell
curl --location --request POST '수신받을 노티주소' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode "gid=test11110g" \
    --data-urlencode "remainAmt=0" \
    --data-urlencode "cancelYN=Y" \
    --data-urlencode "mid=ktest6111m" \
    --data-urlencode "amt=1000" \
    --data-urlencode "appNo=30059295" \
    --data-urlencode "ccDnt=20230411102609" \
    --data-urlencode "buyerId=" \
    --data-urlencode "cardNo=12345678****123*" \
    --data-urlencode "tid=ktest6111m01032304111003000874" \
    --data-urlencode "vid=ctest0001a" \
    --data-urlencode "tPhone=" \
    --data-urlencode "ordNm=" \
    --data-urlencode "catId=1234567890" \
    --data-urlencode "connCd=0003" \
    --data-urlencode "ordNo=12016120230411100300" \
    --data-urlencode "ediNo=2023041110C1359126" \
    --data-urlencode "payMethod=CARD" \
    --data-urlencode "quota=00" \
    --data-urlencode "appDtm=20230411100300" \
    --data-urlencode "goodsName=1234567890" \
    --data-urlencode "appCardCd=02" \
    --data-urlencode "notiDnt=20230411102637"


```

</TabItem>

<TabItem value="onlineCancle" label="온라인 취소샘플">

```shell
curl --location --request POST '수신받을 노티주소' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode "cashCrctFlg=" \
    --data-urlencode "gid=test11110g" \
    --data-urlencode "acqCardCd=02" \
    --data-urlencode "lmtDay=" \
    --data-urlencode "mid=ktest5599m" \
    --data-urlencode "amt=1000" \
    --data-urlencode "appNo=30039792" \
    --data-urlencode "ccDnt=20230411101521" \
    --data-urlencode "cardNo=12345678****1234" \
    --data-urlencode "tid=ktest5599m01012304111010250264" \
    --data-urlencode "hashStr=8eab4a185ae61d0ecf63dfc548913134d2eb0c49d2ad83732e2ba26d1785bc54" \
    --data-urlencode "vid=ctest0001a" \
    --data-urlencode "ordNm=홍길*" \
    --data-urlencode "connCd=0005" \
    --data-urlencode "ordNo=552440430050704" \
    --data-urlencode "payMethod=CARD" \
    --data-urlencode "fnNm=국민" \
    --data-urlencode "quota=00" \
    --data-urlencode "appDtm=20230411101055" \
    --data-urlencode "ediDate=20230411101637" \
    --data-urlencode "usePointAmt=0" \
    --data-urlencode "authType=01" \
    --data-urlencode "goodsName=테스트상품" \
    --data-urlencode "appCardCd=02" \
    --data-urlencode "charSet=1" \
    --data-urlencode "resultCd=2001" \
    --data-urlencode "cancelYN=Y" \
    --data-urlencode "cardType=01" \
    --data-urlencode "resultMsg=취소 성공" \
    --data-urlencode "catId=ktest5599m" \
    --data-urlencode "vacntNo=" \
    --data-urlencode "ediNo=3040229491" \
    --data-urlencode "socHpNo=" \
    --data-urlencode "notiDnt=20230411101637"

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


