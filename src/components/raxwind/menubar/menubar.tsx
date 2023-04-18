import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { MenuProps } from "./interfaces/MenuPropsInterface"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"


// ------------------------------ ****** ------------------------------ //

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup


// ------------------------------ ****** ------------------------------ //


interface MenubarOptions {
    items?: MenuProps[],
}



const Menubar = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & MenubarOptions
>(({ className, items, children, ...props }, ref) => (
    <MenubarPrimitive.Root {...props} ref={ref}
        className={cn(
            "flex h-10 items-center space-x-1 rounded-md border-border bg-background p-1",
            className
        )}
    >
        {items?.map((item, index) => (
            <MenubarMenu key={index}>
                <MenubarTrigger className={`${item.className} flex items-center gap-2`}>
                    {item.icon} {item.label}
                </MenubarTrigger>
                <MenubarContent {...item} className={item.children?.className} align={item.children?.align} sideOffset={5} alignOffset={-3}>
                    {item.children?.items?.map((child, index) => (
                        <>
                            {child.subsets ?
                                <>
                                    {child.subsets?.map((subset, index) => (
                                        <MenubarSub key={index}>
                                            <MenubarSubTrigger className={`${child.className} flex items-center gap-2`}>
                                                {child.icon} {child.label}
                                            </MenubarSubTrigger>
                                            <MenubarSubContent className={subset.className} sideOffset={5} alignOffset={-3}>
                                                {subset.items?.map((subItem, index) => (
                                                    <MenubarItem {...subItem} key={index} className={`${subItem.className} flex items-center gap-2`}>
                                                        {subItem.icon} {subItem.label}
                                                    </MenubarItem>
                                                ))}
                                            </MenubarSubContent>
                                        </MenubarSub>
                                    ))}
                                </>
                                :
                                <>
                                    <MenubarItem {...child} key={index} className={`${child.className} flex items-center gap-2`}>
                                        {child.icon} {child.label}
                                    </MenubarItem>

                                </>}
                        </>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        ))}
        {children}
    </MenubarPrimitive.Root >
))


// ------------------------------ ****** ------------------------------ //


const MenubarTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            className
        )}
        {...props}
    />
))


// ------------------------------ ****** ------------------------------ //

const MenubarSubTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
        inset?: boolean
    }
>(({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
))



// ------------------------------ ****** ------------------------------ //

const MenubarSubContent = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.SubContent
        ref={ref}
        className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
            className
        )}
        {...props}
    />
))




// ------------------------------ ****** ------------------------------ //

const MenubarContent = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
    (
        { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
        ref
    ) => (
        <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content
                ref={ref}
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-top-1",
                    className
                )}
                {...props}
            />
        </MenubarPrimitive.Portal>
    )
)


// ------------------------------ ****** ------------------------------ //

const MenubarItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    />
))



// ------------------------------ ****** ------------------------------ //

export { Menubar }