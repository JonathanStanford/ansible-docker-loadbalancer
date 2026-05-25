FROM ubuntu:latest

# Combine apt commands to reduce image layers and clear cache
# sshpass is required for password-based Ansible auth during the lab phase
RUN apt-get update && \
    apt-get install -y ansible openssh-client sshpass iputils-ping nano && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Keep container running in the background for exec sessions
ENTRYPOINT ["/bin/bash", "-c", "sleep infinity"]