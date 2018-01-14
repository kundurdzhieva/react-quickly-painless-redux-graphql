import React from 'react';
import posts from '../../../posts.json';


function Product(props) {
    console.log('aaaaaaaa',props);
    let post = posts.find(element=>element.slug === props.match.params.id);
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <p><a href={post.link} target="_blank">Continue reading...</a></p>
        </div>
    )
}

export default Product;