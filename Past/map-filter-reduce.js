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

const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

const userEmails = users.map(user => user.email);
console.log(userEmails);

const totalYearsOfExperience = users.reduce((total,user ) => {
    return total + user.yearsOfExperience;
} , 0);
console.log(totalYearsOfExperience);
let averageYears = totalYearsOfExperience / users.length;
console.log(averageYears);

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
} , "");
console.log(longestEmail);

const userNames = users.reduce((names, user) => {
    return names + user.name + ", ";
} , "Your instructors are: ");
console.log(userNames);

const uniqueLanguages = users.reduce((languages, user) => {
    const allLanguages = languages + user.languages + ", ";

    return languages + user.languages + ", ";
} , "languages are: ");
console.log(uniqueLanguages);