// import React from 'react';

// class Posts extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//             hasError: false,
//             errorMessage: ''
//         };
//     }


//     loadPosts() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(data => {
//                 const postsList = data.map(post => {
//                     return {
//                         id: post.id,
//                         title: post.title,
//                         body: post.body
//                     };
//                 });
//                 this.setState({ posts: postsList });
//             })
//             .catch(error => {
//                 console.error("Error fetching posts:", error);
//             });
//     }

//     componentDidMount() {
//         this.loadPosts(); // Call loadPosts() when component is mounted
//     }

//     componentDidCatch(error, info) {
//         console.error("Error caught in componentDidCatch:", error);
//         this.setState({ hasError: true, errorMessage: error.toString() });
//     }


//     render() {
//         if (this.state.hasError) {
//             return <h1>Something went wrong: {this.state.errorMessage}</h1>;
//         }
//         Components
//         return (
//             <div>
//                 <h1>Posts</h1>
//                 {
//                     this.state.posts.map((post) => (
//                         <div key={post.id}>
//                             <h2>{post.title}</h2>
//                             <p>{post.body}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         );
//     }


// }

// export default Posts;


import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({ posts: result });
                },
                (error) => {
                    this.setState({ error });
                }
            );
    }

    render() {
        const { error, posts } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    <h2>Posts</h2>
                    <ul>
                        {posts.slice(0, 10).map((post) => (
                            <li key={post.id}>
                                <strong>{post.title}</strong>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Posts;
