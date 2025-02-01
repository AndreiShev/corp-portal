FROM eclipse-temurin:17-jdk-alpine

LABEL author="shevelvandrey"

WORKDIR /app

COPY target/corp-portal-core-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]