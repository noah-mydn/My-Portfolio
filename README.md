# Portfolio Website

A complete responsive portfolio website that is supposed to showcase the projects that I've worked on throughout my journey as a FullStack Web Developer. This portfolio does not currently have any projects, but those will be added as I work on various projects assigned by LearningPeople Global web development course. Through the portfolio, customers may view the performance of my previous work and contact me if my old works suit their needs via social media or a form featured on the web page. This fully responsive website is written in ReactJS using the Bootstrap library for styling. The website will respond appropriately to the width of the device regardless of its size.

### Features

* Feature-1
-for screen sizes larger than 768px, the navigation bar will be fixed on top while there will be a hamburger menu available for smaller screen sizes where the navigation menu could be viewed full page along with some social media icons at the end of the navigation menu items.

* Feature-2
-the text and images are responsively designed in accordance with the screen size so that the font size and image size will be changed based on the device width.

* Feature-3
-On the Contact page, the form is structured to fully function by using emailJS so that when the **SEND** button is clicked, the full name and email of the person inside the form field will be sent directly to the email setup in emailJS service as in the template designed by emailJS service user.

### Used Web Technologies

* HTML
* CSS
* REACT
* BOOTSTRAP

### Testing

1. Navigation Bar

  * Does the navigation bar style change from showing inline menu elements fixed on top of the navbar on the desktop screen sizes to an off-canvas menu selection where it is displayed on mobile devices?
  * Does the social icons under the menu items inside the hamburger menu show and are clickable?
  * Does the social icons hide when there's no hamburger off-canvas menu?

2. Image Responsiveness

   * Do the image on the home page and about page react responsively with respect to device width?
   * Does the image on the about page display in columns on a larger screen?
   * Does the image on the about page display like a card with an image on top of the text on smaller screens (max-width:768px)?

3. Transistion Animation

   * Does the page slightly fade and slide in from the bottom of the page when respective navigation menu items are clicked?
   * Do the social icons inside the hamburger menu show the name of the social media in rectangular boxes that slightly bounce when icons are hovered?
   * Does the social icons displayed on the contact page has some animation on hover?
        
4. Contact Me Form

   * Does the form show an error message when submit is clicked while First Name and Last Name are filled?
   * Does the form show an error message when submit is clicked without entering a valid email address?
   * Does the form show an error message when submit is clicked without any message?
   * Is the message received to the certain email account provided in emailJS services in the form of email template designed by the owner of the email?

5. Hyperlinks

    * Do the hyperlinks assigned to the social icons bring to certain social media accounts when it's clicked?
    * Does the logo on top of the navigation bar bring you to the home page when it's clicked?


### Acknowledgement

**CSS animations** that I've used on the connect elements on the mobile/tablet view of the webiste :
[https://codepen.io/kieranfivestars/pen/gbOWbM](https://codepen.io/kieranfivestars/pen/gbOWbM)

Without using any server code, I used **emailJS/browser** to send email directly from javascript :
[https://www.emailjs.com/docs/sdk/send/](https://www.emailjs.com/docs/sdk/send/)

For constant typing text animation on home page, **React Type Animation** is used:
[https://github.com/maxeth/react-type-animation#readme](https://github.com/maxeth/react-type-animation#readme)

For OffCanvas Menu Styling **Reactstrap Offcanvas** component is used:
[https://react-bootstrap.github.io/components/offcanvas/](https://react-bootstrap.github.io/components/offcanvas/)

Social icons used in this website are from:
[https://fontawesome.com/icons](https://fontawesome.com/icons)


### Deployment

Throughout development of this website, I used **Git** for version control system and constantly commited the changes made to the website. After committing the changes, they were then pushed on the Github where it was later deployed to view the live version using Git Pages. 
Live Demo of Portfolio: [https://noah-mydn.github.io/My-Portfolio/](https://noah-mydn.github.io/My-Portfolio/)

#### *The content and the images used inside this website are all rights reserved!*
