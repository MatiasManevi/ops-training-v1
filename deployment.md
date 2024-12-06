# Steps to build and deploy in localhost

Just run

```sh
docker-compose up --build
```

Then navigate to `http://localhost:1000/`

# Steps to build and deploy the app to GCP

## 1. Create a Docker Hub Account (if you don’t have one)

Login to Docker Hub from your CLI
```sh
docker login
```

message should say `Login Succeeded`

### 2. Tag the Docker Image

Build the image (if you haven’t already):
```sh
docker build ./httpbin-react-app/
```

Docker images need to be tagged with the appropriate format before pushing them to Docker Hub. The format is:
```sh
docker tag <local-image-name> <dockerhub-username>/<repository-name>:<tag>
```

For example:
```sh
docker tag httpbin-react-app matiasmanevi/ops-training:1.0
```

- Replace myusername with your Docker Hub username.
- Replace my-app with your repository name.
- Replace 1.0 with the desired version or tag.

## 3. Push the Docker Image to Docker Hub

Run the docker push command with the tagged image:
```sh
docker push <dockerhub-username>/<repository-name>:<tag>
```

For example:
```sh
docker push matiasmanevi/ops-training:1.0
```

This uploads the image to the specified repository on Docker Hub.
