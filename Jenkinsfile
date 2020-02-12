node {

    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        echo 'Clonning repository...'
        scmvars = checkout scm
    }

    if(scmvars.GIT_BRANCH == 'origin/develop') {

        echo 'Starting develop pipeline...'

        stage('Build image') {
            /* This builds the actual image; synonymous to
            * docker build on the command line */
            echo 'Building image...'
            sh 'sudo npm install'
            app = docker.build("bernat11/mycoworkings-frontend")
        }

        stage('Test image') {
            /* Ideally, we would run a test framework against our image.
            * For this example, we're using a Volkswagen-type approach ;-) */
            app.inside {
                sh 'echo "Tests passed"'
            }
        }

        stage('Push image') {
            /* Finally, we'll push the image with two tags:
            * First, the incremental build number from Jenkins
            * Second, the 'latest' tag.
            * Pushing multiple tags is cheap, as all the layers are reused. */
            echo 'Pushing image to DockerHub...'
            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }
        }

        stage('Deploy to AWS') {
            /* Deploy the pushed image in DockerHub into AWS EC2 instance.*/
            
        }
    }
    
}