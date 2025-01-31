import styled from 'styled-components';

const ProfilkepImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

function Profilkep({src, alt}) {
    return (
        <ProfilkepImg src={src} alt={alt} />
    );
}

export default Profilkep;