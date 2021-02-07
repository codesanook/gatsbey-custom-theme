# Free GitHub Pages with Gatsby

## Interesting areas in this project
- Use Gatsby for modern a static site framework.
- Use Yarn as package management.
- Use TSX for react component.
- Use GraphQL for querying static data.
- Use custom GitHub Actions for auto deployment when push new code to develop branch

# Make a Gatsby project support Yarn
- At root of the project, create `.config/gatsby/config.json` file
- Add the following code
  ```
    {
      "cli": {
        "packageManager": "yarn"
      }
    }
  ```

## Use Yarn with local gatsby-cli
- yarn add gatsby-cli --dev
- yarn gatsby develop

## Set default branch for GitHub page
- Go to a repository setting
- option > GitHub Pages section
- Select a branch e.g `gh-pages`, folder as a root (Default to root) of a website and click save. 

## How to get GitHub access token secret
- Go to your GitHub profile setting
- Go to Developer settings
- Go to Personal access tokens
- Click `Generate new token` 
- Add Note and check only [x] **public_repo** because it is a minimum requirement. GitHub Pages works only a for public repository.  
- Click Generate token.
- Copy generated access token value.
- Go to settings of a repository that you want to deploy as GitHup Pages.
- Go to Secrets 
- Click `New repository secret`
- Give a secret name, paste the value that we copy and save.
- You can now use access token value in your GitHub Actions file as `${{ secrets.ACCESS_TOKEN }}`

# How to test deployment 
- Push a new code to develop branch
- Wait for deployment has done https://github.com/meddbtech/meddbtech.github.io/actions
- Go to https://meddbtech.github.io/
