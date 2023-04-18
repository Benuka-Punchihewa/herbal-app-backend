# herbal-app-backend

## Execution Instructions  

### Setup Execution Enviroment
1. Install and set up Docker
2. Install and set up Minikube
3. Open terminal and run `minikube start`

### Build Docker Imaages and Deploy Services in Kubernetes Cluster
1. Go to the app's root directory
2. Open deploy.sh and cleanup.sh in a test editor
3. Update paths of Dockerfiles and Kubernetes configuration files properly in both shell scripts (deploy.sh and cleanup.sh)
4. Open terminal in the app's root directory
5. Enable execution permissions for deploy.sh and cleanup.sh
6. Run `./deploy.sh` to build Docker images and deploy them to Kubernetes Cluster.
7. Run `./cleanup.sh` to delete deployments, services, configs from Kubernetes Cluster and remove Docker images from Minikube docker environment.

### Rebuilding and Deploying the Application
#### It is mandatory to clean the previous deployments and delete previous Images before making a new deployment. 
1. Run `./deploy.sh` to build Docker images and deploy them to Kubernetes Cluster.
2. Run `./cleanup.sh` to delete deployments, services, configs from Kubernetes Cluster and remove Docker images from Minikube docker environment.

### Accessing the services
#### After a successful deployment, API gateway is accessible at *\<Minikube IP Addr\>:30100*
#### Minikube IP can be accessed by running `minikube ip` command in a terminal.
