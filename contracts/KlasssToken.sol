// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Token.sol";

contract KlasssToken {

  string public name = "Klasss Token";
  string public symbol = "KT";
  string public standard = "Klasss Token v1.0";
  uint256 public totalSupply;
  Token public token;
	uint public rate = 1000;
  mapping(address => uint256) public balanceOf;

  event TokensPurchsed(
		address account,
		address token,
		uint amount,
		uint rate
		);

  constructor (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }
  
	function buyTokens(address _receiver) public payable {
		// Redemption rate = # of tokens they receive for one ether
		// Amount of Ethereum * Redemption rate
		//Calculate the number of tokens to buy;
		uint tokenAmount = msg.value * rate;

		//Require that ethSwap has enough tokens
		require(token.balanceOf(address(this)) >= tokenAmount, "Insufficient balance");
		
		// Transfer tokens to the user
		token.transfer(_receiver, tokenAmount);

		// Emit an event
		emit TokensPurchsed(_receiver, address(token), tokenAmount, rate);
	}
}