import React from "react";
import awsExports from "./../../../aws-exports";
import Amplify from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });

export function MainContainer() {
  return (
    <div>
      <h1>Main</h1>
      <p>Test text of main</p>
    </div>
  );
}
