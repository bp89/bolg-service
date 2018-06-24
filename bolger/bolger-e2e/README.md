# BOLGER E2E Tests

## Prerequisites
* [Chrome Driver](https://sites.google.com/a/chromium.org/chromedriver/)

  Download the chrome driver suitable for your operation system and make it available in the class path.
  
  For example, On Mac, I have the `chromedriver` under the root of the `bolger-e2e`.

  Then configure your System Properties to have the the property webdriver.chrome.driver to have the path to the chromedriver as well
    
   For easy installation if you have homebrew
   
   ```
        brew install chromedriver
   ```

## Run
1. Run the E2E Tests
    - With Maven
        
        ```
        $ cd /path/to/bolger
        $ mvn -N clean verify -Pintegration-tests-dev
        ```
    
    - From IDE with Local Chrome

        **Bring up the environment:**
        
        ```
        $ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up bolger-db bolger-web bolger-ui
        ```
        
        **From IntelliJ,** 
                
            * Add the following line to VM Options to the JUnit runner
                 
                 -Dspring.profiles.active=dev

            * Working Dir: $MODULE_DIR$

            * Env Variables
                HOST_DOWNLOAD_DIR=/tmp/downloads
                SERVER_PORT=58091
                MONGODB_PORT=57018
                 
            * Run `RunCukesIT`
            
    - From IDE with Remote Chrome
    
        **Bring up the environment:**
        ```
        $ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up bolger-db bolger-web bolger-ui chrome
        ```
        **From IntelliJ,** 
                
            * Add the following line to VM Options to the JUnit runner
                 
                 -Dspring.profiles.active=it

            * Working Dir: $MODULE_DIR$

            * Env Variables
                HUB_URL=http://localhost:4444/wd/hub
                MONGODB_HOST=localhost
                MONGODB_PORT=57018
                 
            * Run `RunCukesIT`