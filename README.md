# Dockerizing Dictionnary App and Establishing connection between containers
## the project compose of two part Front and Back
### 1 Build Image using Docker compose for the Backend ( an express app connected to mongoDb to save words meanings ) and create dicionnaryback_default network
![image](https://user-images.githubusercontent.com/19810131/224193751-373544f0-e7b0-4abf-b167-477d9a09ee26.png)

### 2 Build Image using Docker file for the frontend (an express app contain a form)
![dictionnary app build](https://user-images.githubusercontent.com/19810131/224193205-65dbb0b8-b067-4763-987f-15908802321e.png)

### 3 run the container to associated network 
![image](https://user-images.githubusercontent.com/19810131/224193373-139cf343-52ff-4a78-90f8-9466cf7dab5e.png)

## 2 Listing created images
![image](https://user-images.githubusercontent.com/19810131/224194311-740c39e6-0536-4e6c-8edd-1c4f7f5702e0.png)
## 3 Listing created containers
![image](https://user-images.githubusercontent.com/19810131/224194567-7928ee42-b3e2-4ac7-87a0-d7dd75153c04.png)
## 4 Inspect network dicionnaryback_default
![image](https://user-images.githubusercontent.com/19810131/224195003-ef18cf9d-7ecd-4e0f-8df7-b4698bda0091.png)
## 5 test the app
![image](https://user-images.githubusercontent.com/19810131/224195163-f2b91051-287c-4d84-b333-2a65e3e8580f.png)






