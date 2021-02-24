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


# Add Markdown content
- `yarn add gatsby-source-filesystem --dev`
- Add https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/ plugin with `yarn add gatsby-transformer-remark --dev`
- Add  https://www.gatsbyjs.com/plugins/gatsby-remark-images/ `yarn add gatsby-remark-images --dev`
- And also add gatsby-plugin-sharp dependency with `yarn add gatsby-plugin-sharp --dev`


## TODO
- single quote
- semi colon
... in GraphQL

Image in Markdown https://www.gatsbyjs.com/docs/working-with-images-in-markdown/

Using theme
https://www.gatsbyjs.com/tutorial/using-a-theme/

starter
https://www.gatsbyjs.com/starters/ehowey/gatsby-starter-catalyst
https://www.gatsbyjs.com/starters/thriveweb/yellowcake
https://tina-starter-grande.netlify.app/


Why it is fast during development
There is also a difference in the number of page queries that will run. gatsby develop will run at most 3 page queries (index page, actual 404 and develop 404) initially. The rest of the queries will run when they are needed (when the browser requests them). In contrast, gatsby build will run page queries for every page that doesn’t have cached and up to date results already.
REF:
https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/

workspace
yarn workspace the-company-theme add gatsby-theme-catalyst-core gatsby-theme-catalyst-footer gatsby-theme-catalyst-header-top
yarn workspace site add gatsby react react-dom the-company-theme@*

yarn workspace site develop
yarn workspace site build


#   
[x] Clear your node_modules folder, clear your root yarn.lock file and reinstall all dependencies
[x] Check that you are on the same Gatsby versions across all your themes and sites, you can sometimes run into issues when you have multiple versions of the same package installed in a monorepo
[ ] Run yarn workspaces info and make sure you don't have any mismatched dependencies
[ ] Copy and paste your root package.json where you have setup the workspaces