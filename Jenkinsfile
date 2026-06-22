node {
    ws('C:\\Users\\dong\\Documents\\Codex\\2026-06-22\\d\\work\\jenkins_prac3_workspace') {
        stage('Checkout') {
            checkout scm
        }

        stage('Install') {
            try {
                bat 'npm install'
            } catch (e) {
                error "Install failed: ${e}"
            }
        }

        parallel(
            Build: {
                stage('Build') {
                    try {
                        echo "Build running on ${env.NODE_NAME}"
                        bat 'npm run build'
                    } catch (e) {
                        error "Build failed: ${e}"
                    }
                }
            },
            Test: {
                stage('Test') {
                    echo "Test running on ${env.NODE_NAME}"
                    def testsPassed = bat(
                        script: 'set CI=true && npm test -- --watchAll=false',
                        returnStatus: true
                    )

                    if (testsPassed != 0) {
                        error 'Test failed!'
                    }
                }
            }
        )

        stage('Deploy') {
            echo 'Deploy stage: build output is ready.'
            bat 'dir build'
        }
    }
}
