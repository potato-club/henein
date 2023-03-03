import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";
import { useGetAnnounce } from "../../hooks/announce/useGetAnnounce";

type SlidePropType = {
  txt: string;
  props?: boolean | number;
};
type AnnounceDataType = {
  title: string;
};

const CustomSlide = ({ txt, ...props }: SlidePropType) => {
  return (
    <TextSet {...props}>
      <ImgDiv>
        <Image
          src="/announceCompoImages/campaign.svg"
          width="20"
          height="16"
          alt="campaignimg"
        />
      </ImgDiv>
      <InfoText>{txt}</InfoText>
    </TextSet>
  );
};

const TextRolling = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { data } = useGetAnnounce();

  return (
    <Slider {...settings}>
      {data &&
        data.map((item: AnnounceDataType, idx: number) => {
          return (
            <div key={idx}>
              <CustomSlide txt={item.title} />
            </div>
          );
        })}
    </Slider>
  );
};

export default TextRolling;

const TextSet = styled.div`
  display: flex;
  justify-content: center;
  line-height: 24px;
  position: relative;
  top: -24px;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3px;
  width: 24px;
  height: 24px;
  border: none;
  margin-right: 4px;
`;
const InfoText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;