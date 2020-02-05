# Mark Miller's Portfolio

I built this portfolio in React so it would serve as a code sample. It highlights some of the work I've done.

## Structure

The _src_ directory is structured as follows:

```
src
├── components/                # Holds a directory for each component
│    └── Example/
│       ├── Example.jsx        # JSX that makes up component
│       ├── Example.module.css # Processed as a CSS Modules file
│       └── index.js           # Makes components cleaner to import
├── data/                      # Holds JSON data used to populate the portfolio
│   └── example.js
└── styles/                    # Holds normal CSS files (reset, variables, etc.)
    └── example.css
```

## Notes

- This application uses [CSS Modules](https://github.com/css-modules/css-modules). I've suffixed my components' styles with `.module.css` so they'll be processed as such. I previously outlined the benefits of this approach [here](https://zeph.co/css-modules).
- Components are held in a _components_ folder with a corresponding _index.js_ file to make them easier to import. That way, you can use syntax such as `import Example from '../Example'` throughout the component library.
- Instead of wiring up SCSS (which I've done in the past, with [MageTools](https://mage.tools)), I'm using [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), sometimes called "CSS variables". Once defined, custom properties can be called with `var(--name)`. These are supported in [all modern browsers](https://caniuse.com/#feat=css-variables); I'm making an educated guess (based on my site's analytics data and other personal experience) that none of my typical clientele use Internet Explorer 11... or Baidu Browser.
- Certain data is processed as Markdown with the popular [react-markdown](https://github.com/rexxars/react-markdown) package. You can learn more about Markdown [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Developing

If you want to use this portfolio as a starting point for your own, you are welcome to do so (just make sure to remove my projects and add your own).

This is a standard, non-ejected Create React App application. Therefore, you can use `npm start` to start it, `npm build` to build it, and so on. View all available commands inside _package.json_.

## Credit

I used the wonderful [react-icons] extension for the SVGs in this app.

| Icon Library                                                  | License                                                                                   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Ant Design Icons](https://ant.design/components/icon/)       | [MIT](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE)                 |
| [Bootstrap Icons](https://icons.getbootstrap.com/)            | [MIT](https://github.com/twbs/icons/blob/master/LICENSE.md)                               |
| [Devicon](https://konpa.github.io/devicon/)                   | [MIT](https://github.com/konpa/devicon/blob/master/LICENSE)                               |
| [Feather](https://feathericons.com/)                          | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                        |
| [Font Awesome](https://fontawesome.com/)                      | [CC BY 4.0 License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt)  |
| [Game Icons](https://game-icons.net/)                         | [CC BY 3.0](https://github.com/game-icons/icons/blob/master/license.txt)                  |
| [Github Octicons](https://octicons.github.com/)               | [MIT](https://github.com/primer/octicons/blob/master/LICENSE)                             |
| [Ionicons](https://ionicons.com/)                             | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                         |
| [Material Design](https://material.io/resources/icons/)       | [Apache License 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) |
| [Remix Icon](https://remixicon.com/)                          | [Apache License 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)       |
| [Typicons](http://s-ings.com/typicons/)                       | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)                           |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1](http://scripts.sil.org/OFL)