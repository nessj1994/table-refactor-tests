import React from "react";

export const Table: React.FC<any> = (props) => {
  const { children } = props;
  return <table style={{ backgroundColor: "blue" }}>{children}</table>;
};
