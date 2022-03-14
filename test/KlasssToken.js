var KlasssToken = artifacts.require("KlasssToken");

contract("KlasssToken", function(acccounts) {
 
  it("set the total supply upon deployment", function(){
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
       });
  })
})