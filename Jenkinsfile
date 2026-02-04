pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/nodejs-ec2-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-ec2-app:latest .'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no ec2-user@<EC2_PUBLIC_IP> '
                  docker stop nodeapp || true
                  docker rm nodeapp || true
                  docker run -d --name nodeapp -p 3000:3000 node-ec2-app:latest
                '
                """
            }
        }
    }
}
