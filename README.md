# Retool Take Home Exercise

This is a frontend exercise that will give you the chance to see what kind of things we build at Retool!

We'd like to build a mini-version of Retool - (mostly on the drag and drop side of Retool).

- We should have a list of buttons that create components (buttons, inputs, dropdowns, and tables). This is already done for you in the starter application.
- When a user clicks one of the buttons, a component should appear somewhere on the canvas.
- The user should be able to drag components around the canvas. (In the real Retool, other components will move out of the way to make room for the component, but you don't need to do this for your version.)
- The canvas should have a fixed grid (e.g. 25x25 pixels per tile), and components should snap on to the these grid locations on the canvas (In Retool, our grid is 12 columns and dynamically sized, but you don't need to do this for your version.)
  - adding a grid visual guide is a plus! (In Retool, we display the grid thru polka dots while the user is dragging)
- The positions of the components should be remembered across page refreshes. (what's the easiest way to store data on a browser?)

We have a basic starter app is also provided under the `./app` directory so you don't have to start from scratch. It'll look something like this to start off with:

![starter-screenshot](https://i.imgur.com/qeOjbvc.png)

Ideally, this should take around a day to finish, but let us know how much time you spent so we can calibrate our expectations!

## Hints / Tips

- You can use any drag and drop library you want, but we think the `react-draggable` is the easiest library to use.
- Ideally, you'll use something like `redux` to store the positions of the components, but the exact implementation is up to you!
- It doesn't have to look pixel perfect with amazing animations, but we do care a lot about UX and usability at Retool.
  - Paying attention to details like padding, alignment, and cursors are appreciated!
  - Ideally your components would fit the grid, to make layout easy for your users
  - Pick any UI toolkit (Bootstrap, Material, etc.), but try to make everything look consistent.
  - Handle the UX edge-cases! For example, what happens when a user resizes the screen to be smaller? Ideally a user would still be able to access all the components they placed 
- Even though we're only asking you to build a few different possible draggable components, how can we structure it so that it's easy to add a new component?
- Feel free to put whatever data in the table your want. It's just a placeholder. In the real retool, the data is based on dynamic queries.
- You can check out Retool at https://login.tryretool.com/auth/signup to see how Retool's drag and drop works. Here's a screenshot of some tables and inputs in Retool for reference.
  ![retool-screenshot](https://i.imgur.com/ndTbBqR.png)
  ![retool-dragndrop-gif](https://cl.ly/9d0a7607b4b0/Screen%20Recording%202019-04-01%20at%2012.17%20AM.gif)

## Getting started

Run the following commands:

```
cd app
npm start
```

After that, your browser should open up a skeleton React app. You can tedit any file in `./src/` and in _most_ cases the website will hot-reload.

For more info, you can check out https://github.com/facebook/create-react-app

## Bonus

- How could it be adapted to also allow users to resize components?
- What would it look like to select a component and then edit certain "properties" like the text, border radius, options, etc?

## Questions?

Don't hestitate to reach out to us if you have any q's :)
