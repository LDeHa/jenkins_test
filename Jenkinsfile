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
        if (env.BRANCH_NAME == 'main' || env.GIT_BRANCH == 'origin/main') {
            bat 'npm start'
        } else {
            echo 'Skipped deploy because this is not the main branch'
        }
    }
}
