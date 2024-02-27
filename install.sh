sudo apt install screen
sudo apt-get update 
sudo apt install nginx 
sudo apt install curl 
cd / 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
source ~/.bashrc 
nvm install node 
sudo apt install git 
sudo apt install snapd 
sudo snap install --classic certbot 
sudo ln -s /snap/bin/certbot /usr/bin/certbot 
sudo apt install screen 
cd /var/www
git clone https://github.com/silvereennetwork/Moonlight4.0.git
cd Moonlight4.0
npm i
screen
npm start
