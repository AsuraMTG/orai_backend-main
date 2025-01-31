import styled from 'styled-components';
const Email = styled.p`
    font-size: 1.2em;
    margin: 0.25em auto;
    text-align: center;
    color: blue;
`;
function EmailComponent({email}) {
    return (
        <Email>
            Email: {email}
        </Email>
    );
}

export default EmailComponent;