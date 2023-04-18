# herbal-app-backend

## Execution Instructions  

### Setup Execution Enviroment
1. Install and set up Docker - https://docs.docker.com/engine/install/
2. Install and set up Minikube - https://minikube.sigs.k8s.io/docs/start/
3. Open terminal and run `minikube start`

### Build Docker Images and Deploy Services in Kubernetes Cluster
1. Go inside each microservice application (node.js microservices) and run `npm install` (This can be set up to do when building the Docker images but to make the process faster, manual approach is used)
2. Go back to the app's root directory
3. Open deploy.sh and cleanup.sh in a test editor
4. Update paths of Dockerfiles and Kubernetes configuration files properly in both shell scripts (deploy.sh and cleanup.sh)
5. Open terminal in the app's root directory
6. Enable execution permissions for deploy.sh and cleanup.sh by running `chmod +x ./deploy.sh` & `chmod +x ./cleanup.sh`
7. Run `./deploy.sh` to build Docker images and deploy them to Kubernetes Cluster.
8. Run `./cleanup.sh` to delete deployments, services, configs from Kubernetes Cluster and remove Docker images from Minikube docker environment.

### Rebuilding and Deploying the Application
It is mandatory to clean the previous deployments and delete previous Images before making a new deployment. 
1. Run `./cleanup.sh` to delete deployments, services, configs from Kubernetes Cluster and remove Docker images from Minikube docker environment.
2. Run `./deploy.sh` to build Docker images and deploy them to Kubernetes Cluster.

### Accessing the services
After a successful deployment, API gateway is accessible at *\<Minikube IP Addr\>:30100*  
Minikube IP can be accessed by running `minikube ip` command in a terminal.
