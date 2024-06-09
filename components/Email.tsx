import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Email = () => {
  return (
    <section className="w-full h-fit">
      <article className="group flex flex-col gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>
                <div className="bg-violet-200 w-8 h-8 rounded-full"></div>
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="font-medium">Emily Davis</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                example@acme.inc
              </p>
            </div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Oct 08, 2023
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Re: New order #34562</h4>
          <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
            Hi Emily, Thanks for your order. We are pleased to inform you that
            your order has been shipped. You can track your order online on our
            website. Please find the tracking number below.
          </p>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm">
            Reply
          </Button>
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
      </article>
    </section>
  );
};

export default Email;
