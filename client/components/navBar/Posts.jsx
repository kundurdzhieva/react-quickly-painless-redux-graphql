import React from 'react';
import {Link} from 'react-router-dom';

function Posts(props) {
    console.log('eheee', props);
    return <div>Posts
        <ol>
            {props.location.state && props.location.state.posts.map((post, index)=>
                <li key={post.slug}><Link to={`/posts/${post.slug}`} >{post.title}</Link></li>
            )}
        </ol>
    </div>
}


export default Posts;
