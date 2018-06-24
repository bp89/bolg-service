# BOLGER UI

## CDC Web UI
`bolger-ui` is a frontend application created using react.

### Prerequisites
* git
* npm
* docker


### Getting Started
**Running the client UI locally**

- Follow the steps in the README under `bolger-web` folder, to build then run the app via docker.
    - Alternatively you can also run the Spring Web tier locally in IntelliJ, you'll just need to run on port `8090`.
- Add `bolger-web` and `bolger-db` to your hosts file, pointing to `127.0.0.1`.
- Run the following to start the UI via webpack:
    ```
        $ npm install
        $ npm run lint
        $ npm run dev
    ```

**Creating an image**

```
        npm install
        npm run build
```

## CDC Web Server
Refer to `README.md` in the `bolger-web` folder for more information.
