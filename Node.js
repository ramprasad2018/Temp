ADDON
----------
Source code of the book C++ and Node.js Integration
https://github.com/freezer333/nodecpp-demo

https://github.com/justadudewhohacks/node-addon-tutorial


Installing node on Redhat
-------------------------
 https://linuxize.com/post/how-to-install-node-js-on-centos-7/
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs

  

Commands
----------
node-gyp --python c:\Python27 configure
hello.cc should be from 
https://nodejs.org/api/addons.html

using .so
-----------
https://stackoverflow.com/questions/50531237/node-gyp-c-import-shared-library-so
"include_dirs": [
  "../../src",
  "/usr/local/include/RF24"
],
"libraries": [
  "/usr/local/lib/librf24.so.1.3.1"
]

How to retrive arguments
-------------------------
  
  http://luismreis.github.io/node-bindings-guide/docs/getting-started.html
  

