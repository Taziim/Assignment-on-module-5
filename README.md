# 🚀 Vite React App with GitHub Actions CI Pipeline
A modern **Vite + React** application integrated with **GitHub Actions CI Pipeline** using a **Self-hosted Runner**.
# 📋 Assignment Overview
This project demonstrates the implementation of a **Continuous Integration (CI)** pipeline for a React application as part of the **GitHub Actions Fundamentals** assignment.
## 📌 Problem Statement
The company wanted to automate the testing and build process of their React application to reduce manual work, save time, and minimize human errors.
This repository implements an automated CI pipeline that:
- Automatically runs on every push to the `development` branch
- Uses a **Self-hosted Runner**
- Builds the React application automatically
---
# ✨ Features
- ✅ Automated CI pipeline with GitHub Actions
- ✅ Self-hosted runner integration
- ✅ Automatic dependency installation
- ✅ Automatic React/Vite project build
- ✅ Workflow debugging support
- ✅ Artifact upload after successful build
---
# ⚙️ GitHub Actions Workflow
## 📄 Workflow YAML File
```yaml
name: React App Pipeline

on:
  push:
    branches:
      - development

  pull_request:
    branches:
      - development

jobs:
  test:
    name: Run Tests
    runs-on: self-hosted

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Install dependencies
        run: npm install --force --legacy-peer-deps

  build:
    name: Build React App
    runs-on: self-hosted
    needs: test

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Debug - list files
        run: |
          pwd
          ls -la
          cat package.json

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Install dependencies
        run: npm install --force --legacy-peer-deps

      - name: Build application
        run: npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: react-build
          path: dist/
          retention-days: 7
```
# 📸 Submission Requirements (Completed)
## ✅ Workflow YAML File
Included above.
---
## ✅ Screenshot of Successful Pipeline Execution
<img width="959" height="506" alt="success1" src="https://github.com/user-attachments/assets/921cf600-b845-4fc6-8f57-9ea0d8e4ec38" />
---
## ✅ Screenshot of Failed Pipeline Debugging
<img width="941" height="422" alt="succssfullbuild" src="https://github.com/user-attachments/assets/319db75b-995a-4997-b5cb-0d0549ec8c9a" />
---
## ✅ Screenshot of Server Connection to GitHub Actions
<img width="953" height="473" alt="githubactionsconf1" src="https://github.com/user-attachments/assets/c114a4cc-758f-4a02-8618-851198eaaa6d" />
<img width="947" height="392" alt="githubactionsconf2" src="https://github.com/user-attachments/assets/b5cd4258-d62d-4383-af96-eefa12d1fd14" />
---
# 🔄 CI/CD Pipeline Explanation
## 🚀 Workflow Trigger
The workflow automatically runs when code is:
- pushed to the `development` branch
- a pull request is created for the `development` branch
---
## 🖥 Runner Used
This project uses a:
### ✅ Self-hosted Runner
The workflow jobs are executed on a custom machine instead of GitHub-hosted runners.
---
## ⚡ Pipeline Steps

1. Checkout repository code
2. Setup Node.js environment
3. Install project dependencies
4. Build the React application
5. Upload build artifacts
---
# 📝 Concepts Explanation
## 📌 What is CI/CD?
### Continuous Integration (CI)
Continuous Integration is the process of automatically building and testing code whenever developers push changes to the repository.
It helps:
- detect bugs early
- improve code quality
- reduce manual work
- ensure stable builds
---
### Continuous Delivery / Deployment (CD)
Continuous Delivery or Deployment automates the process of preparing or deploying applications after successful testing.
---
## 📌 Benefits of CI/CD
- Faster development cycle
- Early bug detection
- Reduced human error
- Automated testing and building
- Better collaboration
---
# 🖥 What is a Self-hosted Runner?
There are two types of runners in GitHub Actions:
1. GitHub-hosted Runner
2. Self-hosted Runner
A **Self-hosted Runner** is a machine managed by the developer to run GitHub Actions workflows.
It can be:
- a local computer
- virtual machine
- cloud server
### Advantages
- More control over environment
- Custom software installation
- Better hardware performance
- Access to private/internal resources
---
# ⚙️ Workflow Execution Process
1. A `push` event occurs on the `development` branch.
2. GitHub detects the workflow YAML file.
3. GitHub sends the job to the registered self-hosted runner.
4. The runner executes each workflow step sequentially.
5. GitHub displays workflow success or failure status.
---
