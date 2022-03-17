# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
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
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./src/assets/design/ss%20my%20work.jpg)

### Links

- Solution URL: [HERE](https://github.com/slothmast3r/interactive-comment-section)
- Live Site URL: [HERE](https://slothmast3r.github.io/interactive-comment-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Vuex](https://vuex.vuejs.org/) - For data storing

### What I learned

```js
import { store } from '../store'
app.use(store)
```
```js
loaderOptions: {
  sass: {
    additionalData: `
    @import "/scss/_variables.scss";
    @import "/scss/_general.scss";
    `
  }
}
```
```vue
 <comment
        v-for="reply in replies"
        :key="reply.id"
        :rating-score="reply.score"
        :comment-content="reply.content"
        :user="reply.user"
        :created-at="reply.createdAt"
        :comment-id="reply.id"
        :user-score="reply.userScore"
        :current-user="currentUser"
        :replying-to="reply.replyingTo"
      />
```

[//]: # If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


[//]: # ### Continued development


[//]: # (Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.)


### Useful resources
- [Load styles globally](https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/) - This helped me to apply styles globally.
- [Custom input vue](https://dev.to/viniciuskneves/vue-custom-input-bk8) - Making custom input.


## Author

- Website - [None :<](https://www.your-site.com)
- Frontend Mentor - [@slothmast3r](https://www.frontendmentor.io/profile/slothmast3r)
