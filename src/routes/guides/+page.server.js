/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const users = await res.json();
        
        console.log('Fetched posts:', users); // This will print the posts in the server logs

        return {
            users:users
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            users: []
        };
    }
}
