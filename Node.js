ADDON
----------

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
  

