pipeline {
  agent any

  environment {
    // Name of your Docker image in Docker Hub
    DOCKER_IMAGE = 'lilsharkszn/dawn-nepa:latest'

    // Docker credentials ID stored in Jenkins
    DOCKER_CREDENTIALS_ID = 'Docker-key'

    // SSH credentials ID for your EC2 hosts
    SSH_CREDENTIALS_ID = 'EC2-key'

    // EC2 hosts private IPs (comma-separated); split in the Deploy stage
    EC2_HOSTS = '10.0.1.195,10.0.3.109'

    // Container and host ports
    CONTAINER_PORT = '80'
    HOST_PORT = '80'

    // SSH user (change if needed)
    EC2_USER = 'ubuntu'

    // Container name on the EC2 hosts
    CONTAINER_NAME = 'dawn-nepa'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'git@github.com:lilsharkszn/Dawn-NEPA.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build(env.DOCKER_IMAGE, './')
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: env.DOCKER_CREDENTIALS_ID,
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh '''
            set -euo pipefail
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push "$DOCKER_IMAGE"
          '''
        }
      }
    }

    stage('Deploy to EC2') {
      steps {
        script {
          def hosts = env.EC2_HOSTS.split(',')*.trim()

          sshagent(credentials: [env.SSH_CREDENTIALS_ID]) {
            for (host in hosts) {
              sh """
                set -euo pipefail
                ssh -o StrictHostKeyChecking=no ${env.EC2_USER}@${host} '
                  set -euo pipefail
                  docker pull ${env.DOCKER_IMAGE}
                  docker stop ${env.CONTAINER_NAME} || true
                  docker rm ${env.CONTAINER_NAME} || true
                  docker run -d --restart unless-stopped \
                    -p ${env.HOST_PORT}:${env.CONTAINER_PORT} \
                    --name ${env.CONTAINER_NAME} \
                    ${env.DOCKER_IMAGE}
                '
              """
            }
          }
        }
      }
    }
  }

  post {
    success {
      echo 'Deployment completed successfully!'
    }
    failure {
      echo 'Something went wrong during the CI/CD process.'
    }
  }
}
