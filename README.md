# Unhandled Promise Rejection in Next.js API Route

This repository demonstrates a common error in Next.js API routes: unhandled promise rejections.  The `pages/api/data.js` file contains an API route that attempts to fetch data asynchronously.  However, the asynchronous operation (`fetchData`) throws an error, which is not properly handled, leading to a server-side error.

The solution, provided in `pages/api/dataSolution.js`, demonstrates how to correctly handle this using async/await and a try...catch block.