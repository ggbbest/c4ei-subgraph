thegraph에 로그인해서 subgraph를 생성한다.

yarn global add @graphprotocol/graph-cli 로 graph-cli 설치
graph init --from-example graphprotocol/example-subgraph 로 초기화


SUBGRAPH SLUG 는 gravatar로 지정
graph auth --studio {deploy key} 로 CLI에서 인증
cd example-subgraph 로 프로젝트 진입
graph codegen && graph build 로 subgraph 빌드
graph deploy --studio gravatar 로 subgraph 배포

graph auth --product hosted-service 32cb880bae4541f3ba565ca3bcc5ce64
graph deploy --product hosted-service ggbbest/c4ei

✔ Upload subgraph to IPFS
Build completed: QmXfCx2FYrBhbm7WP8Mn5N6ERbY3jfKVqjntZZYmyNhPRy
Deployed to https://thegraph.com/explorer/subgraph/ggbbest/c4ei
Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/ggbbest/c4ei
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/ggbbest/c4ei
