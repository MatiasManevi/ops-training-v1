# Ops training v1

This repository is for training purposes. The areas of knowledge involve Dev Ops, SysAdmin, among others.

# Context

I want to start to transition my technical knowledge into a broader set of concepts and tools. The north is to become a Software Architect but I still have a lot to learn. I have identified a knowledge gap when it comes to all the processes that are used in modern apps that are not part of the development phase, ie. CI/CD, Infrastructure, App configuration, Orchestration, Secret Management, Load Balancing, among others. I want to have some hands-on practice in the area so I can at least feel comfortable having conversations about those topics and participate in decisions. The list of things that came out of conversations with Alejo I want to have more practice goes as follows:

- CI: Github Actions
- Configuration Management: Ansible
- Infra as Code: Terraform
- Secret Management: Vault
- Orchestration: Kubernetes
- Provider: GCP
- Load Balancing -> API Gateway
- Monitoring (logging, metrics, traces)
- Authentication integration

# Objectives

1. To create a rough roadmap v1 of the steps an application should go through with **the knowledge I currently have**. <-- **This repo is about this objective, I'm here**
2. To create a rough roadmap v2 of the steps an application should go through with **some of the knowledge I still need to acquire**.
3. To create a rough roadmap v3 of the steps an application should go through improving my setup with **knowledge acquired to make the whole process be almost completely automated**.

_Overall idea of these objectives is to progressively add layers of knowledge and new practices so they can be digested nicely. Too much in one round and I can just feel lost. Maybe I can rewrite these Roadmaps to be less redundant and more DRY or in a version-like fashion_

# Requirements

- Define a set of steps by which I will build, deploy and run an application
- Give detail about each step implementation
- Pick the tools each step will involve
- Determine rough estimations

# Roadmap v1

- [x] Use httpbin for a backend service to save some time
- [x] Put together a small frontend app that interacts with httpbin
- [x] Containerize both apps using Docker (httpbin would be already containerized)
- [x] Write down a docker compose file to
- [x] Create services
- [x] Link them so they can talk to each other
- [x] Insert any env variables needed
- [ ] Create and configure a GCP (App Engine) project to host the app <-- **I'm here**
- [ ] Deploy the App into the GCP project
