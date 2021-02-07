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
- Select a branch, folder as a root (Default to root) of a website and save 

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