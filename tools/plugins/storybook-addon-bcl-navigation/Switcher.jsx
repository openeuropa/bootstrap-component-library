import React from "react";
import { IconButton, Separator } from "@storybook/components";

function Switcher() {
  const fullUrl = window.location.href.split("?")[0];
  const isDefault = fullUrl.includes("/default");
  const isFeatures = fullUrl.includes("/features");
  const isJoinup = fullUrl.includes("/joinup");
  const isUcpkn = fullUrl.includes("/ucpkn");

  return (
    <>
      <Separator />
      <IconButton
        key="components"
        title="BCL Library"
        active={isDefault}
        style={{ borderRadius: 0, fontWeight: "bold" }}
      >
        {isDefault ? (
          <span>BCL</span>
        ) : (
          <a
            style={{
              color: "#999999",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            href={`/default`}
          >
            <span>BCL</span>
          </a>
        )}
      </IconButton>
      <IconButton
        key="features"
        title="BCL Features"
        active={isFeatures}
        style={{ borderRadius: 0, fontWeight: "bold" }}
      >
        {isFeatures ? (
          <span>Features</span>
        ) : (
          <a
            style={{
              color: "#999999",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            href={`/features`}
          >
            <span>Features</span>
          </a>
        )}
      </IconButton>
      <Separator />
      <IconButton
        key="joinup"
        title="Joinup"
        active={isJoinup}
        style={{ borderRadius: 0, fontWeight: "bold" }}
      >
        {isJoinup ? (
          <span>Joinup</span>
        ) : (
          <a
            style={{
              color: "#999999",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            href={`/joinup`}
          >
            <span>Joinup</span>
          </a>
        )}
      </IconButton>
      <IconButton
        key="ucpkn"
        title="Ucpkn"
        active={isUcpkn}
        style={{ borderRadius: 0, fontWeight: "bold" }}
      >
        {isUcpkn ? (
          <span>Ucpkn</span>
        ) : (
          <a
            style={{
              color: "#999999",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            href={`/ucpkn`}
          >
            <span>Ucpkn</span>
          </a>
        )}
      </IconButton>
    </>
  );
}

export default Switcher;
