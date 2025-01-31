import styled from 'styled-components';
const Post = styled.div`
    background-color: blue;
`;


function PostDiv(props) {
    let {title, content} = props;
    return (
        <Post>
            <h2>{title}</h2>
            <p>{content}</p>
        </Post>
    )
}

export default PostDiv;