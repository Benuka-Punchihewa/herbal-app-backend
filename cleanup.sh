#!/bin/bash

echo "Activate Docker Daemon From Minikube"
eval $(minikube docker-env)

echo "Removing Kubernetes Deployments"
kubectl delete -n default deployment auth-deployment
kubectl delete -n default deployment user-deployment
kubectl delete -n default deployment api-gateway-deployment

echo "Removing Kubernetes Services"
kubectl delete -n default service auth-service
kubectl delete -n default service user-service
kubectl delete -n default service api-gateway-service

echo "Removing Kubernetes ConfigMaps"
kubectl delete -n default configmap auth-config
kubectl delete -n default configmap user-config
kubectl delete -n default configmap api-gateway-config

echo "Removing Docker Images"
docker rmi -f auth-service:1.0
docker rmi -f user-service:1.0
docker rmi -f api-gateway:1.0