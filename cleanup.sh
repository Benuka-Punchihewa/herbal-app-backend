#!/bin/bash

echo "Activate Docker Daemon From Minikube"
eval $(minikube docker-env)

echo "Removing Kubernetes Deployments"
kubectl delete -n default deployment auth-deployment
kubectl delete -n default deployment user-deployment
kubectl delete -n default deployment api-gateway-deployment
kubectl delete -n default deployment product-deployment
kubectl delete -n default deployment order-deployment
kubectl delete -n default deployment payment-deployment
kubectl delete -n default deployment feedback-deployment

echo "Removing Kubernetes Services"
kubectl delete -n default service auth-service
kubectl delete -n default service user-service
kubectl delete -n default service api-gateway-service
kubectl delete -n default service product-service
kubectl delete -n default service order-service
kubectl delete -n default service payment-service
kubectl delete -n default service feedback-service

echo "Removing Kubernetes ConfigMaps"
kubectl delete -n default configmap auth-config
kubectl delete -n default configmap user-config
kubectl delete -n default configmap api-gateway-config
kubectl delete -n default configmap product-config
kubectl delete -n default configmap order-config
kubectl delete -n default configmap payment-config
kubectl delete -n default configmap feedback-config

echo "Removing Docker Images"
docker rmi -f auth-service:1.0
docker rmi -f user-service:1.0
docker rmi -f api-gateway:1.0
docker rmi -f product-service:1.0
docker rmi -f order-service:1.0
docker rmi -f payment-service:1.0
docker rmi -f feedback-service:1.0