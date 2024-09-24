## DrumKit - Unleash Your Inner Rhythm!

This is a simple yet fun DrumKit web application that allows users to play various drum sounds using their mouse or keyboard.

### Features & Functionality

- **Interactive Drum Kit:** The web page presents a visually appealing drum kit interface with clickable drum elements.
- **Sound on Click:** Clicking on each drum element triggers the corresponding sound effect, creating a realistic drumming experience.
- **Keyboard Integration:** Users can also play the drums using their computer keyboard. Each drum is mapped to a specific key, providing a convenient way to create beats.
- **Responsive Design:** The layout adjusts dynamically to different screen sizes, ensuring an optimal user experience on desktops, tablets, and mobile devices.

### Technologies Used

- **HTML:** The structure of the drum kit, including the buttons representing different drums, is created using HTML.
- **CSS:**  CSS is used to style the elements, providing an attractive and intuitive interface. The styles include background images for the drum buttons, shadows, and responsive layout adjustments.
- **JavaScript:** JavaScript adds interactivity to the page. It handles both mouse click and keyboard press events to play the corresponding drum sounds. The code efficiently selects and plays audio elements based on their data attributes.

### HTML Structure

- The drum buttons are created as `<button>` elements within a container div with the class "key".
- Each button has two crucial attributes:
    - `data-key`: This attribute stores a unique keyCode that links the button to a specific audio file.
    - `class`: Besides styling, the class is used to set background images for each drum button.

### CSS Styling

- The `style.css` file provides the visual styling for the drum kit:
    - It positions the elements on the page, applies background colors and images, and styles the buttons.
    - Media queries are used to make the layout responsive, adjusting to different screen sizes.

### JavaScript Interaction

- `script.js` handles the drum sound playback:
    - An event listener is attached to the document to detect 'click' events on the buttons.
    - Another event listener is attached to the document to detect 'keydown' events for keyboard interaction.
    - When an event is detected, the script retrieves the 'data-key' attribute of the clicked button or the 'keyCode' of the pressed key.
    - It then uses this key to find the corresponding audio element in the HTML and plays the audio.

### How to Use

1. **Open `index.html` in your web browser.**
2. **Click on the drum images or press the corresponding keys on your keyboard to play the drums.**
   - Keys A, S, D, F, G, H, and J are mapped to different drum sounds.


---
This README provides a concise overview of the DrumKit web application. 
