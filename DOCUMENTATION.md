<div id="top"></div>
<br />

<!-- PROJECT INTRO -->
<div align="center">
    <a href="https://github.com/omatech/oma-cookies">
        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFxVreSDp08_w/company-logo_200_200/0/1646817864804?e=1654732800&v=beta&t=MOoMzAXsSOpcBj9ro350Ky98jNJp3LO2IwbL_r61TeM" alt="Omatech Logo" width="80" height="80">
    </a>
    <h1 align="center">Oma-cookies Documentation</h1>
    <p align="center">Built-in solution that allows the control of cookies, <br>enabling GDPR compliance for Omatech internal projects.</p>
</div>

<!-- TABLE OF CONTENTS -->
<h2>Table of contents</h2>
<ol>
    <li>
        <a href="#introduction">Introduction</a>
        <ul>
            <li><a href="#how">How does it work?</a></li>
        </ul>
    </li>
    <li><a href="#quick-installation">Quick installation</a></li>
    <li>
        <a href="#advanced-installation">Advanced Installation</a>
        <ul>
            <li><a href="#omac-obj">The OMAC object</a></li>
            <li><a href="#available-langs">Available languages</a></li>
            <li><a href="#default-lang">Default language</a></li>
            <li><a href="#read-more">Read more link</a></li>
            <li><a href="#format">Format</a></li>
            <li><a href="#quick-link">Quick link position</a></li>
        </ul>
    </li>
    <li><a href="#languages">Languages and translations</a></li>
    <li>
        <a href="#styling">Styling</a>
        <ul>
            <li><a href="using-css">Using plain CSS</a></li>
            <li><a href="using-sass">Override variables with SASS</a></li>
        </ul>
    </li>
</ol>

<p align="right"><a href="#top">↑ Back to top</a></p>

<!-- INTRODUCTION -->
<h2 id="introduction">Introduction</h2>
<p>The General Data Protection Regulation (GDPR) applies to all websites with users from the EU. <br>
Oma-cookies provides control over all cookies and trackings on the website.</p>

<h3 id="how">How does it work?</h3>
<ul>
    <li><strong>Cookie consent dialog</strong> <br>
    Oma-cookies provides a highly-customizable, user friendly consent advice that will appear everytime a new user visits the website. <br>
    Once the user has made this choice, he will be able to easily change its cookies consent configuration using the "quick link" widget that will appear in a fixed customizable position.
    </li>
    <li><strong>Content blocking</strong> <br>
    Oma-cookies automatically detects all cookies and similar trackers on the website and blocks them until consent is given.
    </li>
    <li><strong>Cookie tracking</strong> <br>
    <!-- TODO text for cookie tracking -->
    </li>
</ul>

<p align="right"><a href="#top">↑ Back to top</a></p>

<!-- QUICK INSTALLATION -->
<h2 id="quick-installation">Quick installation</h2>

In this section, we will approach the quick installation of Oma-cookies in your project (without any additional configuration). We will use the compiled, minified version of the js and css files located in `/dist` folder.

<ol>
    <li>
        <p>Install the Oma-cookies package in your project. <br>
        Have in mind this is a private package, so you need to have access.</p>

```sh
npm i omatech/oma-cookies
``` 
</li>
    <li>
        <p>Import the stylesheet link in the head of your main html document before all other stylesheets</p>

```html
<link href="path-to-oma-cookies/dist/css/omacookies.css" rel="stylesheet">
```
<p>In addition, you will have to add the following line to the html meta tags to allow the webpage to be responsive</p>

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

</li>
    <li>
        <p>Add the compiled javascript bundle file to your project main view</p>

```html
<script src="path-to-oma-cookies/dist/js/omacookies.min.js"></script>
```
</li>
</ol>

<!-- ADVANCED INSTALLATION -->
<h2 id="advanced-installation">Advanced installation</h2>

<p>In case you want to highly customize Oma-cookies (add custom translation strings, change styles through sass, etc) source files are also available in the package. </p>
<p>

We suggest to create a new folder into your project called `oma-cookies` and locate inside a copy of the following folders:
</p>

    src                      # Your project src folder
    └── oma-cookies          # New oma-cookies folder
        ├── img              # Copy of `path-to-oma-cookies/src/img`
        ├── js               # Copy of `path-to-oma-cookies/src/js`
        ├── lang             # Copy of `path-to-oma-cookies/src/lang`
        └── scss             # Copy of `path-to-oma-cookies/src/scss`

<p>Make sure you include all the required npm packages into your project in order to be able to compile the files.</p>
<p>In the next sections, we are going to explain all the customizable features of Oma-cookies package.</p>
