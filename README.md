# Hillel Spring Boot Security Demo
Sample app for demonstrating Spring Boot

## Following tools and frameworks are used:
- Spring Boot
  - Data-JPA
  - Security
  - Web (Tomcat)

## Project structure
```sh
├── README.md
├── pom.xml
└── src
    ├── main
    │   ├── frontend # Frontend React app directory 
    │   ├── java     # Spring Boot app directory
    │   └── resources
    └── test
        └── java

```

## Build

### To build the whole project incl. Spring Boot and Frontend:
 - Install node packages
  ```
  cd src/main/frontend
  npm install
```
- Run maven build
```bash
    mvn clean package
```


### To build frontend only:
- Build react app
```bash
    mvn frontend:install-node-and-npm frontend:npm
```
Build is now available in `src/main/build` directory

- Copy built resources into `static` directory
```bash
    mvn resources:copy-resources
```

## Run
```bash
    mvn spring-boot:run
```
App is now running at [http://localhost:8080](http://localhost:8080)
