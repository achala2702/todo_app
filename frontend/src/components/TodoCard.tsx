import Button from "./Button";
import { Icon } from "@iconify/react";

export default function TodoCard() {
  return (
    <div className=" bg-red-100 rounded-lg flex items-center justify-between gap-8 p-8 hover:shadow-lg transition-shadow duration-150">
      <div className="gap-2">
        <h1 className="text-2xl font-bold">afdf</h1>
        <p className="text-lg">asdasd</p>
      </div>
      <Button className="">
        <Icon icon="weui:done2-filled" width="24" height="24" />
        Done
      </Button>
    </div>
  );
}
