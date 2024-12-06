# Steps to setup GCP to deploy the app

## 1. Set Up Your GCP Project

- Log in to the GCP Console.
- Select or create a new GCP project.
- Enable the App Engine API:
  - Go to APIs & Services > Library.
  - Search for App Engine Admin API and enable it.
- Ensure billing is enabled for your project.

## 2. Install and Set Up Google Cloud CLI

Download gcloud cli.

Authenticate with your GCP account
```sh
gcloud auth login
```

Set your project
```sh
gcloud config set project <your-project-id>
```

## 3. Prepare Your Docker Image for GCP

#### Push Your Docker Image to Google Container Registry (GCR)

App Engine requires the image to be stored in a container registry accessible to GCP.

Tag your image for GCR:
```sh
docker tag <your-image>:<tag> gcr.io/<your-project-id>/<your-image>:<tag>
```

For example:
```sh
docker tag matiasmanevi/httpbin-react-app:1.0 gcr.io/peaceful-app-443920-q1/httpbin-react-app:1.0
```

Push the image to GCR:
```sh
docker push gcr.io/peaceful-app-443920-q1/httpbin-react-app:1.0
```

#### Verify the Image in GCR:
- Navigate to Container Registry in the GCP Console.
- Check if your image is listed.
