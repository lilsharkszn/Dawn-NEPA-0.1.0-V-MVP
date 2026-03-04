pipeline {

    agent any

    tools {

        nodejs 'NodeJS-25'

    }

    stages {

        stage('Checkout Code') {

            steps {

                git branch: 'main', url: 'https://github.com/lilsharkszn/Dawn-NEPA-0.1.0-V-MVP'

            }

        }

        stage('Install Dependencies') {

            steps {

                sh 'npm install'

            }

        }

        stage('Build React App') {

            steps {

                sh 'npm run build'

            }

        }

        stage('Archive Artifacts') {

            steps {

                archiveArtifacts artifacts: 'build/**', fingerprint: true

            }

        }

    }

    post {

        success { echo 'Build succeeded!' }

        failure { echo 'Build failed!' }

    }

}
