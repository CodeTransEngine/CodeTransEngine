FROM esolang/ubuntu-base

ENV DEBIAN_FRONTEND=noninteractive

COPY script /bin/script

RUN (curl https://apt.llvm.org/llvm-snapshot.gpg.key | apt-key add -) && \
    (echo "deb http://apt.llvm.org/focal/ llvm-toolchain-focal-11 main" | tee /etc/apt/sources.list.d/llvm.list) && \
    apt-get update -y && \
    apt-get install tzdata -y && \
    apt-get install clang-11 lld-11 -y && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    ln -s /bin/script /bin/cpp-clang && chmod +x /bin/script


