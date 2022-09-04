# GA SEI Project 2: “The Nomad Bookshelf” - Literary Database

### Deployed App: https://nomadbooks.herokuapp.com/

![nomadbookshelf](https://i.imgur.com/dMO3TwE.gif)

#### Table of Contents
* Introduction
  * Brief and Requirements
  * Project Overview
  * Contributors
  * Timeframe
  * Technologies Employed
* Planning and Preparation
  * User Stories
  * Entity Relationship Diagram
  * Wireframe
* Development
  * Process
  * Featured Code
* Outcome
  * Challenges
  * Wins
  * Bugs
  * Future Inclusions and Improvements
  * Key Learnings


### Introduction

#### Project Requirements

* Work in pairs to build a full-stack web application from scratch using the Express framework.
* Use Node.js, HTML, CSS, JavaScript and a NoSQL database (MondoDB) to build the application with MVC architecture.
* Include a User resource, authentication and authorisation, and allow the user to change their password.
* Include two additional resources with full CRUD functionality for registered users and relationships between the resources.
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which can be cut.
* Deploy the application online through Heroku so it's publicly accessible.

#### Project Overview
The Nomad Bookshelf is a full stack application serving as a database and community for literature enthusiasts where they can submit, edit and review a comprehensive, ever-growing library of authors and their attributed works. Inspired by other media databases/communities such as Goodreads and IMDB and built using Express, MongoDB and Mongoose, users can create an account and add either a new author or publication, provide details about that author or work, and leave their impressions on their submitted entry.

#### Contributors
* [Chris Ailey](https://github.com/C-T-Ailey)
* [Bedros Asdorian](https://github.com/bedrosasdorian)

#### Timeframe
This project was completed as a two-person group assignment over seven days.

#### Technologies Employed
* Express, including the following node packages:
  * Mongoose
  * bcrypt
  * Body-parser
  * Connect-flash
  * Dotenv
  * EJS/Express-EJS-Layouts
  * Express Session
  * Moment
  * Passport
* MongoDB
* HTML and CSS
* Bootstrap
* Embedded JavaScript 
* Node.js
* Git & GitHub
* Figma (ERD and Wireframing)
* Heroku (Deployment)

### Planning and Preparation

In getting to know my teammate for this project, we quickly bonded over our shared interests and reflected on the common ground we almost immediately found despite one of us being based in the UK and the other being based in Kuwait. We found that we both had a shared interest in literature and learned that while our interest was shared, our specific tastes varied. This inspired us to explore the concept of a literary database, similar in concept to IMDB or GoodReads, where people could browse a database of authors and their attributed publications and submit new entries if they find it lacking.

In order to define a clear path forward, we started by establishing our Entity Relationship Diagram for comprehension of how our models would interact. Once we had this outlined, we dedicated time to creating a basic visual style for the app, and drafting up the layouts for each major page within it. As my teammate had been having difficulty in keeping up with the course materials to this point, we opted to divide the workload according to our strengths – As he had more familiarity with CSS, he elected to handle the styling for the site while I focused on building the backend functionality.

#### User Stories
After settling on our concept for the application, we assembled a list of user stories to ensure we had a guide for the main points of functionality we wanted our users to experience.
* As an unregistered user, I want to be able to see a clear prompt for signing up when I first load the site, so that I can get the full experience from the app.
* As an unregistered user, I want to be able to view the Bookshelf and Author databases so I can decide for myself if the site’s content is of interest to me before registering.
* As a registering user, I want to be able to set my own username and password so that I can log in securely.
* As a registered but logged out user, I want to be able to see a clear prompt for logging in so that I can start using the app’s full features.
* As a logged in user, I want to be able to see a spread of recently added book covers and titles on the homepage instead of the sign up/log in prompts so that I have a prompt on where to begin exploring the site’s content.
* As a logged in user, I want to be able to submit new entries to the Bookshelf and Author databases so I can contribute to the community the site is built around.
* As a logged in user, I want to be able to edit and delete Bookshelf and Author entries created by me, so that I can regulate and alter the content in the event of errors.
* As a logged in user, I want to be able to view my profile so that I can review my user details.
* As a logged in user, I want to be able to change my password so that I can keep my account secure in the event it somehow becomes compromised.
* As a logged in user, I want to be able to log out of my account, so that I can keep my account secure against other people on my device or log in as a new user.

#### Entity Relationship Diagram
In order to understand which data we would need to store and access to achieve our desired functionality, we created an ERD to show the flow and interaction of our intended models for the app.

Our intended models were as follows:
* User: Registered users for the site, required for authorisation and authentication of user-generated CRUD operations.
Author: Data for individual authors, required to be created before a publication can be attributed to them. Author ID is referenced by the Book data attributed to them, and references the ID of the user who created the record. Shares a Many to Many relationship with the Book model as a book can be attributed to many authors, and an author can be attributed to many books.
* Book: Data for individual publications. Book ID is referenced by the Author(s) attributed to the publication, and references the ID of the user who created the record. Shares a Many to Many relationship with the Author model as a book can be attributed to many authors, and an author can be attributed to many books.
* Reviews: Data for user-submitted reviews on publications. Each Review ID is referenced by the user who created it and the Book it has been submitted to, sharing a One to Many relationship with both; a user can submit many reviews and a book can have many reviews submitted to it, but any single Review ID can only be attributed to one user and Book.


#### Wireframing
The wireframe design for the project was extremely straightforward - I had conceived a clear enough vision for the game that the first draft of the wireframe was the only one required to complete it, with despite only a few minor changes along the way, the final product remained virtually unchanged from this stage.

![nomadwireframe](https://i.imgur.com/DoLuZdK.png)

[Full gallery of wireframe images available on Imgur.](https://imgur.com/a/pw1E0D4)

### Development

#### Process
#### Day 1 - Further Planning and Preparation
Owing to my teammate’s disadvantage on this project, the first day was entirely dedicated to ensuring we had a solid end goal in mind and a workable plan for development. We solidified our concept by thoroughly discussing exactly what functionality we wanted to implement, finalised our ERD and drafted our wireframes within the day, making sure that by Day 2 we would have all the materials we needed to work our plan.

#### Day 2 - Initialising the Codebase, Basic Models, Authentication and Authorization 
The first day of coding was focused on pair-programming, where I took the lead and constructed the essential framework for the project while attempting to clarify and explain the principles of what was being created to my teammate. The first order of business was implementing the necessary features for authentication/authorization, which meant initialising the codebase by using NPM to install our required packages and middleware, building the server.js file so the essential first point of contact for running the app was present, building routes and controllers for immediately required views, establishing the database in MongoDB, and ensuring it was connected to the app. Once the dependencies had been installed and defined, I created the config file for the Passport middleware, the User model schema, the blank layout.ejs file, and custom “logged in” status-monitoring middleware. From here, the next logical step was to implement the Signup and Login functionality – this was achieved by building the skeletal landing page and Signup/Login forms, adding anchor tags to link the user to the forms, and ensuring that the connectivity with MongoDB was present and correct such that submitted data could be properly stored and retrieved.

Once the authentication/authorisation features had been implemented, I experimented with building a basic profile page which would display select information from that provided by the user upon registration, and attempted our vision of login-dependent views for the landing page. Once these were at least functional, the final endeavour for the day was to build the Author and Book schemas for the next day’s development – with just enough time left over to implement Create and Update operations for Authors.

#### Day 3 - CRUD Operations, Basic Styling, Dividing the Workload
The third day of development was centred around implementing CRUD operations for as many of our models as possible. After the previous day’s work, we now had enough for my teammate to branch out and begin applying CSS to our existing views while I continued work on the backend. I first attempted to complete Edit operations for the user’s details, including their password,  on the Profile page. Unfortunately, I had no success with it at this point, and not wanting to get weighed down by a single problem when we had so much left to do, I pushed this to the back burner for the time being. After adding the Delete operation for Authors, full CRUD operations for Books (including cover image upload via URL) and establishing the Many to Many relationship between the Author and Book models, I implemented a nav bar to the layouts.ejs file to allow site-wide ease of navigation.

The last addition for Day 3 was a basic version of our planned “Logged In” conditional view for the landing page, which displayed the current spread of books in the database by their cover image and title. As it was rough and unstyled, it only displayed them in a one item-wide sequential column, but the functionality was there and ready for improvement on Day 4.

#### Day 4 - Password Change and Final Adjustments
Day 4 began where Day 3 left off: completing the landing page conditional view. After I applied Flexbox positioning to arrange the book covers and titles in a centred four-to-a-row layout, the team agreed that this satisfied our plan for the landing page and moved on to the final few outstanding features.

Using the techniques learned from the landing page conditional view, it was simple enough to implement a restriction whereby a user could only edit or delete records they had created by checking whether the createdBy property for that record matched the ID of the current user, and if not, rendering “Edit” and “Delete” as plain text instead of links.

With this being completed, the one remaining incomplete feature was the Profile page’s Edit functionality. After taking the time to clean up some styling issues, I devoted myself to attempting to crack the issue – several hours of reading documentation and experimentation later, I finally resolved it, allowing users to change their profile information, including their password. The only step left was hosting – one push to Heroku later, we had completed enough of the Nomad Bookshelf to be satisfied.


#### Featured Code

**The `isLoggedIn` Custom Middleware**

The `isLoggedIn` middleware was the one of the first pieces of code implemented into the project after the bones of the application had been put together. Although it’s a short and straightforward piece of code which simply checks to see if a given request has a valid User model attached and redirects the user to the login page instead of their intended destination if not, it served as an integral element of the project and was employed extensively.

```js
module.exports = (req, res, next) => {
    if(!req.user)
    {
        res.redirect("/auth/login")
    }
    else {
        next();
    }
}
```

**The Login-Conditional Landing Page**

The second major point of pride during development was implementing the conditional view for the landing page. Our plan was to have it so that users who are not logged in will only see a distinct prompt to either signup or login upon first visiting the site; those who are logged in will see a display of “recently added” books, arranged by cover image and title. Though relatively simple to create in hindsight, it was a landmark moment in the development process due to being my first piece of functionality with the feeling of an “above and beyond” flourish.

```html
<div>  
    <% if(currentUser) { %>
        <h1 style="color: white; text-align: center; margin-bottom: 0; margin-top: 50px"> Recently Added </h1>
        <div class="landingBooks" style="margin-top: 0">
        <% books.forEach(function(book){ %>
            <div class="bookPreview">
                <a href="/book/detail?id=<%= book.id %>""><img src="<%= book.imageUrl %>" alt="<%= book.title %> cover">
                <h3><%= book.title %></h3></a>
            </div>
        <% }) %>
        </div>
 
        
        <% }else{ %>
            <center><p class="banner-text">
                A platform built for digital textbook reviews and engagement.
            </p></center>
            <div class="containers">
                <a href="auth/signup" class="banners" style="background: #2a2df6; color: white; border: none; font-family: 'Times New Roman'">
                    <h1>Sign Up</h1>
                    <p>sign up now if you're a newcoming user.</p>
                </a>
                <a href="auth/login" class="banners" style="background: green; color: white; border: none; font-family: 'Times New Roman'; width: 320px">
                    <h1>Log In</h1>
                    <p>log into an existing account.</p>
                </a>
            </div>
        <% } %>
</div>
```

**The `auth_updatePW_put` Function (Password Update PUT request)**

The eleventh-hour success of completing the Password Update feature was a real triumph, as I had feared I wouldn’t be able to complete this particular requirement with the little time remaining after everything else had been finished. In its completed state, this code functions perfectly for its purpose of allowing a logged-in user to change their password within their profile. It operates by using bcrypt to compare the user’s current password as submitted via the “Change Password” form to the decryption of the one stored in that user’s database entry, notifying the user if it doesn’t match, and otherwise progressing to checking whether their chosen new password matches the one entered in the Confirm New Password field. On success, the user will be notified that their password has been updated and redirected to their Profile page.

```js
exports.auth_updatePW_put = (req, res, next) => {
    var user = req.user;
    if (!bcrypt.compareSync(req.body.password, user.password)){
        req.flash("error", "Your current password doesn't match.")
        res.redirect("/auth/password")
    }
    else if (req.body.newPassword !== req.body.confirmPassword) {
        req.flash("error", "'New Password' and 'Confirm New Password' don't match.")
        res.redirect("/auth/password")
    } else {
        User.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
            let hashedPassword = bcrypt.hashSync(req.body.confirmPassword, salt);
            user.password = hashedPassword;
            user.save(function(err){
                if (err) { next(err) }
                else {
                    res.redirect("/auth/profile");
                }
            })
        })
        .catch((err) => {
            console.log(err);
            res.send("Try again later.")
        })
    }
}

```

### Outcome

#### Challenges
* By far the greatest challenge I faced was having to assume the role of Project Lead over a teammate who had the disadvantage of being behind on the course material, which meant I had to arrange a structure for the project within which he would be able to make contributions according to his strengths. This meant attempting to coach him in pair-programming sessions, sharing what I knew of the basics of Express and Node.js, which was particularly challenging with my own incomplete understanding of the technologies at the time. As he had prior experience and proficiency with CSS, he was able to work independently on styling those views which were developed enough for it while I continued to build the backend, updating him on what each new feature did and explaining how it functioned along the way.
* With regards to the code itself, I experienced tremendous difficulty in attempting to solve the user password change feature. This is related to the fact I had been overwhelmed by some of the intricacies of working with Express, especially right off the back of the comparatively more straightforward Project 1. However, this proved to be a major learning moment, as it taught me the importance of thoroughly reading documentation and studying examples of other code which achieves similar functionality.
* The third challenge I faced was, as mentioned above, working with Express itself. Going into the project, I did not feel I understood the mechanics of Express well enough to achieve as much as I ultimately did. I feel I owe the overall success of the project, and my eventual understanding of the technology, to being responsible for managing the overall development and having to explain the code I was writing to my teammate as I went. This went a long way towards helping solidify the concepts in my mind, and served as one of the most valuable learning experiences of the course.


#### Victories
* The greatest success of the project was, ultimately, completing it. Despite the rocky, unoptimistic start, we produced a functional application which did almost everything we set out to achieve, entirely thanks to careful management and optimal division of the workload according to what we could contribute at any given stage.
* Finally solving the Password Update in the nick of time was nothing short of triumphant.

#### Bugs
* The selection box in the /author/edit form only displays the authors already attributed to that book instead of the full list.
* Authors assigned to a book cannot currently be unassigned through the /author/edit form.
* Flash messages do not display whenever they should.

#### Future Inclusions and Improvements
* As we had to omit our planned Reviews model for time, I would ideally like to implement it as intended so that each user can leave reviews for any book, instead of the current compromised incarnation where a review can only be provided once per book, and only by the user creating the entry.
* I would like to include some more developed styling for the site; the current theme is somewhat basic and would benefit from additional time and care in developing it. Particular attention would be given to the Bookshelf and Lookup by Author tables.
* The eventual addition of a Light/Dark Theme toggle button would lend itself to a more personal, customizable experience for the user.
* As the “Recently Added” section on the landing page currently displays all books in the database, I would like to implement a check such that it only displays the last ten to fifteen books added.


#### Key Learnings
Taking charge of a project where the other team member was at a significant disadvantage was a tremendously valuable lesson in managing a difficult, less-than-ideal situation and finding ways to make the most efficient use of our time and abilities. In having to coach my teammate through the parts of the work he hadn’t grasped, I learned a great deal about my ability to explain concepts I did not fully understand myself, and in fact discovered that doing so helped deepen my own comprehension.
I also feel I gained a much clearer understanding of how development of a user-driven, community-oriented site may operate, and which technical aspects of such sites (e.g. authentication and authorisation, password validation and clean database interaction) are most important to the experience.

