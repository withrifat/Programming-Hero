// Module 32: API, JSON, Data Load, Dynamic Website

// 1. API (Application Programming Interface)
// An API is a set of rules that allows different software applications to communicate with each other.
// Web APIs are typically used to fetch data from a server.

// Example: Fetching data from a simple API

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
