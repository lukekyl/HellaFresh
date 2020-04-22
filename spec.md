Requirements:
- App Design
    [ ] Frontend: HTML/CSS/JS
    [ ] Backend: Rails
    [ ] [GitHub - learn-co-curriculum/js-rails-as-api-creating-a-rails-api-from-scratch](https://github.com/learn-co-curriculum/js-rails-as-api-creating-a-rails-api-from-scratch)
- JSON responses translated into OOJS classes and constructor function syntax
- Rails backend must include:
    [ ] one has-many relationship (photo has many comments)
- Front and Backend must demonstrate Client-Server communication
    [ ] 3 AJAX Calls
    [x] At least 2 of CRUD
    [x] JS must use Fetch on Rails db with RESTful convention



JavaScript
[x] Use classes and functions to organize your code into reusable pieces.
[x] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[x] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).
Rails
[x] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
[x] Well-named variables and methods
[x] Short, single-purpose methods
Git
[x] Aim for a large number of small commits - commit frequently!
[x] Add meaningful messages to your commits. When you look back at your commits with git log, the messages should describe each change.
[x] Don't include changes in a commit that aren't related to the commit message    



To convert to OOJS:
- class declaration
- class constructor (initialize in ruby (though sans persistence))
- look at each function or method, and decide if it is a 1."method on the prototype" (an instance method) or a 2."static method" (class method)
    1.  blahBlah(){

        }
    2.   static function blahBlah(){
        
        }
- then be sure that the variables you're dealing with are referred to properly -- creating JS objects and then calling methods on them, for example.


To add branch and change to branch:
git branch name-of-branch
git status
git checkout name-of-branch
