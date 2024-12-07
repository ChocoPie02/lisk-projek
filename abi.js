const swapABI = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "permit2",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "weth9",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "seaportV1_5",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "seaportV1_4",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "openseaConduit",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "nftxZap",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "x2y2",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "foundation",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "sudoswap",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "elementMarket",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "nft20Zap",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "cryptopunks",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "looksRareV2",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "routerRewardsDistributor",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "looksRareRewardsDistributor",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "looksRareToken",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "v2Factory",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "v3Factory",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "pairInitCodeHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "poolInitCodeHash",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct RouterParameters",
                "name": "params",
                "type": "tuple"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "BalanceTooLow",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuyPunkFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ContractLocked",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ETHNotAccepted",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "commandIndex",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "message",
                "type": "bytes"
            }
        ],
        "name": "ExecutionFailed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FromAddressIsNotOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InsufficientETH",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InsufficientToken",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidBips",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "commandType",
                "type": "uint256"
            }
        ],
        "name": "InvalidCommandType",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidOwnerERC1155",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidOwnerERC721",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidPath",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidReserves",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidSpender",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "LengthMismatch",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SliceOutOfBounds",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransactionDeadlinePassed",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UnableToClaim",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UnsafeCast",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V2InvalidPath",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V2TooLittleReceived",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V2TooMuchRequested",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V3InvalidAmountOut",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V3InvalidCaller",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V3InvalidSwap",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V3TooLittleReceived",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "V3TooMuchRequested",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RewardsSent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "looksRareClaim",
                "type": "bytes"
            }
        ],
        "name": "collectRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "commands",
                "type": "bytes"
            },
            {
                "internalType": "bytes[]",
                "name": "inputs",
                "type": "bytes[]"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "commands",
                "type": "bytes"
            },
            {
                "internalType": "bytes[]",
                "name": "inputs",
                "type": "bytes[]"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "amount0Delta",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "amount1Delta",
                "type": "int256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "uniswapV3SwapCallback",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

export default swapABI