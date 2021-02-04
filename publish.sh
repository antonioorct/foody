cd client
npm i 
npm run-script build
rm -rf ../server/public
mv build ../server/public
cd ../server
npm i