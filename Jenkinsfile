pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull code from your GitHub repo
                git branch: 'main', url: 'https://github.com/lilsharkszn/Dawn-NEPA-0.1.0-V-MVP.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Build production version of React app
                sh 'npm run build'
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive the build folder so it can be downloaded from Jenkins
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Check console output for details.'
        }
    }
}
