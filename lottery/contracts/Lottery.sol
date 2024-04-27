// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Lottery {
    address public manager;
    address payable[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether, "You need to invest more that 0.01 Eth");
        players.push(payable(msg.sender));
    }

    // The prevrandao is a source of randomness that is based on the RANDAO (Random Number Activated Out-source)
    // mechanism introduced in the Ethereum London hard fork.
    // Also we should use encodePacked to combine multiple inputs into a single bytes array
    function random() private view returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(block.prevrandao, block.timestamp, players)
                )
            );
    }

    function pickWinner() public restricted {
        players[random() % players.length].transfer(address(this).balance);
        players = new address payable[](0);
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    modifier restricted() {
        require(msg.sender == manager, "Only the manager can choose the winer");
        _;
    }
}
