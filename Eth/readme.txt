1. ���ü�� ����, ����, Ư¡, ���� ���

2. 2���� ���ü�� ��ǥ���� �̴����� ����
 - 1���� : ��Ʈ���� (������) -> ���ü�λ� ȭ�丸 ������ ����
 - 1�ܰ� : ��Ʈ��ũ ���� (���ü�� �����Ǿ� �ִ�)
 -         �̴��������� ��Ʈ��ũ ���� (�̴������� ������ ���� �پ��ϴ�
           ->������ Go�� ������� ���� ���� ���帹�� ��� -> Geth) 
 -         https://geth.ethereum.org/downloads ������� �ٿ�ε�
 - ��Ʈ��ũ ��ġ ��ġ ����
   ��Ʈ��ũ: ��� <- �׽�Ʈ <- private 3���� ���·� ����
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
 - geth ��ġ
 - ��������
  ������ġ�� C:\eth_net\Geth
  $ geth --datadir "./ethereum/data" account new 
 - ���� Ȯ��
  $ geth --datadir "./ethereum/data" account list
 - ICO ��翡 ���ڸ� �޾Ƽ�(�������) 1���� �������� ���ְ� �Ǿ���
  => ���¸� �ϳ� ������ �־��� 
  => ���� ���´� 2��(������, ����1��)
  ������  : 0x71c8252ed5b5e4452575157dd33958a5df7368e7
  ����1��:  0xca065418adaaa01b2183a93c7ceb65cbc0cbf76e 
 - ��Ʈ��ũ ������ ���� ���׽ý� ��� ���� ������ ��ġ�صд�
   => ���� ����� �װ� �ȴ�
   => C:\eth_net\Geth\Genesis.json ��ġ
 - ���׽ý� ����� ������ �ʱ� ��Ʈ��ũ�� ���� ��� ����
  $ geth --datadir "./ethereum/data" init "./Genesis.json"
 - ��Ʈ��ũ ����
  $ geth
   --identity "PrivateNetwork"  : ��Ʈ��ũ �̸�
   --datadir "./ethereum/data"  : ��Ʈ��ũ ��ġ
   --port "30303"               : ��Ʈ��ũ�� Listening Port ����
   --rpc                        : �������� �� ��� ���� OK, Enable the HTTP-RPC server
   --rpcaddr 0.0.0.0            : RPC���� �ּ� => �⺻�� localhost 
   --rpcport "8123"             : RPC���� ��Ʈ
   --rpccorsdomain "*"          : �����ϸ� ���������ε� ���� ����
   --nodiscover                 : ���׽ý� ���� ��Ʈ��ũ ID�� �ִ� ��� ���� ����
   --networkid 1900             : ��Ʈ��ũ ���̵�
   --nat "any"                  : �ܺ� �ּҿ� ���� �ּҰ� ��ȭ ó�� 
   --rpcapi "db, eth, net, web3, miner, personal" : �ַܼ� ������ �Ǵ� api ���, web3=>js��밡��
   --allow-insecure-unlock      : ���� ��� �㰡 �߰�
   console                      : �ָܼ�� ����, ��� ����� �ַܼ� ����

  $ geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover  --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" --allow-insecure-unlock console
 
 - ���� ����
  $ geth attach http://localhost:8123
 - ���� Ȯ��
  $ eth.accounts
 - �ܰ� Ȯ��
  $ eth.getBalance( eth.accounts[0] )

 [�������󿡼� ��Ʈ��ũ ����]
 - �̴����� ��ġ
 $ sudo apt-get update
 $ sudo apt-get upgrade
 $ sudo apt-get install software-properties-common 
 $ sudo add-apt-repository ppa:ethereum/ethereum
 $ sudo apt-get update
 $ sudo apt-get install ethereum
 - ��Ʈ��ũ ����
 $ mkdir ./eth_net   
 $ mkdir ./eth_net/Geth
 $ mkdir ./eth_net/Geth/ethereum
 $ mkdir ./eth_net/Geth/ethereum/data
 $ cd ./eth_net/Geth
 $ geth --datadir "./ethereum/data" account new <= 2�� ����
   0x2461908780315A878D76336CA94C1f42C87C5927 : ������
   0xeED62a6bDaAA7175b0F17Ad1F42cf741ee9EC1E7 : ����
 $ nano Genesis.json
   ���� �� hash �� ����
 $ cat Genesis.json
   ���� ���� ����
 $ geth --datadir "./ethereum/data" init "./Genesis.json"
 $ geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover  --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" console
 - ���� ����
  $ geth attach http://������AWS������:8123
 - ���� Ȯ��
  $ eth.accounts
 - �ܰ� Ȯ��
  $ eth.getBalance( eth.accounts[0] )

