# Project 2: Bookshelf App
## The Nomad Bookshelf

**Deployed Application on Heroku:** [The Nomad Bookshelf](https://nomadbooks.herokuapp.com/)

## Overview
The Nomad Bookshelf is a full stack application serving as a database and community for literature enthusiasts, where they can submit, edit and review a comprehensive, ever-growing library of authors and their attributed works. Built using Express, MongoDB and Mongoose, users can create an account and add either a new author or publication, provide details about that author or work, and leave their impressions on their submitted entry.

### Technologies Used
- Express
- MongoDB/Mongoose
- HTML and CSS
- Bootstrap
- Embedded JavaScript 
- Node.js
- Git/GitHub

### Technical Requirements Fulfilled:

- A full-stack application employing Express, MongoDB and Bootstrap and deployed via Heroku.
- Passport-based authentication allowing the user to sign up, log in and log out.
- Unregistered users can view author and publication records.
- Registered users can create author and publication records complete with cover images, and edit & delete records they personally created.
- Users can freely update their full names and passwords in their profile settings.

### Process
Planning:
In order to define a clear path forward, we started by establishing our Entity Relational Diagram for comprehension of how our models would interact. Once we had this, we dedicated time to creating a basic visual style for the app, and drafting up the layouts for each major page within it.

### ERD and Wireframes
- [ERD](https://imgur.com/a/0NvnsTk)
- [Wireframes](https://imgur.com/a/pw1E0D4)

### Key Features
- Users are presented with a different, more engaging homepage including a display of covers and titles for recently added publications once logged in.
- Ability to create new author records with their name, nationality year of birth and whether they're still active, and edit/delete records created by that user.
- Ability to create new publication records with their title, author(s), year of publication, cover art and a short review, and edit/delete records created by that user.
- Ability for users to change their registered full name and passwords in their profile settings.

### Unresolved Issues
- The select box in the /author/edit form only displays the authors already attributed to that book, instead of the full list. Unassigning authors from a publication also does not function at present.
- Flash Messages do not display upon successful and failed signup/login/form submission.

### Potential Future Additions
* A button which allows the user to alternate between a Light and Dark colour theme for the site.
* A means of sorting the books and authors in the Bookshelf/Lookup tables alphabetically and by upload time.
* A method for multiple users to submit a review to any book, instead of the current system where only one review can be assigned upon a book's entry into the database.
* A more creative layout for the Bookshelf and Lookup by Author pages might be considered eventually.
* A way to restrict the books displayed on the "Recently Added" index to only display a recently added selection, instead of the current display of all books in the DB.
