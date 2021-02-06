# Portfolio App

### Bundled using Monospace Yarn Workspace

### Steps to deploy to heroku
    * heroku container:login
    * heroku create {name} --manifest
    * heroku container:push web --app {name}
    * heroku container:release web --app {name}
