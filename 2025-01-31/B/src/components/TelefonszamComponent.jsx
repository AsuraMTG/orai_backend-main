import styled from 'styled-components';
const Telefonszam = styled.p`
    font-size: 1.2em;
    margin: 0.25em auto;
    text-align: center;
    color: green;
`;
function TelefonszamComponent({telefonszam}) {
    return (
        <Telefonszam>
            Telefonszám: {telefonszam}
        </Telefonszam>
    );
}

export default TelefonszamComponent;