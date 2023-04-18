import { MenuContentProps } from "@radix-ui/react-dropdown-menu";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenuProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  children: MenubarContentInterface;
}

interface MenubarContentInterface extends MenubarPrimitive.MenuContentProps {
  className?: string;
  align?: "start" | "end" | "center";
  items: MenuItemInterface[];
}

export interface MenuItemInterface
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {
  label: string;
  inset?: boolean;
  className?: string;
  icon?: React.ReactNode;
  subsets?: MenubarSubContentInterface[];
}

export interface MenubarSubContentInterface
  extends React.ComponentProps<typeof MenubarPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> {
  items: MenuItemInterface[];
}
