### `Unit9 React Video Player`

This project is for the Unit 9 React video player coding test. The project only has a front-end and the user is taken straight to the video player when loaded. The user can interact with the video player by clicking on the buttons inside the video controls, or by dragging/clicking on different sections of the video bar. Dragging the video bar to update the video playback will also show a preview box on top of the video bar, displaying video frames of the dragged position. The user can also start/pause the video by clicking within the video. To toggle whether the video controls are displayed, simply hover over the video or click on the video screen.

The video also contains annotations based on time based hotspots and are represented as stars on the video bar. Rolling over the hotspot will display the annotation in the form of a modal box on top of the video. Each modal box contains a thumbnail of the particular frame as well as a custom description. Clicking on the hotspot will also update the current video time accordingly.

Should the screen need to be resized, the hotspots will automatically re-size based on the screen width.

# `The film (Sintel)`

Credits to:
[The Blender Foundation](https://www.blender.org/foundation/)  
[Durian Open Movie Project](https://durian.blender.org/about/)

## `Project Stack`

- JavaScript throughout the project
- [Create React App](https://github.com/facebook/create-react-app).
- [PropTypes](https://github.com/facebook/prop-types) for declaring props
- [Styled-Components](https://www.styled-components.com/) for custom stylings
- HTML canvas for rendering thumbnails
- [Framer-Motion](https://www.framer.com/motion/) for implementing gestures as well as for animations

## `Getting Started`

- Run `npm install` from the root of the project, this will install the modules for all packages
- Run `npm start`from the root of the project and the app should open in the browser

## `Contributing`

- Branch from master, naming your branch `feature/<name of feature>` or `fix/<problem you are fixing>` (`git checkout -b <name of branch>`)
- Create a pull request
