# 2dcfa9ed-6132-473a-9a66-466430f1bc8f
## Prerequisites
Docker is installed on your host machine

## Installation

Clone this repository on your local computer.
After cloning, run the following command from a terminal
```
docker-compose up -build

```

to spin up the container

Installs Node 10 container

## Testing output in Docker

Attaching to 2dcfa9ed-6132-473a-9a66-466430f1bc8f_notes_1

notes_1 |

notes_1 | > ksaifullah-coding-challenge@1.0.0 test /home/node/app

notes_1 | > jest --watchAll

notes_1 |

notes_1 | PASS ./util.test.js

notes_1 | ? Test case 1 (24 ms)

notes_1 |

notes_1 | console.log

notes_1 | 1 5 9

notes_1 |

notes_1 | at Object.<anonymous>.test (util.test.js:6:13)

notes_1 |

notes_1 | Test Suites: 1 passed, 1 total

notes_1 | Tests: 1 passed, 1 total

notes_1 | Snapshots: 0 total

notes_1 | Time: 2.93 s

notes_1 | Ran all test suites.

notes_1 |

2dcfa9ed-6132-473a-9a66-466430f1bc8f_notes_1 exited with code 0

docker-compose up --build

## CI with Github Actions

Git push will intiate CI build and test


# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
