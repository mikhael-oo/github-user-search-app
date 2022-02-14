# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - GitHub user search app solution](#frontend-mentor---github-user-search-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./screenshot.png alt)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript DOM manipulation
- Fetch API
- Mobile-first workflow

### What I learned

I learned to use CSS Grid to position items in a 2-dimensional format. I also learned to use fetch and asynchronous programming to get data from an API and make use of the data. Also, I learned to use the prefers-color-scheme property of CSS to customize the look of the web app according to the user's system preferences.

To see how you can add code snippets, see below:

```css
@media (prefers-color-scheme: light) {
    #light {
        display: none;
    }
    #dark {
        display: block;
    }

    body {
        background-color: #f6f8ff;
        color: #697c9a;
    }
```

```js
async function getUserInformation(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw Error("No response returned") 
    const data = await response.json();
    return data;
}
```

### Continued development

I wanna go deeper into learning async-await and its uses, and also, I want to continue learning about CSS Grid and thus solidify my knowledge of it. I want to learn TailwindCSS and use it effectively and also ReactJS and use both of them in upcoming projects.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This helped me learn how to convert Date formats to the format I want.
- [CSS Tricks](https://css-tricks.com/guides/) - This helped me transverse the world of CSS Grid.
  
## Author

- Website - [Mikhael Opeyemi-Olatunji](https://github.com/mikhael-oo)
- Frontend Mentor - [@mikhael-oo](https://www.frontendmentor.io/profile/mikhael-oo)
- Twitter - [@thamikky](https://www.twitter.com/thamikky)
