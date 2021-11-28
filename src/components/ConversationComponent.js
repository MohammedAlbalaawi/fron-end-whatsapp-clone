import styled from 'styled-components';
import { SearchContainer, SearchInput } from './ContactListComponent';
import { messagesList } from '../FakeData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5ddd6;
  overflow-y: auto;
`;
const MessageDiv = styled.div`
  display: flex;
  margin: 5px 15px;
  justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
`;
const Message = styled.div`
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  background: ${(props) => (props.isYours ? '#daf8cb' : 'white')};
  border-radius: 5px;
`;

export const ConversationComponent = (props) => {
    const {selectedChat} = props;
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic} />
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {messagesList.map((msgData) => (
          <MessageDiv isYours={msgData.senderID === 0}>
            <Message isYours={msgData.senderID === 0}>{msgData.text}</Message>
          </MessageDiv>
        ))}
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src="profile/emoji.png" />
          <SearchInput placeholder="type a message" />
        </SearchContainer>
      </ChatBox>
    </Container>
  );
};
