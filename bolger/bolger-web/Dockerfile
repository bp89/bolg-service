FROM openjdk:8u141-jre-slim

WORKDIR /

ARG JAR_FILE
ADD target/${JAR_FILE} //
RUN ln -s ${JAR_FILE} bolger-web.jar

ADD gdrive-credential/StoredCredential //gdrive-credential//StoredCredential

ADD target/classes/start-bolger-web.sh //
RUN chmod +x /start-bolger-web.sh

ADD target/classes/start-cdc-web-localdev.sh //
RUN chmod +x /start-bolger-web-localdev.sh

CMD ["/start-bolger-web.sh"]