3. �̴������� �缳 ��Ʈ��ũ �ܺο��� �����ϴ� ���(RPC)
 - �������� ����
  1) PRC ������ ���ؼ� ����� �����Ͽ� ����
  2) MIST ������(�̴����� GUI ��) ����
  3) nodejs ��� client side���� ����
  4) nodejs ��� server side���� ���� : restAPI ��Ÿ��
  5) nodejs ��� socket.io�� �̿��� �ǽð� �������  : �������
   - socket.io ����(ä������)
 - ���� ���ӻ�Ȳ����
  -> ���� ����
  $ personal.newAccount('1234')
   "0x9d8b5d4bd6f28c2dc5323690896f42fed139d184"
  �۱����� 
    -> Ʈ������ (���̴� �۾��� ���� ó���� �ȴ�)
    -> ���⿡�� �̷� ������ �������� ���ü���� ������(���)����
       ���� ��Ģ�� ���� ������ OK�Ǹ� ��ο� ����� �ǰ�, �׶� 
       ���� ������ �ȴ� 
  $ eth.sendTransaction({
    from:eth.accounts[0],
    to:eth.accounts[1],
    value:web3.toWei(1, 'ether')
  })
  Error: authentication needed: password or unlock
  => Ʈ������ ������ ����(�����ᰡ �߻��ǰų�, �۱�������)
  �߻���(from)�� ������ Ǯ��(Ǯ���� ����� �Է¹޴´�)
  ������Ѿ��Ѵ�
  $ personal.unlockAccount( eth.accounts[0], '1234')
  true
  �۱�
  $ eth.sendTransaction({
    from:eth.accounts[0],
    to:eth.accounts[1],
    value:web3.toWei(1, 'ether')
  })
  "0x838954b79a25c8c3667a77e2e39b564ce055428ba331e387a61bea95300bedeb"
  Ʈ������ Ȯ��
  $ eth.pendingTransactions
  �۱������� ó���ϱ� ���� miner.start() 
  miner.start() ��ÿ��� ����ؼ� �������̿��� ���⼭�� �ʿ��Ҷ���
  �����ϰ�, ���ߴ� ������ ó���Ѵ�
  $ miner.start()

 - ȭ�����
  1 ether = 1,000,000,000,000,000,000 wei(������ ���޿�:wei)
            wei < Kwei < Mwei < GWei
  1 ether = 1,000,000,000 GWei (���� �Ϲ����� ���� ���޴���)
  1 ether = 1,000,000 Szabo (������ ���޿�)
  1 ether = 1,000 Finney (�Ҿ� �����)
  1 ether = 0.001 Kether
            Kether < Mether < Gether < Tether
 
 - MIST ������
  -> �̴����� ���/�׽�Ʈ/�缳 ��Ʈ��ũ�� ��� ���� ����
  -> ��Ʈ��ũ ������ ���� ���¿��� �����ϸ� ������ ������� �ٰԵǰ� ��尡 ����ȭ�Ǹ鼭
     ���� �����Ͱ� Ŀ����, �ε尡 ���� �ɸ���(����)
  -> �������� �ݵ�� �缳 ��Ʈ��ũ ������Ų�Ŀ� �����Ѵ�
  -> https://github.com/ethereum/mist/releases
     Mist-installer-0-11-1.exe �ٿ�ε�
  -> ���»���, �۱�, Ʈ������ó�� Ȯ��
  -> ����Ʈ ��Ʈ��Ʈ ����->�����ϴ� ��ġ�� Ȯ��
 - NodeJS ����
  -> node ������Ʈ���� web3��ġ   
   $ npm install web3@0.16.0 
  -> ������Ʈ ����
   $ cd C:\Users\�Ѱ���24\Desktop\test_git\bc_projects\Eth\DApp
   $ express -e mini_wallet
   $ cd mini_wallet
   $ npm install
   $ npm install web3@0.16.0
   $ package.json���� node ./bin/www => nodemon ./bin/www
   $ npm start 
   web3�� �̴����� ��Ʈ��ũ�� �����Ͽ� RPC Ŀ�ǵ带 ����Ҽ� �ִ�
   ������ api�� ��Ʈ��ũ ������ �㰡�� ��⸸ ��밡��
   [Ŭ���̾�Ʈ side���� ��� �ϱ� ����]
   node_modules/web3/dist/web3-light.min.js �������� 
   public/lib(���λ���)/web3-light.min.js
   node_modules/bignumber.js(����)/bignumber.min.js �������� 
   public/lib(���λ���)/bignumber.min.js
   -> �ڵ忡�� Ȯ��




4. �ָ���Ƽ ��� ���� (�̴����� ��Ʈ��Ʈ �� ���α׷��� ���̵� ���� �����ϴ� ���)
 - ������ : remix
   https://remix.ethereum.org

5. DApp ���� ( Node ���, �缳��Ʈ��ũ + node ���� )
 - ��������
 - ������ǥ
 - ���ýý���.. 