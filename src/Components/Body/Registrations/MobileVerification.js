function MobileVerification() {
  return (
    <>
      <div
        style={{
          background: "grey",
          width: 1440,
          height: "100%",
          margin: "auto",
        }}
      >
        <div
          className="rectangleLine"
          style={{
            position: "absolute",
            height: 6,
            width: 523,
            top: 145,
            background: "#D2137F",
          }}
        >
          <div
            style={{
              height: 6,
              width: 44,

              background: "#3E326B",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            height: 1018,
            width: 470,
            top: 0,
            left: 906,
            background:
              "linear-gradient(169.16deg, #263768 1.9%, #DD1180 100.54%)",
          }}
        />

        <div>
          <text
            style={{
              position: "absolute",
              fontSize: 26,
              fontWeight: "600",
              top: 219,
              color: "#333333",
            }}
          >
            welcome To
          </text>
          <text
            style={{
              position: "absolute",
              fontSize: 26,
              fontWeight: "600",
              top: 270,
              color: "#666666",
            }}
          >
            CamArtisans
          </text>
          <text
            style={{
              position: "absolute",
              fontSize: 32,
              fontWeight: "600",
              top: 340,
              color: "#333333",
            }}
          >
            Hi DEFINITION PICTURES NO COMPRAMISE
          </text>
          <p
            style={{
              position: "absolute",
              fontSize: 12,
              fontWeight: "400",
              top: 400,
              color: "#666666",
            }}
          >
            <br />
            Welcome to the photographer application process. Let’s begin by
            getting to
            <br />
            know each other. Please provide your mobile number below to start.
          </p>

          <text
            style={{
              position: "absolute",
              fontSize: 14,
              fontWeight: "600",
              top: 540,
              color: "#666666",
            }}
          >
            Verify your phone number
          </text>

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              background: "red",
              width: 500,
              height: 80,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <input
              style={{
                position: "relative",
                width: 50,
                height: 50,
                borderWidth: 1,
                borderRadius: 10,
                textAlign: "center",
              }}
            />
            <input
              style={{
                position: "relative",
                width: 50,
                height: 50,
                borderWidth: 1,
                borderRadius: 10,
                textAlign: "center",
              }}
            />
            <input
              style={{
                position: "relative",
                width: 50,
                height: 50,
                borderWidth: 1,
                borderRadius: 10,
                textAlign: "center",
              }}
            />
            <input
              style={{
                position: "relative",
                width: 50,
                height: 50,
                borderWidth: 1,
                borderRadius: 10,
                textAlign: "center",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileVerification;
