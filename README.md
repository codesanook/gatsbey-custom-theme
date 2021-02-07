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