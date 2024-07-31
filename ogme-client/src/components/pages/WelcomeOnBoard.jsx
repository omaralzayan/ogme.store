import React, { useEffect } from "react";
import { useMutation } from "react-query";
import { verifyUserEmail } from "../../utils/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const WelcomeOnBoard = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const { mutate: verifyEmail } = useMutation(
    ({id, token}) => verifyUserEmail(id, token),
    {
      onSuccess: (data) => {
        navigate("/");
      },
    }
  );

  useEffect(() => {
    verifyEmail({id, token});
  }, []);
  return (
    <>
      <div
        className="onboard-welcome"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "70vh",
          gap: "2rem",
        }}
      >
        <div className="logo" >
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </>
  );
};

export default WelcomeOnBoard;
