const KlasssToken = artifacts.require("KlasssToken");

module.exports = function (deployer) {
  deployer.deploy(KlasssToken, 1000000);
};
