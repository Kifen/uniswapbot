pragma solidity ^0.6.0;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";

contract Factory {
    address public uniswapFactoryAddress;
    IUniswapV2Factory public factory;

    constructor(address _uniswapFactoryAddress) public {
        uniswapFactoryAddress = _uniswapFactoryAddress;
        factory = IUniswapV2Factory(uniswapFactoryAddress);
    }

    function createPair(address tokenA, address tokenB)
        external
        returns (bool)
    {
        factory.createPair(tokenA, tokenB);
        return true;
    }
}
