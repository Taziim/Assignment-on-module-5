# Vite React App with GitHub Actions CI Pipeline
A modern Vite + React application with automated Continuous Integration (CI) using **GitHub Actions** and **Self-hosted Runner**.
## 📋 Assignment Overview
This project demonstrates the implementation of a **Continuous Integration (CI)** pipeline for a Vite React application as part of **Module 5 - GitHub Actions Fundamentals**.
### Problem Statement
The company wanted to automate the testing and build process to reduce manual effort and human errors. This repository implements an automated CI pipeline that triggers on every push to the `development` branch.
## 🚀 Features
- Automated build on every push to `development` branch
- Uses **Self-hosted Runner** instead of GitHub-hosted runners
- Node.js environment setup
- Dependency installation and project build
- Clean CI workflow using GitHub Actions
## 🛠 Technologies Used
- **Frontend**: React.js + Vite
- **CI/CD**: GitHub Actions
- **Runner**: Self-hosted Runner
- **Package Manager**: npm
## 📋 Submission Requirements (Fulfilled)
-Workflow YAML file 
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
- [x] Screenshot of successful pipeline execution
<img width="959" height="506" alt="success1" src="https://github.com/user-attachments/assets/921cf600-b845-4fc6-8f57-9ea0d8e4ec38" />
- [x] Screenshot of failed pipeline debugging
<img width="941" height="422" alt="succssfullbuild" src="https://github.com/user-attachments/assets/319db75b-995a-4997-b5cb-0d0549ec8c9a" />
- [x] Screenshot of server connection to github aciton
<img width="953" height="473" alt="githubactionsconf1" src="https://github.com/user-attachments/assets/c114a4cc-758f-4a02-8618-851198eaaa6d" />
<img width="947" height="392" alt="githubactionsconf2" src="https://github.com/user-attachments/assets/b5cd4258-d62d-4383-af96-eefa12d1fd14" />
- [x] Short explanation of CI/CD, Self-hosted Runner & Workflow
## 🔧 CI/CD Pipeline
### Workflow Trigger
- Automatically runs when code is **pushed to the `development` branch**
### Runner Used
- **Self-hosted Runner** (executes jobs on local/custom machine)
### Pipeline Steps
1. Checkout code
2. Setup Node.js environment
3. Install dependencies (`npm i`)
4. Run tests (if available)
5. Build the project (`npm run build`)
6. Verify build output
## 📝 Explanations
### What is CI/CD?
**Continuous Integration (CI)** is the practice of automatically building and testing code changes whenever developers push code to the github. It helps catch bugs early and ensures code quality.
**Continuous Delivery/Deployment (CD)** extends this by automatically preparing or deploying the application.
**Benefits**: Code organization,Faster feedback, fewer integration issues, consistent builds, and reduced manual work.
### What is a Self-hosted Runner?
there are two runner one is github defaul and another is self hosted.A self-hosted runner is a machine (laptop, server, or VM) that you manage yourself to run GitHub Actions jobs. It gives more control over the environment, software versions, hardware, and network access compared to GitHub-hosted runners.
### Workflow Execution Process
1. A `push` event occurs on the `development` branch.
2. GitHub detects the workflow file and sends the job to the registered **self-hosted runner**.
3. The runner executes each step sequentially.
4. Logs are available in real-time on the **Actions** tab.
5. Success or failure status is clearly visible.
## 🧪 How to Run Locally
```bash
# Clone the repository
git clone <your-repo-url>
cd <repo-name>
# Install dependencies
npm install

# Run development server
npm run dev
