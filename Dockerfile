FROM readytalk/nodejs

ADD ./src /app
ADD ./ssl-proxy /proxy

COPY ./run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 3000
EXPOSE 4000

ENTRYPOINT ["/run.sh"]
