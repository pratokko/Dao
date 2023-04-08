// we want to wait for a new vote to be executed

// Everyone who holds the governace token has to pay 5 tokens
//  Gives time to users to get out if they dont like the governance update

// SPDX-License-identifer:MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    // minDelay is how long to wait before executing
    // proposers are thre addresses that can propose
    // executors are those who can execute when a proposal passes

    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController(minDelay, proposers, executors, admin) {}
}
