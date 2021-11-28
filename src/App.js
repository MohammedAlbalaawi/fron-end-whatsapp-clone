import { useState } from 'react';
import styled from 'styled-components';
import { ContactListComponent } from './components/ContactListComponent';
import { ConversationComponent } from './components/ConversationComponent';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

const Placeholder = styled.div`
display:flex;
flex-direction:column;
flex:3;
justify-content:center;
align-items:center;
span{
  font-size: 30px;
  font-family: 'Segoe UI';
}
`
const PlaceholderImg = styled.img`
width:450px;
height:450px;
border-radius:50%;
`
function App() {

  const [selectedChat, setselectedChat] = useState()

  return <Container>
    <ContactListComponent setselectedChat={setselectedChat}/>
    {selectedChat ? (<ConversationComponent selectedChat={selectedChat}/>) : (
    <Placeholder>
      <PlaceholderImg src="profile/msg.svg" />
    </Placeholder>
      )}
    </Container>;
}

export default App;
