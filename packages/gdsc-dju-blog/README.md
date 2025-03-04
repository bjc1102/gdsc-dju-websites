## (GDSC) Daejin University Tech blog Project1

## Description

GDSC DJU의 기술 블로그 프로젝트입니다.

## Get Started

```shell
 yarn install
```

```shell
 yarn workspace gdsc-dju-blog dev
 yarn workspace gdsc-dju-blog vite
```

## Tech Stack

- React Typescript
- axios
- Recoil
- React-Query
- Styled-Components

## Folder Structure

```angular2html

├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Layout //Header, Body, Footer를 정리한 파일
│   ├── utils //유틸리티 파일
│   ├── api
│   │   ├── Mocks //Mock data 파일
│   │   ├── hooks //SWR 파일
│   │   └── index.tsx //api 파일
│   ├── assets // 사진폴더
│   ├── components // 컴포넌트 폴더
│   ├── fonts // 폰트 폴더
│   ├── FilterSelectBox.tsx
│   ├── pages  //페이지가 정의되어있습니다.
│   ├── store //recoil 상태관리 폴더
│   ├── styles  //스타일 에셋
│   └── types
└── yarn.lock
```

