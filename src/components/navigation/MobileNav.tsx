
import React, { useState } from "react";
import { Menu, X, Home, User, Settings, HelpCircle, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help", href: "/help" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-[#0c0f24] border-none p-0">
          <div className="flex flex-col h-full">
            <SheetHeader className="p-6 border-b border-gray-700">
              <SheetTitle className="text-white text-xl font-bold">eXp</SheetTitle>
            </SheetHeader>
            
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#1c1f36] rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
            
            <div className="p-4 border-t border-gray-700">
              <div className="text-gray-400 text-sm">
                Version 2.1.0
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
