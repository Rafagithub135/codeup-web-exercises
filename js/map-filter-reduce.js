const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let lang3 = users.filter(user => user.languages > 2);
console.log(lang3);

let mail = users.map(user => user.email);
console.log(mail);

let previousValue = 0;
let years = users.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
});
let average = years / users.length;
console.log(years);
console.log(average);

let previousMail = 0
let mailLong = users.reduce((user.email, currentMail) => {
    if (currentMail.length > previousMail.length) {

    }
})