pipeline {
    agent any
    environment{
        registryCredential = 'gcloud-cred'
        REPO_LOC = 'us-central1-docker.pkg.dev/sanbox-credit/fromjenkins/testapp'
        LOCATION = 'us-central1'
        PROJECT_ID = 'sanbox-credit'
        REPOSITORY = 'fromjenkins'
        APP_NAME = "testapp"
    }
    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'master' , url: 'https://github.com/FFSiyam/stopwatch.git'
            }
        }
        stage('Dependency install') {
            steps {
                sh 'sudo npm install'
            }
        }
        stage('Build applicaton') {
            steps {
                sh 'sudo npm run build'
            }
        }
        stage('Dockerfile build') {
            steps {
                sh "docker build -t '$REPO_LOC':'$BUILD_NUMBER' ."
            }
        }
        stage('push to repo') {
            steps {
                withCredentials([file(credentialsId: 'gcloud-cred', variable: 'gcloud-cred')]){
                     sh '''
                        docker push '$REPO_LOC':'$BUILD_NUMBER'
                        '''
                }
               
            }
        }
        stage('deploy to run') {
            steps {
                sh "gcloud run deploy stopwatch --image '$REPO_LOC'/:'$BUILD_NUMBER' --region us-central1"
            }
        }
        stage('policy binding') {
            steps {
                sh "gcloud run services add-iam-policy-binding jenkins \
                    --member='serviceAccount:jenkinspipeline@sanbox-credit.iam.gserviceaccount.com' \
                    --region='us-central1' \
                    --member='allUsers' \
                    --role='roles/run.invoker'" 
            }
        }
    }
}