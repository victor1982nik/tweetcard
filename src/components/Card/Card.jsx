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
import { useState } from "react";
import { updateUser } from "../../api/usersApi";

const Card = ({ user }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { tweets, followers, avatar = imgUser } = user;

  const handleClick = async (action) => {
    user.followers =
      action === "increment" ? (user.followers += 1) : (user.followers -= 1);
    user.isSubscribed = !user.isSubscribed;
    await updateUser(user);
    setIsSubscribed((s) => !s);
  };

  //console.log(isSubscribed);
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
      {!user.isSubscribed && (
        <Button onClick={() => handleClick("increment")}>
          <ButtonName> Follow </ButtonName>
        </Button>
      )}
      {user.isSubscribed && (
        <Button onClick={() => handleClick("decrement")}>
          <ButtonName>Following</ButtonName>
        </Button>
      )}
    </CardWrapper>
  );
};

export default Card;
