// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate



const gettingUserData = (userID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user_data = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' }
        ];
            if (userID >= 0){resolve(JSON.stringify(user_data[userID], null, 2))
                }
            else {reject("Error: No user data")};
            

        },1500)
    })
}

gettingUserData(0).then((data) => console.log(data))
.catch((error) => {console.error(error)})

// TODO: Create a function that uses template literals for HTML generation
greeting = "Hello everyone"
my_name = "Joshua"
my_email = "fakeemail@gmail.com"

const html_string = () => `
    <h1>${greeting}</h1>
    <h3>My name is ${my_name}</h3>
    <p>Contact me via: ${my_email}</p>
    `

console.log(html_string())

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error

const gettingUserPosts = (userID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const posts = [
                        {
                            id: 1,
                            title: "Introduction to JavaScript",
                            content: "This post covers the basics of JavaScript...",
                            userId: userID,
                        },
                        {
                            id: 2,
                            title: "Understanding Asynchronous JavaScript",
                            content: "Exploring promises, async/await, and callbacks...",
                            userId: userID,
                        },
                        {
                            id: 3,
                            title: "CSS Flexbox Fundamentals",
                            content: "A guide to mastering CSS Flexbox for layout...",
                            userId: userID,
                        }
                        ];

            if (userID >= 0){resolve(JSON.stringify(posts[userID], null, 2))
                }
            else {reject("Error: No user data")};
            

        },1000)
    })
}

gettingUserPosts(1).then((data) => console.log(data))
.catch((error) => {console.error(error)})

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain

function gettingUserDataAndPosts(userId) {
  const posts = gettingUserPosts(userId);
  const data = gettingUserData(userId);
  const dataAndPosts = {userdata : data, post : posts};
  return dataAndPosts
}
    

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data

async function gettingUserDataAndPosts(userId) {
  const posts = await gettingUserPosts(userId);
  const data = await gettingUserData(userId);
  return { userdata: data, post: posts };
}

gettingUserDataAndPosts(2)
    .then((data) => console.log(`User Data and Posts: Data - ${data.userdata}, Post - ${data.post}`))
    .catch((error) => console.error("Final Error:", error));

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users
 const user_Ids = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' }
        ];


async function getUsersInParallel(userIds) {
    const userData = userIds.map(user => gettingUserData(user.id - 1));
    try {
        const results = await Promise.all(userData);
        return console.log(results);
    } catch (error) {
        console.error("Error fetching users:", error);
        
    }
} 

getUsersInParallel(user_Ids)
    

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately

 userPosts = [
                        {
                            userId: 1,
                            title: "Introduction to JavaScript",
                            content: "This post covers the basics of JavaScript...",
                            
                        },
                        {
                            userId: 2,
                            title: "Understanding Asynchronous JavaScript",
                            content: "Exploring promises, async/await, and callbacks...",
                            
                        },
                        {
                            userId: 3,
                            title: "CSS Flexbox Fundamentals",
                            content: "A guide to mastering CSS Flexbox for layout...",
                            
                        }
                        ];

async function getUsersAndPostsInParallel(userIds, userPosts) {
    const userData = userIds.map(user => gettingUserData(user.id - 1));
    const userPostsData = userPosts.map(post => gettingUserPosts(post.userId - 1));
    try {
        const results = await Promise.all(userData);
        const postsResults = await Promise.all(userPostsData);
        return console.log(`User IDs: ${results}, User Posts: ${postsResults}`);
    } catch (error) {
        console.error("Error fetching users:", error);
        
    }
} 

getUsersAndPostsInParallel(user_Ids, userPosts)

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling

async function test() {
    const userIds = [1, 2, 3];
    const users = [];

    try {
        const user = await gettingUserData(0);
        console.log("Single user fetched:", user);
    } catch (error) {
        console.error("Error fetching single user:", error);
    }

    try {
        for (const id of userIds) {
            const user = await gettingUserData(id);
            users.push(user);
        }
        console.log("Here are the multiple users:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

test();