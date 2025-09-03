# 🚀 Launching a Static Website on Linux EC2

This project demonstrates how to host a **static website (HTML, CSS, JS)** on an **Amazon EC2 instance** running Linux.  
It covers the complete workflow from creating an EC2 instance to making the website publicly accessible.

---

## 📌 Project Overview
- Deployed a static website on **AWS EC2 (Linux-based)**.
- Configured **Apache Web Server** to serve the website.
- Secured inbound traffic with **Security Groups**.
- Verified public accessibility using the **EC2 Public IP / DNS**.

---

## 🛠️ Technologies Used
- **Amazon Web Services (AWS)**
  - EC2 (Elastic Compute Cloud)
  - Security Groups
- **Linux (Amazon Linux)**
- **Apache HTTP Server**
- **Git** (for version control)
- **HTML, CSS, JavaScript** (for the website)

---

## ⚙️ Steps to Deploy

1. **Launch EC2 Instance**
   - provide a name for ypur instance.(cafe bliss)
   - OS: Amazon Linux 2 / Ubuntu
   - Instance Type: t3.micro (Free Tier)
   - select key pair (your .pem file)
   - choose your VPC if required or keep the default VPC 
   - Configure Security Group: Allow **HTTP (80)** and **SSH (22)**.
   - click on launch instance
  
     <img width="1276" height="784" alt="image" src="https://github.com/user-attachments/assets/ec0b887f-100d-4613-9762-f5fbf8d03924" />
     <img width="1279" height="565" alt="image" src="https://github.com/user-attachments/assets/0d559a75-2c6b-48ee-9460-52f365555d85" />
     <img width="1232" height="676" alt="image" src="https://github.com/user-attachments/assets/24f6638b-a29c-47ca-ada0-3e1469442fe4" />
     <img width="578" height="126" alt="image" src="https://github.com/user-attachments/assets/73386a0d-bbca-442d-b133-427c1677f87c" />

    - once yoour ec2 is launches successfully, your instance dashboard should look like this :
      <img width="1615" height="274" alt="image" src="https://github.com/user-attachments/assets/e4579723-624f-4adc-800b-5b6305d74b17" />


2. **Connect to EC2 via SSH**
   - select the instance (cafe bliss) and click on connect
   - go to ssh client
   - copy the shh command
   - go to cmd and enter the folder where your .pem file exists  
   ```bash
   ssh -i "your-key.pem" ec2-user@<EC2-Public-IP>

  <img width="1463" height="687" alt="image" src="https://github.com/user-attachments/assets/1c570e12-8f0f-4952-89cf-5c5389386877" />
  <img width="1071" height="491" alt="image" src="https://github.com/user-attachments/assets/274e8376-116c-45e7-8fbd-f74fa3a10521" />
  - now you are into your EC2 instance .

3. **Install Apache Web Server**
   - run the following command to install apache web server.
   ```bash
   sudo yum update -y         # For Amazon Linux
   sudo yum install httpd -y
   sudo systemctl start httpd
   sudo systemctl enable httpd
   sudo systemctl status httpd    #Check if status is active

4. **Deploy Website Files**
   -copy your folder/files in apache default root directory.
   -open cmd and run the command 
     scp -i "path to your .pem file" "path to your index.html" "path to your style.css" "path to your script.js" ec2-user@ipaddress:/home/ec2-user
   - ssh into your ec2 instance by ssh pasting the command
      ssh -i "your .pem" ec2-user@ec2-<IP@address>.<region>.compute.amazonaws.com
     
   <img width="1046" height="322" alt="image" src="https://github.com/user-attachments/assets/4d1de7f7-18db-4cc8-b736-7273efb35c80" />
   - move your files to  apache default root directory (/var/www/html)
     ```bash
      sudo mv index.html style.css script.js /var/www/html
   <img width="757" height="111" alt="image" src="https://github.com/user-attachments/assets/95988fb8-033d-4b7c-8a8d-4f659e144a09" />


5. **Access Website**
   -Open your browser → http://<EC2-Public-IP>/index.html

<img width="924" height="983" alt="image" src="https://github.com/user-attachments/assets/6e8b0a6a-edec-4875-8e57-dd3e73213567" />


Your static site is live!
     

  


   
   
  

