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
