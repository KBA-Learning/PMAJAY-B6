## Docker

Step 1: Download the install script
```
curl -fsSL https://get.docker.com -o get-docker.sh
```
Step 2: Execute permission for the script
```
sudo chmod +x get-docker.sh
```
Step 3: Execute the script
```
./get-docker.sh
```
Step 4: Remove the script
```
rm get-docker.sh
```
Step 5: To manage Docker as a non-root user
```
sudo usermod -aG docker $USER
```
```
docker compose --version
docker --version

```

To run the docker file first we need to build the image, we can do it using 
```
docker build -t [image_name]:[tag] [context_path]

docker build -t image1:1.0 .
```

We use dot as the context path, because our docker file is in the current directory, means the folder path of Docker file. If your docker file has another name then
```
docker build -t [image_name]:[tag] -f [dockerfile] [context_path]
```

To run the the image
```
docker run --name [container_name] [image_name]

docker run image1:1.0
```
