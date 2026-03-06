pipeline {
    agent any 

    environment {
        // Name of your Docker image in Docker Hub
        DOCKER_IMAGE = 'lilsharkszn/dawn-nepa:latest' 

        // Docker credentials ID stored in Jenkins
        DOCKER_CREDENTIALS_ID = 'Docker-key' 

        // SSH credentials ID for your EC2 hosts
        SSH_CREDENTIALS_ID = 'EC2-key' 

        // EC2 hosts private IPs (replace with your hosts)
        EC2_HOSTS = ['10.0.1.195', '10.0.3.109'] 

        // Container and host ports
        CONTAINER_PORT = '80'
        HOST_PORT = '80'
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
                    docker.build(DOCKER_IMAGE, './')
                }
            }
        } 

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID,
                                                 usernameVariable: 'DOCKER_USER',
                                                 passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKER_IMAGE
                        """
                    }
                }
            }
        } 

        stage('Deploy to EC2') {
            steps {
                script {
                    for (host in EC2_HOSTS) {
                        sshagent([SSH_CREDENTIALS_ID]) {
                            sh """
                            ssh -o StrictHostKeyChecking=no ubuntu@$host '
                                docker pull $DOCKER_IMAGE &&
                                docker stop dawn-nepa || true &&
                                docker rm dawn-nepa || true &&
                                docker run -d -p $HOST_PORT:$CONTAINER_PORT --name dawn-nepa $DOCKER_IMAGE
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
            echo "Deployment completed successfully!"
        }
        failure {
            echo "Something went wrong during the CI/CD process."
        }
    }
}
