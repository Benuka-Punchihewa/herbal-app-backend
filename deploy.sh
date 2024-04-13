#!/bin/bash
current_dir=$(pwd)

echo "Activate Docker Daemon From Minikube"
eval $(minikube docker-env)

echo "Build Auth-Service Docker Image"
cd $current_dir/auth-service
docker build -t $(minikube ip):5000/auth-service:1.0 .

echo "Deploy Auth-Service to Kubernetes Cluster"
cd $current_dir/auth-service/kubernetes_config
kubectl apply -f auth-config.yaml
kubectl apply -f auth.yaml


# echo "Build User-Service Docker Image"
# cd $$current_dir/user-service
# docker build -t user-service:1.0 .

# echo "Deploy User-Service to Kubernetes Cluster"
# cd $$current_dir/user-service/kubernetes_config
# kubectl apply -f user-config.yaml
# kubectl apply -f user.yaml


# echo "Build Product-Service Docker Image"
# cd $$current_dir/product-service
# docker build -t product-service:1.0 .

# echo "Deploy Product-Service to Kubernetes Cluster"
# cd $$current_dir/product-service/kubernetes_config
# kubectl apply -f product-config.yaml
# kubectl apply -f product.yaml


# echo "Build Order-Service Docker Image"
# cd $$current_dir/order-service
# docker build -t order-service:1.0 .

# echo "Deploy Order-Service to Kubernetes Cluster"
# cd $$current_dir/order-service/kubernetes_config
# kubectl apply -f order-config.yaml
# kubectl apply -f order.yaml


# echo "Build Payment-Service Docker Image"
# cd $$current_dir/payment-service
# docker build -t payment-service:1.0 .

# echo "Deploy Payment-Service to Kubernetes Cluster"
# cd $$current_dir/payment-service/kubernetes_config
# kubectl apply -f payment-config.yaml
# kubectl apply -f payment.yaml

# echo "Build Feedback-Service Docker Image"
# cd $$current_dir/feedback-service
# docker build -t feedback-service:1.0 .

# echo "Deploy Feedback-Service to Kubernetes Cluster"
# cd $$current_dir/feedback-service/kubernetes_config
# kubectl apply -f feedback-config.yaml
# kubectl apply -f feedback.yaml


# echo "Build Email-Service Docker Image"
# cd $$current_dir/email-service
# docker build -t email-service:1.0 .

# echo "Deploy Email-Service to Kubernetes Cluster"
# cd $$current_dir/email-service/kubernetes_config
# kubectl apply -f email-config.yaml
# kubectl apply -f email.yaml


# echo "Build API-Gateway-Service Docker Image"
# cd $$current_dir/api-gateway
# docker build -t api-gateway:1.0 .

# echo "Deploy API-Gateway-Service to Kubernetes Cluster"
# cd $$current_dir/api-gateway/kubernetes_config
# kubectl apply -f api-gateway-config.yaml
# kubectl apply -f api-gateway.yaml

