# bolger-web

## Prerequisites

- Git ([OSX](https://git-scm.com/download/mac)) ([Windows](https://git-scm.com/download/win))
  ([Linux](https://git-scm.com/download/linux))
- Docker ([OSX](https://www.docker.com/products/docker#/mac))
  ([Windows](https://www.docker.com/products/docker#/windows))
  ([Linux](https://www.docker.com/products/docker#/linux))

## Initial Configurations

### SSL
Place the proper keystore file in the resources folder.
Then in the `applications.properties` file, update following properties accordingly for SSL to work.

```
server.port={port to run the application for HTTPS, default is 8443}
server.ssl.enabled=true
server.ssl.key-alias={alias if any}
server.ssl.key-store=bolger-web/src/main/resources/{name of keystore}.jks
server.ssl.key-store-password={secret for the keystore}
```

## Install, build and run as follows:

1. Clone the repo

    ```
    $ git clone https://github.com/AuroTFP/bolger.git
    ```
    
2. Build the project:

    ```
    $ cd /path/to/bolger
    $ mvn clean package
    ```
    
3. Run the app:

    #### Through Docker

    ```
    $ cd /path/to/bolger/bolger-web
    $ docker-compose up
    ```
    #### Through IntelliJ / Eclipse
    
    You can open up the project in IntelliJ / eclipse, and run the application with the
    following parameters:

    Main class: `BolgerWeb`
    JVM Arguments: `-Dlog4j.configurationFile=log4j2-dev.xml`

## Google Drive Integration 

### Creating Google Drive Credential 

1. Use this ([wizard](https://console.developers.google.com/start/api?id=drive)) to create or select a project in the Google Developers Console and automatically turn on the API. Click Continue, then Go to credentials.
2. On the Add credentials to your project page, click the Cancel button.
3. At the top of the page, select the OAuth consent screen tab. Select an Email address, enter a Product name if not already set, and click the Save button.
4. Select the Credentials tab, click the Create credentials button and select OAuth client ID.
5. Select the application type Other, enter the name "APPLICATION_NAME", and click the Create button.
6. Click OK to dismiss the resulting dialog.
7. Click the file_download (Download JSON) button to the right of the client ID.


Reference for Google Drive Rest API 
https://developers.google.com/drive/v3/web/about-sdk 

API Console - https://console.developers.google.com
