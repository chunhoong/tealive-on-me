pipeline {
  agent any

  stages {
    stage('Build & pack') {
      steps {
        nodejs(nodeJSInstallationName: '14 LTS') {
          checkout scm
          bat 'npm i'
          bat 'npm run build'
        }
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}