# Automated Multi-Node Docker Deployment with Nginx Load Balancing

## Overview
This project demonstrates Infrastructure as Code (IaC) principles by automating the provisioning of a multi-node web environment. Using Ansible, the project deploys an Nginx reverse proxy load balancer and multiple Docker hosts serving a containerized Node.js application.

## Architecture
- **Control Node:** Ephemeral Docker container running Ansible, preventing local dependency clutter.
- **Reverse Proxy (Server 1):** Nginx load balancer distributing incoming HTTP traffic via Round-Robin.
- **App Servers (Server 2 & 3):** Docker hosts running the containerized web application.

## DevSecOps & Best Practices Implemented
- **Immutable Infrastructure:** `npm ci --omit=dev` is used in the Dockerfile to guarantee predictable, lockfile-based and reproducible builds.
- **Principle of Least Privilege:** The web application container runs as a non-root user (`USER node`) to mitigate potential security vulnerabilities.
- **Security-First Provisioning:** Bypassed the deprecated and insecure `apt-key` method for installing Docker, opting instead for Ubuntu's secure, natively signed `docker.io` packages.
- **Secret Management:** Sensitive data and credentials are kept strictly out of version control using `.gitignore` and template files (`inventory.ini.example`).

## How to Run

### 1. Clone the repository
    git clone [https://github.com/JonathanStanford/ansible-docker-loadbalancer.git](https://github.com/JonathanStanford/ansible-docker-loadbalancer.git)
    cd ansible-docker-loadbalancer

### 2. Configure Inventory
Rename `ansible/inventory.ini.example` to `ansible/inventory.ini` and provide your target server IP addresses and SSH credentials.

### 3. Start the Control Node
    docker-compose up -d

### 4. Deploy the Infrastructure
Execute the Ansible playbook from within the containerized control node:
    
    docker exec -it devsecops-ansible-runner bash
    export ANSIBLE_HOST_KEY_CHECKING=False
    ansible-playbook -i inventory.ini deploy.yml