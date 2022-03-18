var KlasssToken = artifacts.require("KlasssToken");

contract("KlasssToken", function (accounts) {
  var tokenInstance;

  it("initializes the contract with the correct values", function () {
    return KlasssToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.name();
      })
      .then(function (name) {
        assert.equal(name, "Klasss Token", "has the correct name");
        return tokenInstance.symbol()
      })
      .then(function (symbol) {
        assert.equal(symbol, "KToken", "Symbol of KlassToken is KT");
        return tokenInstance.standard();
      }).then(function(standard){
        assert.equal(standard, "Klasss Token v1.0", "has the correct standard")
      });
  });

  it("set the total supply upon deployment", function () {
    return KlasssToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.totalSupply();
      })
      .then(function (totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          1000000,
          "Sets the total supply to 1,000,000"
        );
        return tokenInstance.balanceOf(accounts[0]);
      })
      .then(function (adminBalance) {
        assert.equal(
          adminBalance.toNumber(),
          1000000,
          "It allocates the initial amount to the admin"
        );
      });
  });
});
