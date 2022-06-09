import React from "react";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.toString());
  // search=productName&q=rr (물음표 뒷 부분 string으로 반환)

  console.log(searchParams.get("search"));
  // search 의 value값 productName 반환

  console.log(searchParams.get("q"));
  // q 의 value값 rr 반환

  return <div>{searchParams.toString()} 은 현재 URL, http://localhost:3000/profiles/1?search=productName&q=rr 의 쿼리스트링 입니다.</div>;
};

export default Profile;
