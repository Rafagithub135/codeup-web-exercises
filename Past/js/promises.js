"use strict";

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
const lastCommit = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_Promises_API}})
    .then(response => response.json())
    .then(events => events.filter(event => event.type === "PushEvent"))
    .then(pushEvents => pushEvents[0].created_at);
};
console.log(lastCommit('Rafagithub135'));