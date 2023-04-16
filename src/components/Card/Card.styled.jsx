import styled from "styled-components";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

export const CardWrapper = styled.div`
  padding-top: 28px;
  text-align: center;
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;

  background-image: linear-gradient(
    115deg,
    #471ca9 1%,
    #5736a3 54%,
    #4b2a99 79%
  );
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.23);
`;

export const Logo = styled(BackgroundImage)`
  position: absolute;
  left: 20px;
  top: 20px;

  text-align: left;
`;

export const MainPicture = styled(BackgroundImage)`
  display: block;
  margin: 0 36px 18px;

  width: 308px;
  height: 168px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 8px;
  margin-bottom: 62px;

  background-color: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.06), inset 0px -1px 3px #ae7be3,
    inset 0px 3px 2px #fbf8ff;
`;

export const OuterUserPicFrame = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;

export const InnerUserPicFrame = styled.div`
  overflow: hidden;
  position: absolute;
  width: 62px;
  height: 62px;
  left: 9px;
  top: 9px;
  background-color: #5736a3;
  border-radius: 50%;
`;

export const UserPic = styled(BackgroundImage)`
  object-fit: contain;
  width: 62px;
  //height: 62px;
  //left: 0;
  //top: 0;
`;

export const Text = styled.div`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const TweetText = styled.p`
  margin-bottom: 16px;
`;

export const FollowersText = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  padding: 14px 40px;
  width: 196px;
  //margin-bottom: 36px;

  border: 0;
  background-color: ${(props) => (!props.isFollower ? "#ebd8ff" : "#5CD3A8")};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`;

export const ButtonName = styled.span`
  color: #373737;

  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
`;
