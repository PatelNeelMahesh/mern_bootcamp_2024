# Basics of git

Sequence of git commands required: 

1. git clone 
2. git status
3. git add 
4. git stash
5. git commit 
6. git push
7. git pull 

## Notes: 
- Always use markdown readme files to describe the repositories.
- Always use chatgpt to learn anything you do not know[Learning from reference].

Example of merge conflict: 
1. Two user clone a repository on their local machines and proceeds
 with their work.
2. User 1 add two new files and updates an existing readme.md file.
3. User 2 also updates the readme.md file.
4. User 1 continues his work while user 2 creates a pull request which is merged in the repo.
5. Now user 1 completes his work and creates a pr in the repo.
6. Since the user 2 already updated the readme.md file, user1 will be faced with merge conflict and will be told to resolve and then create a pr.

## Exercise 

1. Create a new repo - bookstop
2. Add a readme while creating the repo
3. Clone the repo in the local machine  
`git clone -b <branchName> <link>`
4. A new folder will be created with the name of the repo and it's content inside the folde.
5. A .git folder will be created inside the directory which stores all the git related data and history of the files.
6. Add some description to the readme file.
7. Add the changes to the staging area.  
`git add -A` or `git add .` or `git add --a` or `git add <fileName>`.
8. Commit the changes to the repositories.  
`git commit -m "<Commit Message>"`
9. Push the changes to the remote repositories.  
`git push -u <remoteBranch> <localBranch>`
10. Now to demostrate the pull command, commit changes to the remote repositories from github 