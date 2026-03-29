pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t aurastay-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5003:3000 aurastay-app'
            }
        }
    }
}