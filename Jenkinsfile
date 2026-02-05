pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-ec2-app:latest .'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                docker stop nodeapp || true
                docker rm nodeapp || true
                docker run -d -p 3000:3000 --name nodeapp node-ec2-app:latest
                '''
            }
        }

    }
}
