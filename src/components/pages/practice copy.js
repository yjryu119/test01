import React from "react";
import { useSearchParams } from "react-router-dom";

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: "김민준",
    description: "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

const Profile = ({ d }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.has("search");
  console.log(searchParams.toString());
  var paramsString1 = "http://example.com/search?query=%40";
  var searchParams1 = new URLSearchParams(paramsString1);

  const sss = searchParams1.has("query"); // false
  console.log(detail); //true
  console.log(searchParams1.toString());

  const profile = profileData[detail];
  if (!profile) {
    return (
      <div>
        존재하지 않는 유저입니다.
        <p>
          {searchParams.toString()} and <br></br> {searchParams1}
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3>야호</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
