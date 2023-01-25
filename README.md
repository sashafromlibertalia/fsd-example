# feature-sliced design app example

This is an example `next.js` app built with [feature-sliced design](https://feature-sliced.design/) methodology.

## Project description

It's a simple app that fetches cryptocurrency data from `CoinMarketCap API` and displays it in a table.

## Stack

[Next.js](https://nextjs.org/) + [Effector](https://effector.dev/)

## Run project

First of all, you need to set up the environment variables. You can find them in `.env.dist` file. The list of variables is:

| Name          | Description                   |
|---------------|-------------------------------|
| `CMC_API_URL` | URL of the API server         |
| `CMC_TOKEN`   | API key for CoinMarketCap API |

After that, you can run the project with the following command (_notice that this project uses [Taskfile](https://taskfile.dev/)_):

```shell
task init
```

To show all available commands, run:

```shell
task
```
