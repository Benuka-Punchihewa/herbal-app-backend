#!/bin/bash

echo "Activate Docker Daemon From Minikube"
eval $(minikube docker-env)

echo "Build Auth-Service Docker Image"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/auth-service
docker build -t auth-service:1.0 .

echo "Deploy Auth-Service to Kubernetes Cluster"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/auth-service/kubernetes_config
kubectl apply -f auth-config.yaml
kubectl apply -f auth.yaml


echo "Build User-Service Docker Image"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/user-service
docker build -t user-service:1.0 .

echo "Deploy User-Service to Kubernetes Cluster"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/user-service/kubernetes_config
kubectl apply -f user-config.yaml
kubectl apply -f user.yaml


echo "Build API-Gateway-Service Docker Image"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/api-gateway
docker build -t api-gateway:1.0 .

echo "Deploy API-Gateway-Service to Kubernetes Cluster"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/api-gateway/kubernetes_config
kubectl apply -f api-gateway-config.yaml
kubectl apply -f api-gateway.yaml


echo "Build Product-Service Docker Image"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/product-service
docker build -t product-service:1.0 .

echo "Deploy Product-Service to Kubernetes Cluster"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/product-service/kubernetes_config
kubectl apply -f product-config.yaml
kubectl apply -f product.yaml


echo "Build Order-Service Docker Image"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/order-service
docker build -t order-service:1.0 .

echo "Deploy Order-Service to Kubernetes Cluster"
cd /home/benuka/Programming/SLIIT/Y3S2/DS/herbal-app-backend/order-service/kubernetes_config
kubectl apply -f order-config.yaml
kubectl apply -f order.yaml
