# TDD Kit - C++

## Requirements

* [CMake]
* [Google Test] (see below)
* [Google Mock] (see below)

## Build GTest and GMock

Clone latest googletest release (ex release-1.8.0):

    git clone --branch release-1.8.0 https://github.com/google/googletest.git

Build GTest:

    cd google_test_dir/googletest
    cmake .
    make

Build GMock:

    cd google_test_dir/googlemock
    cmake .
    make

## Export GTest and GMock env variables

    export GTEST_ROOT=google_test_dir/googletest
    export GMOCK_ROOT=google_test_dir/googlemock

You can also set those variables in your `.profile`.

## Generate Makefile for tdd-kit-cpp

    mkdir build
    cd build
    cmake ..

## Build

    make

## Run unit tests

    ./runtests

## Documentation

* [Google Test Primer]
* [Google Mock for dummies]

## License

[MIT](LICENSE)

[CMake]: https://cmake.org
[Google Test]: https://github.com/google/googletest/tree/master/googletest
[Google Mock]: https://github.com/google/googlemock/tree/master/googlemock
[Google Test Primer]: https://github.com/google/googletest/blob/master/googletest/docs/Primer.md
[Google Mock for dummies]: https://github.com/google/googlemock/blob/master/googlemock/docs/ForDummies.md
