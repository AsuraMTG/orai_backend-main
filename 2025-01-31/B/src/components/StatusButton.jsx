import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid darkgreen;
    background-color: lightgreen;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 10px auto;
    display: block;
`;

const StatusButton = () => {
    return (
        <Button>Change status</Button>
    );
}

export default StatusButton;