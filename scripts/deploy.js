const hre = require("hardhat");

async function main() {
    const MyCertificate = await hre.ethers.getContractFactory("CertificateNFT");
    const myCertificate = await MyCertificate.deploy("MyCertificate", "Education NFT!!!");

    await myCertificate.deployed();

    console.log("NFT deployed to:", myCertificate.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });