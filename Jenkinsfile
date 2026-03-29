pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'pip install -r requirements.txt'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t aurastay-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5003:5000 aurastay-app'
            }
        }
    }
}