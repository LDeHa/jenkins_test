node {
    stage('Checkout') {
        checkout scm
    }

    stage('Build') {
        try {
            bat 'npm install'
            bat 'npm run build'
        } catch (e) {
            error "Build failed: ${e}"
        }
    }

    stage('Test') {
        def testsPassed = bat(script: 'set CI=true && npm test', returnStatus: true)
        if (testsPassed != 0) {
            error 'Test failed!'
        }
    }

    stage('Deploy') {
        bat 'npm start'
    }
}
