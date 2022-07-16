Next JS와 typescript, tailwind CSS 활용하여 간단한 컴포넌트들 만들어보기 - 맛집 리스트 보여주기  

## npx
```shell
json-server -p 9000 db.json

## json-server 가 설치되어 있지 않으면 
## 패키지 실행 도구 npx 를 사용하여 실행한다.
npx json-server -p 9000 db.json
```

## TIP
```shell
npx json-server -p 9000 db.json & yarn dev
# npx json-server -p 9000 db.json 는 & 을 이용해서 background 에서 실행하게 한다.

```

## TIP 
이미지 관련하여, next.js 는 빌드한 시점까지의 파일만 `.next` 에 빌드해준다.
이미지의 경우 svg 가 아닌 png, jpg 의 파일(네트워크를 통해 가져오는 이미지)는 cdn 서 별도로 두어 사용하는 것이 좋다.

그 이유는 `next.config.js` 에서 빌드 타임 때 assets 의 url 을 지정해 줄 수 있기 때문이다.

[이미지관리에 대한 Next의 팁](https://nextjs.org/docs/basic-features/static-file-serving)

[assets 설정](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix)

## TIP (npm vs yarn)
package.json에 명시된 dependencies를 통해 node_module이 설치된다.   
설치한 라이브러리와 의존된 다른 라이브러리의 버전이 pakcage-lock.json, yarn.lock 파일에 명시가 된다.   

다른 누군가가 npm install 을 하게 되면 pakcage-lock.json 에 명시된 버전에 맞추어 설치가 되고   
yarn 을 하면 yarn.lock 에 명시된 버전에 맞추어 설치가 된다.   

그러므로 라이브러리의 버전을 맞추고, 개발환경, 운영환경과 동일한 환경을 갖추기 위해서는  
하나만 선택해서 사용하는 것이 좋다. 


## TIP (nvm)

2022년 10월에 node.js 18이 LTS가 된다. 
이렇다면 프로젝트에 따라 node14, node16, node18 에 맞추어 node 버전을 변경하며 개발을 해야하는데 이때 nvm 을 이용해서 node의 버전 관리를 하면 좋다. 
