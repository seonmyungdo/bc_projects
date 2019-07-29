1. 블로체인 역사, 구조, 특징, 이해 등등

2. 2세대 블록체인 대표주자 이더리움 구축
  - 1세대 : 비트코인 ( 대장주 ) -> 블록체인상에 화폐만 구현된 상태
    - 1단계 : 네트워크 구축 ( 블록체인 구현되어 있다 )
              이더리움기반의 네트워크 구축 (이더리움을 구축한 언어는 다양하다 
              -> 구글의 Go를 기반으로 만든 것을 가장 많이 사용)
              https://geth.ethereum.org/downloads 윈도우용 다운로드
    - 네트워크 설치 위치 지정
      네트워크 : 상용 <- 테스트 <- private(1st) 3가지 형태로 존재
    window
      $ mkdir C:\eth_net
      $ cd C:\eth_net
      $ mkdir ./eth_net/Geth
      $ mkdir ./eth_net/Geth/ethereum
      $ mkdir ./eth_net/Geth/ethereum/data

    linux
      $ mkdir ./eth_net
      $ mkdir ./eth_net/Geth
      $ mkdir ./eth_net/Geth/ethereum
      $ mkdir ./eth_net/Geth/ethereum/data
  
  - Geth 설치
  - 계정 생성
    현재 위치는 C:\eth_net
    $ geth --datadir "./ethereum/data" account new 
  - 계정 확인
    $ geth --datadir "./ethereum/data" account list
  - ICO 행사에 투자를 받아서(예를들면) 1명이 돈을 내고 주주가 되었다
    => 계좌를 하나 생성해 주었다
    => 현재 계좌는 2개 ( 소유주, 주주 1명 )
    소유주 : e8c65de030eb21c8ea170d6f5352c3a32595aa60
    주주 1명 : b04d37c81a814843a29a40cf0d4cdec650973ff4
  - 네트워크 구성을 위해 제네시스 블록 구성 파일을 위치해둔다
    => 최초 블록을 쌓게 된다
    => C:\eth_net\Geth\Genesis.json 위치
  - 제네시스 블록을 가지고 초기 네트워크를 구축 명령 수행
    $ geth --datadir "./ethereum/data" init "./Genesis.json"
  - 네트워크 가동
    $ geth 
      --identity "PrivateNetwork" : 네트워크 이름
      --datadir "./ethereum/data" : 네트워크 위치
      --port "30303"              : 네트워크의 Listening Port 지정
      --rpc                       : 원격접속 및 명령 수행 OK, Enable the HTTP-RPC server
      --rpcaddr 0.0.0.0           : RPC서버의 주소 => 기본값 : localhost
      --rpcport "8123"            : RPC서버 포트
      --rpccorsdomain "*"         : 기재함녀 도메인으로도 접속 가능
      --nodiscover                : 제네시스 블럭과 네트워크 ID에 있는 블록 연결 금지
      --networkid 1900            : 네트워크 아이디
      --nat "any"                 : 외부 주소와 내부 주소간 반환 처리
      --rpcapi "db, eth, net, web3, miner, personal" : 콘솔로 오픈이 되는 api 목록, web3=>js사용가능
      console                     : 콘솔 모드 오픈, 모든 출력은 콘솔로 진행

    $ geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" console

  - 원격 접속
  $ geth attach http://localhost:8123
  - 계좌 확인
  $ eth.accounts
  - 잔고 확인
  $ eth.getBalance(eth.accounts[0])

  [리눅스상에서 네트워크 구축]
  - 이더리움 설치
  $ sudo apt-get update
  $ sudo apt-get upgrade
  $ sudo apt-get install software-properties
  $ sudo add-apt-repository ppa:ethereum/ethereum
  $ sudo apt-get update
  $ sudo apt-get install ethereum

  - 네트워크 구축
  $ mkdir ./eth_net
  $ mkdir ./eth_net/Geth
  $ mkdir ./eth_net/Geth/ethereum
  $ mkdir ./eth_net/Geth/ethereum/data
  $ cd ./eth_net/Geth
  $ geth --datadir "./ethereum/data" account new 
    0x526A53638f47b95c5917C213D6cEA3AE4423Aa5E : 소유주
  $ geth --datadir "./ethereum/data" account new 
    0x9c833B16F08ee39a6335aA3EF9f04aEA762fEC47 : 주주
  $ nano Genesis.json
    편집 및 hash 값 세팅
  $ cat Genesis.json
    파일 내용 보기
  $ geth --datadir "./ethereum/data" init "./Genesis.json"
  $ geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" console
  - 원격 접속
  $ geth attach http://(본인의 AWS IP )54.180.26.146:8123
  - 계좌 확인
  $ eth.accounts
  - 잔고 확인
  $ eth.getBalance(eth.accounts[0])


3. 이더리움의 사설 네트워크 외부에서 연동하는 방법 (RPC)
  - 전자지갑 구현
    1) PRC 접속을 통해서 명령을 전송하여 수행
    2) MIST 브라우저(이더리움 GUT 툴)수행
    3) nodejs 기반 client side에서 수행
    4) nodejs 기반 server side에서 수행 : restAPI 스타일
    5) nodejs 기반 socket.io를 이용한 실시간 통신으로 수행 : 소켓 통신
  - 원격 접속 상황에서
    -> 계좌 생성
    $ personal.newAccount('1234')
    "0x612d6578ae3ff983fb1f9d68886659ddcb7440a4"
    -> 송금 행위 
      : 트랜잭션 ( 마이닝 작업을 통해 처리가 된다. )
      : 여기에는 이런 행위가 적합한지 블록체인의 참여자(노드)들이 합의 원칙에 따라 검증 후 ok되면 장부에 기록이 되고, 그때 돈이 들어오게 된다.
    $ eth.sendTransaction({
      from:eth.accounts[0],
      to:eth.accounts[1],
      value:web3.toWei(1,'ether')
    })
    Error: authentication needed: password or unlock
    => 트랜잭션 수행을 위해 (수수료가 발생되거나, 송금 행위 등) 발생자(from)의 계정을 풀고 (풀려면 비번을 입력받는다) 진행시켜야한다
    $ personal.unlockAccount( eth.accounts[0], '1234' )
    송금
    $ eth.sendTransaction({
      from:eth.accounts[0],
      to:eth.accounts[1],
      value:web3.toWei(1,'ether')
    })
    트랜잭션 확인
    $ eth.pendingTransactions
    송금행위를 처리하기 위해 miner.start()
    miner.start() 평시에는 계속해서 가동중이여서 여기서는 필요할때만 구동하고, 멈추는 식으로 처리한다
    $ miner.start


    화폐단위
    1 ether = 1,000,000,000,000,000,000 wei(수수료 지급용 : wei)
              wei < Kwei < Mwei < Gwei
    1 ehter = 1,000,000,000,GWei (가장 일반적인 가스 지급단위)
    1 ehter = 1,000,000,Szabo (수수료 지급용)
    1 ehter = 1,000,Finney (소액 결제용)
    1 ehter = 0.001 Kether
              Kether < Mether < Gether < Tether
    



4. 솔리디티 언어 이해 (이더리움 네트워크 상에 프로그램이 가미된 앱을 개발하는 언어)

5. DApp 구성 ( Node 기반, 사설네트워크 + node 서비스 )
  - 전자지갑
  - 전자투표
  - 배팅 시스템