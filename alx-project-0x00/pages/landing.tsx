import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <div className="mt-6 flex gap-4">
        <Button styles="rounded-sm" />
        <Button styles="rounded-md" />
        <Button styles="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;