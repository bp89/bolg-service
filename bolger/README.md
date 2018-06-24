# BOLGER

## For Developers

Please refer to the README.md in each subsequent folder for development instructions

## Running the entire application on local machine

### Prerequisites

- Git ([OSX](https://git-scm.com/download/mac)) ([Windows](https://git-scm.com/download/win))
  ([Linux](https://git-scm.com/download/linux))
- Docker installed and running ([OSX](https://www.docker.com/products/docker#/mac))
  ([Windows](https://www.docker.com/products/docker#/windows))
  ([Linux](https://www.docker.com/products/docker#/linux))
- NPM & Node (Generally installing one will include the other)
    - npm 5.6.0+ installed (https://www.npmjs.com/get-npm)
    - node 9.5.0+ installed (https://nodejs.org/en/download/current/)
- Java 8 installed (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    - If you have previously had Java 9 installed, change the JAVA_HOME path to where Java 1.8 is
        - e.g. for a Mac, you can run the following after install 
        ``` 
            $ export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
        ```
- Maven 3.3.9+ installed (https://maven.apache.org/install.html)

### Clone the repository

```
    $ git clone https://github.com/AuroTFP/bolger.git
```
    
### Build the application

```
    $ cd /path/to/bolger
    $ mvn clean package
```

### Remove previous running containers

```
    $ cd /path/to/bolger
    $ docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```

### Run the application

```
    $ cd /path/to/bolger
    $ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up bolger-db bolger-web bolger-ui
```

You should now be able to open up a browser and navigate to the following address:

``` 
    https://localhost
```

## Running the Client Onboarding and the Integration applications (`Sandbox / Production`)

### Generate a self signed certificate for CDM Integration Service

To generate a self signed certificate , use below command 

    $ cd /path/to/CDM-Integration-Service
    $ keytool -genkey -v -keystore keystore.jks -alias spring -keyalg RSA -keysize 2048 -validity 10000
    
Enter the password mentioned in `server.ssl.key-store-password` property of below file. 

`pathToCDM-Integration-Service/fenergo-cdm-integration/src/main/resources/application.properties` 

### Ensure that the applications have been built

For CDM Integration Service

```
    $ cd /path/to/fenergo-cdm-integration
    $ mvn clean package
```

For BOLGER

```
    $ cd /path/to/bolger
    $ mvn clean package
```

### Remove previous running containers

```
    $ cd /path/to/bolger
    $ docker-compose -f docker-compose.yml -f docker-compose.all.yml down -v
```

### Ensure you are connected to the VPN

The application will default connect to the Sandbox fenergo service and database so VPN will need to be connected

### Run the entire stack

Note: The below will connect to the live Fenergo service and MSSQL database so ensure that this is up and running.

```
    $ cd /path/to/bolger
    $ docker-compose -f docker-compose.yml -f docker-compose.all.yml up
```

### Running the application

You should now be able to access the application via https://localhost

You should also be able to use tools like Postman to trigger a notifyCdm call.

## Trigger notifyCdm calls using Postman
1. There are two types of notifications:
	* Client Onboarding (fetches legal entity data)
	* Document (fetches documents that appear on "What we need from you" page)
2. You must send both types for a legal entity to see all that entity's information. Current default configuration will display info for entities #4, 6, 25, 26
3. Send Client Onboarding request for each entity
4. Send Document request for each entity

### Postman Configuration
**General Details**  
  * Request type: POST
  * Base URL: http://localhost:8080/cdm/notifyCdm
  * Auth Type: Digest
  * Credentials: Auro/pwd
	
**Request Body**  
  * Format: JSON(application/json)
  * Type: raw
	
*Client Onboarding request example*
```
{"LEID": "26",
"Source": "Client Onboarding",
"Detail": "Enrich Client Information"}
```
*Document request example*
```
{"LEID": "26",
"Source": "Document Requirement",
"Detail": "Enrich Client Information"}
```