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
        def testsPassed = bat(
            script: 'set CI=true && npm test -- --watchAll=false --passWithNoTests',
            returnStatus: true
        )

        if (testsPassed != 0) {
            error 'Test failed!'
        }
    }

    stage('Deploy') {
        echo 'Deploy stage: build output is ready.'
        bat 'dir build'
    }
}
