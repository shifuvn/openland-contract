# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test --network hardhat
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Test localhost

Run localhost chain

```
npx hardhat node
```

Run deploy task

```
npx hardhat deploy-local --network localhost
```

After deploy contracts at localhost successfully, copy and paste addresses on console to /src/config/contractAddresses.ts

# Server backend

Repo: https://github.com/hungw7/openland-server

- Config `AWS_S3` for Amazon S3 to storage image (please use your config if we delete our config in .env)
- Config `DATABASE_LOCAL` variable in .env to connect mongodb

# Overview
![Screenshot 2025-05-29 at 19 21 47](https://github.com/user-attachments/assets/d09b9b4f-f8b8-43c9-975a-271468c3e80a)

- Người dùng sẽ kết nối với Client app và Metamask để cung cấp thông tin cần thiết
cho việc lưu trữ trên server cũng như tương tác với contract.
- Cổng Infura được sử dụng để tạo proxy kết nối đển mạng blockchain của Ethereum
- Mạng được sử dụng trong đồ án này là Rinkeby
- IPFS là kho lưu trữ các tài sản được kỹ thuật số như ảnh, gif, tên, mô tả tài sản.

# Report

- Link báo cáo: https://github.com/shifuvn/openland-contract/blob/master/DA1_19521574%2619522216_SE121.M21_NguyenTanToan.pdf

- Thành viên:
  - Nguyễn Thanh Hưng (19521574)
  - Phạm Nguyễn Minh Thắng (19522216)
