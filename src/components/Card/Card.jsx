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

const Card = ({ user }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  //console.log("isSubscribed", isSubscribed);
  const { tweets, followers, avatar = imgUser } = user;

  // const handleClick = (id) => {
  //   setIsSubscribed((s) => !s);
  //   console.log(id);
  // };

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
      <Button
        isFollower={isSubscribed}
        onClick={() => setIsSubscribed((s) => !s)}
      >
        {/* <ButtonName onClick={() => setIsSubscribed((s) => !s)}> */}
        <ButtonName>{!isSubscribed ? "Follow" : "Following"}</ButtonName>
      </Button>
    </CardWrapper>
  );
};

export default Card;
