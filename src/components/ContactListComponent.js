import styled from 'styled-components';
import {contactList} from '../FakeData'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1.6;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const SearchBox = styled.div`
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 15px;
  width: 100%;
  padding: 5px 10px;
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  padding-left: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
  :hover{
    background:#ebebeb;
  }
`;
const ContactIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 10px;
`;
const ContactName = styled.span`
`;
const ContactStatus = styled.span`
  font-size: 14px;
  margin-top: 2px;
  color: rgb(0, 0, 0, 0.8);
`;
const ContactMessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgp(0, 0, 0, 0.5);
  white-space: nowrap;
`;
const ContactComponent = (props) => {
  const {userData,setselectedChat} = props;
  return (
    <ContactItem onClick={()=>setselectedChat(userData)}>
      <ContactIcon src={userData.profilePic} />
      <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <ContactStatus>{userData.lastText}</ContactStatus>
      </ContactInfo>
      <ContactMessageTime>{userData.lastTextTime}</ContactMessageTime>
    </ContactItem>
  );
};

export const ContactListComponent = (props) => {
  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImage src="profile/1.jpeg" />
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src="profile/6.png"></SearchIcon>
          <SearchInput placeholder="search contacts ..."></SearchInput>
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData)=> <ContactComponent userData={userData} setselectedChat={props.setselectedChat}/>)}
      hello
    </Container>
  );
};
