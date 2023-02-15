# 30MFF Website: The Coffee Hub of NYUAD
#### Communications Lab Spring 2023
#### Fatema Alhameli

#### [Link To Website](https://fatemaalhameli.github.io/Assignment1%20/#home)

## About My Project
This project is a website that displays my group’s 30-minute film festival video. The website is divided into four sections: Home, About, Production, and Location, which were part of a menu bar on the website. This division was created specifically for the user, to make the experience smoother for them when navigating through the website. I designed the website by trying to display the concept and theme that our short film represents, which is the relationship between the Blacksmith coffee shop and the NYUAD campus. Similarly, the website’s concept is to show how Blacksmith has been a significant area for NYUAD students and other individuals to work, study, and socialize with each other, ultimately creating a beautiful community, environment, and ambiance. It was my goal to create this website in order to visualize this concept as well as to make it informative for the user.

My main inspiration for my website design was my group’s 30MFF. I aimed to design the website in a way that would complement the video and that was how I decided on the color palette, layout, and information of the website. As I designed the website, I wanted it to have a formal and minimalistic appearance that would look simple, clean, and appealing to the user. My goal was to create a user-friendly and engaging experience for users.


The website is designed in a scrollable manner, where you keep scrolling through, moving into each section of the website. Each section’s content is complemented by its title. The first section is the home page, which consists of a background image of a coffee cup with the title of the website. The images I chose were picked out carefully, to make sure they fit the story I am presenting through my website. Next is the about page, the about section includes a short description and introduction of the website concept. It also includes an interactive element of a photo carousel, which is a collection of photos of Blacksmith and NYUAD students. After the about page is the production section, which displays my group’s 30MFF video and a short description of what is the 30MFF and the concept of our video, alongside all the names of the members of the group and their contact information. Between the about and production sections I added a background video of coffee beans to give a more aesthetically pleasing look to the transition between the sections. Lastly is the location section/page, which provides the user with the location and contact information of the Blacksmith coffee shop. 

## Process 
<img src= "https://github.com/FatemaAlhameli/FatemaAlhameli.github.io/blob/main/Assignment1%20/wireframe/wireframe1.png" width = "320" height = "200"><img src= "https://github.com/FatemaAlhameli/FatemaAlhameli.github.io/blob/main/Assignment1%20/wireframe/wireframe2.png" width = "320" height = "200"><img src= "https://github.com/FatemaAlhameli/FatemaAlhameli.github.io/blob/main/Assignment1%20/wireframe/wireframe3.png" width = "320" height = "200"><img src= "https://github.com/FatemaAlhameli/FatemaAlhameli.github.io/blob/main/Assignment1%20/wireframe/wireframe4.png" width = "320" height = "200">

To implement my ideas for the website, I created a simple wireframe that would help me plan out and visualize my website. This step to me was really helpful as it allowed me to have a clear idea of what I wanted to do and how I can implement my concept.

I then began with the coding process, which consisted of index.html, style.css, and app.js files. I first began with HTML and CSS and left javascript until the end. HTML was the skeleton of my website where I created the layout. I looked through some tutorials online to help me with structuring my menu bar to create all the page tabs. I used the section tag in HTML to make a page for each tab and gave each section an id that I then linked in the menu bar. Therefore, when a user pressed a tab in the menu bar it immediately takes them to that page. Then in CSS, I added a certain width and height for the sections so that they can fit fully onto the screen. In each section tag, I added a header tag with the page's title, a p tag for text, and for some an image tag. For background images and video, I added them through CSS. CSS I mostly used to position Html elements, change color, add fonts, adjust font sizes, and other styling properties. 

## Challenges

Throughout the development process of the website, I faced a few challenges, especially with CSS positioning and JavaScript. Positioning and moving elements in CSS is not as easy as I thought it would be. I looked through a few websites to help me understand the different types of positioning. I began by using the left, right, and top properties to move texts and images. However, they didn't work and none of the Html elements would move. Then I realized that in order for the left, right, and top to work I needed to use a specific position with them (relative, absolute, or fixed). Once I added one of them the movement of the Html elements worked.

Another CSS obstacle I came across was placing text on top of a video. The text I added with the background video appeared under the video so it was not visible. Positioning the text to be visible was a struggle. I tried using the property ```z-index``` however it still didn't work. After the help of the Professor, I was able to figure it out. It turned out I had to fix the position properties and add ```z-index``` to both the video and the text. 

The other challenge I faced was creating a photo carousel. I looked online to see what was one of the ways to create it and found a step-by-step tutorial and explanation by w3schools. The tutorial included other interactions with the photo carousel but I only used what I wanted. After I implemented it into my code, the photo slides show worked, however, the photos and photo numbers were not appearing in the correct manner (photo #5 started, and then when pressing next it moves to photo #1). I was also getting an error that indicated that the program can't read a certain property. I figured that the issue is probably that one of the Html elements is not being read in the script file. I left it as it is and wasn't sure how to figure it out. In our Javascript introduction class, the professor mention that the script tag should be at the end of the body tag in Html and I had it at the top. When I moved it the Javascript error went away and the photo carousel worked perfectly. It turned out that because the script tag is at the top the javascript file could read or access one of the Html elements. So when I moved it was able to therefore it worked. 

## Reflection

I was thankfully able to execute my concept and design ideas on this website. I am happy that it has an aesthetic that reflects the concept of the community of the coffee shop and the university. Regardless of the hardships I faced throughout this project, they forced me to figure things out and led me to learn from my mistakes. This project was definitely a learning process where I was able to discover things about HTML, CSS, and Javascript. While planning out the website, it seemed that the process was going to be smooth and simple, however, it turns out that developing a website requires trial and error.  Nevertheless, I am glad I was able to make my goals and ideas become a reality for this project and I look forward to learning more about how I can further improve. 


## References

* [Menu Bar and Page Structure](https://www.youtube.com/watch?v=4iXyc20Tcao)
* [Photo Carousel](https://www.w3schools.com/howto/howto_js_slideshow.asp)
* [CSS Positioning](https://www.tutorialspoint.com/css/css_positioning.htm#:~:text=You%20can%20use%20two%20values,a%20negative%20value%20for%20top.)
* [w3schools](https://www.w3schools.com/)
* [Text over Video](https://stackoverflow.com/questions/40959725/text-over-video-html)
