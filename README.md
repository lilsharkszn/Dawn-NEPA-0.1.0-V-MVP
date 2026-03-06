TESTING CICD. 

# Dawn-NEPA – Nigeria Light Tracker

**Dawn-NEPA** is a React-based web application that tracks electricity availability across Nigeria. It is designed for real-time monitoring and provides a simple, user-friendly interface.

---

## Features

- Real-time display of power availability
- Responsive design for mobile and desktop
- Built with React and served via Nginx
- Continuous Deployment with Jenkins CI/CD pipeline
- Dockerized for easy deployment

---

## Tech Stack

- **Frontend:** React
- **Backend / Server:** Nginx (serving static build)
- **Containerization:** Docker
- **CI/CD:** Jenkins
- **Hosting:** AWS EC2 behind an Application Load Balancer (ALB)
- **Version Control:** Git / GitHub

---

## Project Structure


Dawn-NEPA/ ├── src/                  # React source code ├── public/               # Public assets including index.html ├── Dockerfile            # Multi-stage Dockerfile for build & serve ├── nginx.conf            # Nginx configuration ├── Jenkinsfile           # CI/CD pipeline ├── package.json ├── package-lock.json └── README.md

---

## Prerequisites

- Node.js >= 20
- Docker
- Git
- Jenkins (for CI/CD)
- Access to AWS EC2 instances
- Docker Hub account for image push

---

## Setup Instructions (Development)

1. **Clone the repository**
```bash
git clone git@github.com:lilsharkszn/Dawn-NEPA.git
cd Dawn-NEPA

Install dependencies
npm install

Run the app locally
npm start

Build & Dockerize
npm run build

Build the Docker image
docker build -t dawn-nepa:latest .

Run the container locally
docker run -p 80:80 dawn-nepa:latest

CI/CD with Jenkins
Push code to GitHub → Jenkins automatically:
Builds Docker image
Pushes image to Docker Hub
Deploys to AWS EC2 instances via SSH
Uses credentials stored securely in Jenkins:
Docker Hub credentials
EC2 SSH key
Access
Application is accessible via AWS Application Load Balancer (ALB)
Ensure your EC2 instances are running and ALB DNS is configured
License
MIT License © 2026 Lilsharkszn⁠�


