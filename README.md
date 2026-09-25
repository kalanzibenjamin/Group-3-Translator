# Kyambogo Language Translator

A simple web-based translation application that allows users to translate text between supported languages using the Sunbird AI translation service.

## Project Overview

The Kyambogo Language Translator is a frontend web application developed using:

- HTML
- CSS
- JavaScript
- Sunbird AI Translation API

The application provides a simple university-style interface where users can enter text, select a source language and target language, and receive a translated result.

The application is designed to be hosted online using **GitHub Pages**.

## Supported Languages

The application currently supports:

- **English**
- **Iteso**
- **Runyankole**

Users can select the source and target languages using the language dropdown menus.

## How It Works

### 1. User Enters Text

The user enters text into the input area and selects:

- Source language
- Target language

The interface also provides a button for swapping the source and target languages.

### 2. User Clicks Translate

When the user submits the translation form, `script.js` sends a `POST` request directly to the Sunbird AI translation API.

The request contains:

```json
{
  "text": "Hello world",
  "source_language": "en",
  "target_language": "..."
}
```

The exact language codes are determined by the language options configured in the HTML file.

### 3. Sunbird AI Processes the Request

The JavaScript sends the request to the Sunbird translation endpoint:

```text
https://api.sunbird.ai/tasks/translate
```

The request includes the required authorization token and JSON data containing the text and selected languages.

### 4. Translation Result

The application receives the response from Sunbird AI and reads the translated text from:

```text
output.translated_text
```

The translated result is then displayed in the translation output area.

### 5. Error Handling

If the translation request fails, the application:

- Displays an error message to the user
- Shows additional error information
- Logs the error in the browser console
- Re-enables the Translate button

## Project Structure

```text
project/
├── index.html         # Main webpage and language options
├── style.css          # Styling for the interface
├── script.js          # Translation logic and Sunbird API request
├── kyulogo.jpeg       # Kyambogo University logo
├── README.md          # Project documentation
└── outputs/           # Optional project output files
```

## Translation Process

The application follows this process:

```text
User enters text
       ↓
Select source language
       ↓
Select target language
       ↓
Click Translate
       ↓
JavaScript sends request
       ↓
Sunbird AI Translation API
       ↓
Translation response
       ↓
Translated text displayed
```

## GitHub Pages Hosting

The application is designed to run as a static website, making it suitable for GitHub Pages.

The main files required for the website are:

```text
index.html
style.css
script.js
kyulogo.jpeg
```

Because the translation request is made directly from `script.js`, the application does not require a Node.js server to run the frontend.

Once the project is uploaded to GitHub and GitHub Pages is enabled, users can access the translator through the published website.

## API Configuration

The application uses the Sunbird AI translation endpoint:

```text
https://api.sunbird.ai/tasks/translate
```

The JavaScript sends requests using:

```text
POST
```

with JSON data containing:

- Text to translate
- Source language
- Target language

The API returns the translated text, which the application displays to the user.

## Security Note

The Sunbird API authorization token should **not** be publicly exposed in a GitHub repository.

For a public deployment, API credentials should ideally be handled through a backend server or another secure method rather than being placed directly in client-side JavaScript.

Never commit a private API token to a public GitHub repository.

## Running the Project

Since this is a frontend application, no Node.js installation is required to use the hosted version.

### Using GitHub Pages

1. Upload the project files to a GitHub repository.
2. Open the repository's **Settings**.
3. Open **Pages**.
4. Select the appropriate branch and folder.
5. Save the GitHub Pages configuration.
6. Open the generated GitHub Pages website.

### Running Locally

The project can also be opened locally by running the `index.html` file in a web browser.

For the best results, a local development server can be used.

## Features

The application includes:

- English translation
- Iteso translation
- Runyankole translation
- Source language selection
- Target language selection
- Language swap button
- Translation output
- Translation error handling
- Loading state while translating
- Responsive university-style interface
- GitHub Pages compatibility

## Technologies Used

### HTML

Used to create the structure of the translator interface.

### CSS

Used to style the application and create the university-themed interface.

### JavaScript

Used to:

- Handle user interactions
- Swap languages
- Submit translation requests
- Communicate with the Sunbird API
- Process API responses
- Display translated text
- Handle errors

### Sunbird AI

Used as the translation service for processing translation requests.

## Summary

The Kyambogo Language Translator is a frontend web application that provides translation between **English, Iteso, and Runyankole**.

The application uses HTML, CSS, and JavaScript for its interface and functionality, while the **Sunbird AI Translation API** processes the translation requests.

The project is designed to be hosted on **GitHub Pages**, allowing users to access the translator through a web browser without installing the application locally.