REGISTRY_NAME:= hasanashik
SERVICE_NAME:= node-svc
IMAGE_NAME:= ${REGISTRY_NAME}/${SERVICE_NAME}
TAG:= 1.0

docker-login:
	@ docker login -u $$DOCKER_USERNAME -p $$DOCKER_PASSWORD

docker-build:
	@ echo ${IMG}
	@ docker build -t ${IMAGE_NAME}:${TAG} .

docker-push:
	@ docker push ${IMAGE_NAME}:${TAG}