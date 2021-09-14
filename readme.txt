After all new stuff in Angular 12, I decided to go back to Angular course 
"Angular" by Deborah Kurata from Pluralsight.

So this application APM-Start... done to the middle of course. 
I did it slightly differently from training.

thank you,
Sam Klok

===============================================================================================
While working on it, I had and issue (below), and added answer on Stack Overflow:

Could not find module "@angular-devkit/build-angular"
https://stackoverflow.com/questions/50333003/could-not-find-module-angular-devkit-build-angular

My answer (as a commment, because I don't have enough rating to answer):
Do you have folder node_modules ? For me the same error happened, 
when I cloned my Angular project through GitHub on different laptop. 
I didn't push folder node_modules to save space. 
Because I was on cell phone tethering, I decided do not reinstall all packages, 
but copy node_modules folder from different project on the same laptop. 
And it worked!



FYI: I used Angular 11 for this application. 

>ng version
Your global Angular CLI version (12.2.5) is greater than your local version (11.2.5). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 11.2.5
Node: 14.15.3
OS: win32 x64