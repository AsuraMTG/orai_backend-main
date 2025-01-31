import styled from 'styled-components';

const Nev = styled.h2`
    font-size: 1.5em;
    margin: 0.25em auto;
    text-align: center;
    color: pink;
`;

function NevComponent({nev}) {
    return <Nev>{nev}</Nev>;
  }
  
export default NevComponent;