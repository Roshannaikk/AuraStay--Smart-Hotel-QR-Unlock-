pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/Roshannaikk/AuraStay--Smart-Hotel-QR-Unlock-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t aurastay .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 aurastay'
            }
        }
    }
}