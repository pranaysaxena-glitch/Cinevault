# AWS EC2 Deployment Guide for CineVault

This guide explains how to deploy the CineVault static website on an AWS EC2 Ubuntu instance using Nginx.

Important reminders:

- Do not assume an EC2 instance already exists.
- Replace placeholders such as `<EC2_PUBLIC_IP>` before running commands.
- Do not hardcode AWS keys or credentials in source files.
- Keep commands clearly separated between Windows (PowerShell) and Ubuntu Linux.

## Step 1: Launch an EC2 instance

Log in to the AWS Management Console and create a new EC2 instance.

Recommended settings:

- Amazon Machine Image (AMI): Ubuntu Server 24.04 LTS
- Instance type: Free Tier-eligible machine type available for your account
- Key pair: Create and download a .pem file
- Security group:
  - SSH: port 22 from your IP address
  - HTTP: port 80 from Anywhere IPv4

## Step 2: Connect to the EC2 instance

### Windows PowerShell

```powershell
ssh -i "C:\Users\YourUser\Downloads\cinevault-key.pem" ubuntu@<EC2_PUBLIC_IP>
```

### Alternative: EC2 Instance Connect

Use the AWS console's EC2 Instance Connect feature if your environment supports it.

## Step 3: Update Ubuntu

### Ubuntu terminal

```bash
sudo apt update
sudo apt upgrade -y
```

## Step 4: Install Nginx

### Ubuntu terminal

```bash
sudo apt install nginx -y
```

## Step 5: Upload the CineVault project files to EC2

### Windows PowerShell (from your local machine)

```powershell
scp -i "C:\Users\YourUser\Downloads\cinevault-key.pem" -r "C:\Projects\EC2 assignmnet\CineVault" ubuntu@<EC2_PUBLIC_IP>:/tmp/
```

If you want to zip the folder before transfer:

```powershell
Compress-Archive -Path "C:\Projects\EC2 assignmnet\CineVault\*" -DestinationPath "C:\Projects\EC2 assignmnet\CineVault.zip" -Force
scp -i "C:\Users\YourUser\Downloads\cinevault-key.pem" "C:\Projects\EC2 assignmnet\CineVault.zip" ubuntu@<EC2_PUBLIC_IP>:/tmp/
```

## Step 6: Copy the website files to /var/www/html/

### Ubuntu terminal

```bash
sudo rm -rf /var/www/html/*
sudo cp -r /tmp/CineVault/* /var/www/html/
```

If the project was zipped:

```bash
cd /tmp
unzip CineVault.zip
sudo cp -r /tmp/CineVault/* /var/www/html/
```

## Step 7: Set correct permissions

### Ubuntu terminal

```bash
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

## Step 8: Start and enable Nginx

### Ubuntu terminal

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx --no-pager
```

## Step 9: Verify Nginx is running

### Ubuntu terminal

```bash
sudo systemctl is-active nginx
curl -I http://localhost
```

You should see a successful HTTP response from the local Nginx server.

## Step 10: Open the website

Open the EC2 public IPv4 address in a browser:

```text
http://<EC2_PUBLIC_IP>
```

This should load the CineVault homepage.

## Troubleshooting

### Website not opening

- Confirm the security group allows port 80.
- Ensure the EC2 instance is running.
- Check whether Nginx is active:

```bash
sudo systemctl status nginx --no-pager
```

### Nginx not running

```bash
sudo systemctl restart nginx
sudo systemctl status nginx --no-pager
```

### Permission denied

```bash
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

### Security group errors

- Add port 22 for SSH from your IP.
- Add port 80 for HTTP from anywhere IPv4.
- Reconnect to the EC2 instance after updating the security group.

### Missing CSS

Check whether the style.css file is present in /var/www/html and that the HTML file references it correctly.

```bash
ls -l /var/www/html/
cat /var/www/html/index.html | grep -n "style.css"
```

### Missing JavaScript

Check whether script.js is present and properly referenced.

```bash
ls -l /var/www/html/
cat /var/www/html/index.html | grep -n "script.js"
```

### Broken video links

- Validate that the sample video URLs are reachable.
- Ensure the browser allows remote media files.
- Try loading the URL directly in a browser tab.

## Useful Commands

### Ubuntu terminal

```bash
sudo tail -n 50 /var/log/nginx/error.log
sudo nginx -t
sudo systemctl reload nginx
```

## Deployment Summary

The project is deployed as a static website, which is suitable for a college AWS cloud computing assignment. It demonstrates real hosting on Ubuntu EC2 while keeping the frontend simple and directly compatible with Nginx static hosting.
