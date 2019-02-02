export const abi = [
  {
    'constant': true,
    'inputs': [],
    'name': 'feeAddress',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'subscriber',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'creator',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'user',
        'type': 'string'
      },
      {
        'indexed': false,
        'name': 'tier',
        'type': 'string'
      },
      {
        'indexed': false,
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Subscription',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'wallet',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'recipient',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Withdrawal',
    'type': 'event'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'creator',
        'type': 'address'
      },
      {
        'name': 'user',
        'type': 'string'
      },
      {
        'name': 'tier',
        'type': 'string'
      }
    ],
    'name': 'NewSubscription',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'recipient',
        'type': 'address'
      }
    ],
    'name': 'Withdraw',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }
];
