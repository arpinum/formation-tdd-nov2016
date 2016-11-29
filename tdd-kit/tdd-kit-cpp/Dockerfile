FROM ubuntu:16.04

ENV VERSION=release-1.8.0
ENV GOOGLE_TEST=/googletest
ENV GTEST_ROOT="${GOOGLE_TEST}/googletest"
ENV GMOCK_ROOT="${GOOGLE_TEST}/googlemock"
ENV SRC=/src
ENV BUILD=/build

RUN apt-get update && \
    apt-get install -y build-essential cmake git && \
    apt-get clean

RUN git clone --branch "${VERSION}" https://github.com/google/googletest.git /googletest

WORKDIR "${GOOGLE_TEST}/googletest"
RUN cmake . && make

WORKDIR "${GOOGLE_TEST}/googlemock"
RUN cmake . && make

COPY . "${SRC}/"
VOLUME "${SRC}"

RUN mkdir "${BUILD}"
VOLUME "${BUILD}"
WORKDIR "${BUILD}"

CMD cmake "${SRC}" && make && ./runtests
