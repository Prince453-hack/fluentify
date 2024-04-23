import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="p-5 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Secondary</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="secondaryOutline">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger Outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">super Outline</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">super Outline</Button>
    </div>
  );
};

export default page;
