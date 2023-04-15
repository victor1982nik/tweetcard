import {
  CardWrapper,
  Logo,
  MainPicture,
  Separator,
  UserPic,
  OuterUserPicFrame,
  InnerUserPicFrame,
  Text,
  TweetText,
  FollowersText,
  Button,
  ButtonName,
} from "./Card.styled";
import imgLogo from "../../images/Logo.png";
import imgMain from "../../images/picture2.png";
import imgUser from "../../images/Hansel.png";

const Card = ({ tweets, followers, avatar = imgUser }) => {
  return (
    <CardWrapper>
      <Logo
        srcSetOldTypes={imgLogo}
        placeholderImg={imgLogo}
        typeOldTypes={"image/png"}
      />
      <MainPicture
        srcSetOldTypes={imgMain}
        placeholderImg={imgMain}
        typeOldTypes={"image/png"}
      />
      <Separator />
      <OuterUserPicFrame>
        <InnerUserPicFrame>
          <UserPic
            srcSetOldTypes={avatar}
            placeholderImg={avatar}
            typeOldTypes={"image/png"}
          />
        </InnerUserPicFrame>
      </OuterUserPicFrame>
      <Text>
        <TweetText>{tweets} TWEETS</TweetText>
        <FollowersText>
          {followers.toLocaleString("en-US")} FOLLOWERS
        </FollowersText>
      </Text>
      <Button>
        <ButtonName>Follow</ButtonName>
      </Button>
    </CardWrapper>
  );
};

export default Card;
