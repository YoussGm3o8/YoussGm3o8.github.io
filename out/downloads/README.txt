# DOWNLOADS DIRECTORY

This directory contains downloadable files for projects showcased in the portfolio.

## FILES

- `school-supplies-management.jar`: JavaFX application for the School Supplies Management System project
  - Requires Java 11+ and JavaFX runtime
  - File size: Approx. 15-20MB

## INSTRUCTIONS FOR ADDING NEW JAR FILES

1. Export your JavaFX application as a runnable JAR (preferably with dependencies included)
2. Use a meaningful filename that corresponds to the project
3. Update the project page to link to the correct JAR file
4. Consider adding a brief README or instruction file alongside complex applications

## NOTES ON JAVAFX APPLICATIONS

JavaFX applications need additional configuration to run from JAR files:
- Java 11+ is required
- JavaFX runtime must be installed
- The JAR should be run with module path and modules specified:
  ```
  java --module-path /path/to/javafx-sdk/lib --add-modules javafx.controls,javafx.fxml -jar your-application.jar
  ``` 