import React, { useState } from "react";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("Login");
  const [phNumber, setPhNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          top: "0px",
          width: "100vw",
        }}
      >
        <h2>Todo list</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "80px",
        }}
      >
        <p
          style={{
            fontFamily: "Bungee",
            fontSize: "48px",
            lineHeight: "52px",
            margin: "0px 0px 8px 0px",
            textAlign: "center",
          }}
        >
          hello <br />
          tester!
        </p>
        <p
          style={{
            lineHeight: "18px",
            fontSize: "14px",
            fontWeight: "500",
            margin: "0px 0px 6vh",
            textAlign: "center",
            padding: "0px 24px",
          }}
        >
          MERN Todo List: Manage tasks seamlessly <br /> with MongoDB, Express,
          React, and Node.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "360px",
          }}
        >
          <h3
            style={
              selectedOption === "Login"
                ? {
                    background: "white",
                    padding: "6px 0px",
                    textAlign: "center",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    margin: "0px",
                    flex: "0.5",
                  }
                : {
                    padding: "6px 0px",
                    textAlign: "center",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    margin: "0px",
                    flex: "0.5",
                  }
            }
            onClick={() => setSelectedOption("Login")}
          >
            Login
          </h3>
          <h3
            style={
              selectedOption === "Register"
                ? {
                    background: "white",
                    padding: "6px 0px",
                    textAlign: "center",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    margin: "0px",
                    flex: "0.5",
                  }
                : {
                    padding: "6px 0px",
                    textAlign: "center",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    margin: "0px",
                    flex: "0.5",
                  }
            }
            onClick={() => setSelectedOption("Register")}
          >
            Register
          </h3>
        </div>
        <div
          style={
            selectedOption === "Login"
              ? {
                  background: "white",
                  width: "360px",
                  padding: "24px 0px",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }
              : {
                  background: "white",
                  width: "360px",
                  padding: "24px 0px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }
          }
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: "600",
              margin: "0px 24px 10px",
              opacity: "0.5",
            }}
          >
            your mobile number
          </p>
          <div style={{ position: "relative", margin: "0px 24px" }}>
            <input
              type="number"
              value={phNumber}
              onChange={(e) => setPhNumber(e.target.value)}
              style={{
                width: "272px",
                paddingLeft: "40px",
                height: "48px",
                backgroundColor: "#F3F4F6",
                outlineColor: "#17AD7D",
                border: "0",
                borderRadius: "4px",
                color: "#171717",
                fontWeight: "700",
                display: "block",
                fontSize: "16px",
                lineHeight: "1.5",
                backgroundClip: "padding-box",
                appearance: "none",
              }}
            />
            <input
              type="text"
              style={{
                top: "0px",
                left: "8px",
                height: "48px",
                position: "absolute",
                margin: "0px",
                fontWeight: "700",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                border: "0",
                background: "transparent",
                width: "30px",
                pointerEvents: "none",
              }}
              value="+91"
              onChange={() => ""}
            />
          </div>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "600",
              margin: "16px 24px 10px",
              opacity: "0.5",
            }}
          >
            your password
          </p>
          <div style={{ position: "relative", margin: "0px 24px" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "300px",
                padding: "0px 0px 0px 10px",
                height: "48px",
                backgroundColor: "#F3F4F6",
                outlineColor: "#17AD7D",
                border: "0",
                borderRadius: "4px",
                color: "#171717",
                fontWeight: "700",
                display: "block",
                fontSize: "16px",
                lineHeight: "1.5",
                backgroundClip: "padding-box",
                appearance: "none",
              }}
              placeholder="eg: qwerty"
            />
          </div>
        </div>
        {error && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              margin: "10px 0px 0px 0px",
              color: "#f76152",
            }}
          >
            error text here
          </p>
        )}
        <p
          style={{
            background: "#17AD7D",
            fontSize: "18px",
            fontWeight: "700",
            borderRadius: "10px",
            textAlign: "center",
            width: "230px",
            color: "white",
            margin: "10vh 0px 0px 0px",
            padding: "10px 0px",
          }}
        >
          submit
        </p>
      </div>
    </div>
  );
};

export default Login;
