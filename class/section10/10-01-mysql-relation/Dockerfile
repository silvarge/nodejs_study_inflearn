# 1. 운영체제 및 프로그램 설치 - 이미 리눅스, node, npm, yarn까지 모두 깔려 있는 컴퓨터 다운로드하는 방식
FROM node:latest

# 2. 내 컴퓨터에 있는 폴더나 파일을 Docker 컴퓨터 안으로 복사하기
# RUN mkdir myfolder => 아래에서 COPY할 때 자동으로 만들어지므로 굳이 필요 없음.
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# RUN cd ./myfolder/
# 작업 디렉토리 설정 -> 커서 위치

# 3. Docker 안에서 index.js 실행시키기
CMD yarn start:dev