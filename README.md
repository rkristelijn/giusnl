# Gius.nl
This is just a personal github repository to stash my code. If you need a template to start of your website, feel free to use my code. Also I'm happy to receive comments. My aim is to create a responsive, if possible progressive web app to manage my blog posts. Before I wrote any code I wrote this.

Most probably the site is already running on [Gius.nl](gius.nl)

## Mission statement
Create a good template, with the least amount of code that is as light as possible that delivers the most tidy result.

# Plan
- **step 0: write this document (current status)**
- step 1: create a github, stash my code
- step 2: create a app shell, so it loads my stuff, potentially using HTML5 cache
- step 3: create some static content
- step 4: create a rest service to be able to manage my content

# Honorable mentions
Beforehand I want to thank all the resources that I could use to create this epic project;
- [Douwe Egberts](https://www.douwe-egberts.com/) coffee: *no coffee no code*
- [Hertog Jan](http://www.hertogjan.nl/bieren/) beer
- The [Internet](http://hmpg.net/): *for letting me copy all the code*:
- Jono, Tony and Paavo of [Above and Beyond](http://www.aboveandbeyond.nu/): *for letting me code on in tune*
- [Brackets.io](brackets.io) for a free IDE

### Step 2a: Basic HTML5 page
 Kevin Yank wrote an article about the [minimal HTML5 page](https://www.sitepoint.com/a-minimal-html-document-html5-edition/) in 2010 - this is a good read; short summary: type optional in both style and script tags.
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Gius.nl</title>
    <link rel="stylesheet" href="style.css">
    
  </head>
  <body>
    <!-- i want to first load the page and then the javascript -->
      <script src="script.js"></script>
  </body>
</html>
````
Also I took a look at the [HTML5 styleguide](http://www.w3schools.com/html/html5_syntax.asp) and checked the page on [W3 html checker](https://validator.w3.org/).
### Step 2b: add bootstrap
I'm not going to reinvent the wheel for layouts. I don't even want a css. Maybe I need it in future, but for now I'm going to use the *vanilla* Twitter [bootstrap](http://v4-alpha.getbootstrap.com/getting-started/best-practices/)