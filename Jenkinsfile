node {
    ws('C:\\Users\\dong\\Documents\\Codex\\2026-06-22\\d\\work\\jenkins_prac3_workspace') {
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
                script: 'set CI=true && npm test -- --watchAll=false',
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
}
