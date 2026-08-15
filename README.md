## About

This project powers a real-world photography website and is intentionally designed to be reusable, customizable and easy to adapt for other photographers.

## Configuration

### Simple

#### Favicon
Replace an *.svg file located at src/assets/favicon.example.svg with your own image.

### Detailed

#### Environment variables
Various variables are located in the .env.example file.
Recommended to rename it from ".env.example" to ".env.local" for the file to be added to the gitignore.

VITE_FAVICON variable points to the favicon image.
Recommended to rename "favicon.example.svg" to "favicon.local.svg" for the file to be added to the gitignore. Then update the path in the VITE_FAVICON.