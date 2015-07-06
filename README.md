# node-http-proxy-test

Run the following commands:

    git clone https://github.com/munjalpatel/node-http-proxy-test.git
    cd node-http-proxy-test
    docker build -t node-proxy-test .
    docker run --name node-http-proxy-test -d -e PORT=3000 -e PROXY_PORT=4000 -p 3000:3000 -p 4000:4000 node-proxy-test
