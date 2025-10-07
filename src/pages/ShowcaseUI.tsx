import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/sonner"; // If your project uses Sonner's <Toaster/>
// import { Toaster } from "@/components/ui/toaster"; // Or shadcn toaster

import { Check, Info, Mail, Menu, Smile } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Local demo media (place these in src/assets/showcase/...)
import heroImg from "@/assets/showcase/hero.jpg"; // 1920x600 suggested
import avatarJpg from "@/assets/showcase/avatar.jpg";
import sampleGif from "@/assets/showcase/loop.gif";

// Small helper: Section wrapper for consistent spacing
function DemoSection({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-heading font-bold">{title}</h3>
        {subtitle ? (
          <p className="text-sm text-boulder/90 mt-1">{subtitle}</p>
        ) : null}
      </div>
      <Card className="mb-10">
        <CardContent className="p-6 space-y-6">{children}</CardContent>
      </Card>
    </section>
  );
}

const ShowcaseUI: React.FC = () => {
  const { toast } = useToast();
  const [progress, setProgress] = React.useState(42);

  React.useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 8));
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="section-padding bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Sticky header for quick nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/50 bg-white/80 dark:bg-neutral-900/80 border-b">
        <div className="container-width py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <img src={heroImg} alt="Brand" className="hidden md:block h-8 w-auto rounded object-cover" />
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            {[
              ["Forms", "forms"],
              ["Feedback", "feedback"],
              ["Overlays", "overlays"],
              ["Navigation", "navigation"],
              ["Data", "data"],
              ["Misc", "misc"],
            ].map(([label, hash]) => (
              <a key={hash} href={`#${hash}`} className="hover:underline opacity-90">
                {label}
              </a>
            ))}
            <Button asChild size="sm" className="btn-hero">
              <Link to="/">Back to site</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="container-width grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              UI Showcase
            </h1>
            <p className="text-boulder max-w-prose">
              A living gallery of our design system (shadcn/ui + Tailwind). Copy
              and paste any snippet below into your pages.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => toast({ description: "Primary button clicked" })}>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={avatarJpg} alt="Avatar" />
                <AvatarFallback>LH</AvatarFallback>
              </Avatar>
              <Badge>New</Badge>
              <Badge variant="secondary">Beta</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
            <img src={heroImg} alt="Showcase hero" 
              className="w-full h-64 md:h-80 object-cover" />
            <img src={sampleGif} alt="Animated demo" 
              className=" bottom-3 right-3 h-128 w-128 rounded-md ring-1 ring-black/10" 
            />
          </div>

        </div>
      </section>

      <div className="container-width space-y-14">
        {/* FORMS */}
        <DemoSection id="forms" title="Forms" subtitle="Inputs, selects, switches, sliders, etc.">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" placeholder="Say something nice…" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Plan</Label>
                  <Select defaultValue="pro">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="pro">Pro</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Quantity</Label>
                  <Slider defaultValue={[3]} max={10} step={1} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" defaultChecked />
                  <Label htmlFor="terms" className="cursor-pointer">Agree to terms</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="news" />
                  <Label htmlFor="news" className="cursor-pointer">Newsletter</Label>
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="gap-2"><Mail className="h-4 w-4"/>Submit</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>

            <div className="space-y-6">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-3">
                  <div className="grid gap-2">
                    <Label>Full name</Label>
                    <Input placeholder="Jane Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Role</Label>
                    <RadioGroup defaultValue="user" className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="r1" value="user" />
                        <Label htmlFor="r1">User</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem id="r2" value="admin" />
                        <Label htmlFor="r2">Admin</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>
                <TabsContent value="password" className="space-y-3">
                  <Input type="password" placeholder="New password" />
                  <Input type="password" placeholder="Confirm password" />
                  <Button>Update password</Button>
                </TabsContent>
              </Tabs>

              <Separator />

              <div className="space-y-2">
                <Label>Progress (auto)</Label>
                <Progress value={progress} />
              </div>
            </div>
          </div>
        </DemoSection>

        {/* FEEDBACK */}
        <DemoSection id="feedback" title="Feedback" subtitle="Alerts, tooltips, toasts, badges & more.">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can use the alert component to convey important information.
                </AlertDescription>
              </Alert>

              <TooltipProvider>
                <div className="flex gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="sm">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>Simple tooltip</TooltipContent>
                  </Tooltip>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" size="sm">Hover card</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-64">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={avatarJpg} />
                          <AvatarFallback>LH</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">LionHeart</p>
                          <p className="text-sm text-boulder">Helping you manage your digital life.</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="sm" variant="secondary">Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">Any interactive content can live here.</PopoverContent>
                  </Popover>
                </div>
              </TooltipProvider>

              <div className="flex gap-3">
                <Button
                  onClick={() =>
                    toast({
                      title: "Saved",
                      description: "Your changes were stored.",
                    })
                  }
                >
                  Show toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast({
                      title: "Welcome",
                      description: "Thanks for trying the UI showcase!",
                    })
                  }
                >
                  Another toast
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge className="bg-green-600 hover:bg-green-600/90">Success</Badge>
              <Badge className="bg-amber-600 hover:bg-amber-600/90">Warning</Badge>
              <Badge className="bg-red-600 hover:bg-red-600/90">Error</Badge>
              <div className="col-span-2 grid grid-cols-3 gap-3">
                <Skeleton className="h-8" />
                <Skeleton className="h-8" />
                <Skeleton className="h-8" />
              </div>
            </div>
          </div>
        </DemoSection>

        {/* OVERLAYS */}
        <DemoSection id="overlays" title="Overlays" subtitle="Dialog, sheet, drawer and more.">
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogDescription>
                    Use dialogs for focused tasks, confirmations or forms.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 mt-2">
                  <Label>Email</Label>
                  <Input placeholder="you@company.com" />
                  <Button className="mt-2">Submit</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet (side panel)</Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[420px]">
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                  <SheetDescription>Fine tune your preferences</SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="s1">Dark mode</Label>
                    <Switch id="s1" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="s2">Email notifications</Label>
                    <Switch id="s2" defaultChecked />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="secondary">Open Drawer (bottom)</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>New message</DrawerTitle>
                  <DrawerDescription>Quick compose from the bottom sheet</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 grid gap-2">
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Type your message…" />
                  <div className="flex justify-end">
                    <Button>Send</Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </DemoSection>

        {/* NAVIGATION */}
        <DemoSection id="navigation" title="Navigation" subtitle="Breadcrumbs and pagination.">
          <div className="space-y-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Library</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Data</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </DemoSection>

        {/* DATA */}
        <DemoSection id="data" title="Data display" subtitle="Cards, table and accordion.">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Simple card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-boulder">Cards wrap any content and keep a consistent look.</p>
                <Button size="sm">Action</Button>
              </CardContent>
            </Card>

            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Firewall", status: "Online" },
                    { name: "VPN", status: "Degraded" },
                    { name: "Mail", status: "Offline" },
                  ].map((r) => (
                    <TableRow key={r.name}>
                      <TableCell>{r.name}</TableCell>
                      <TableCell>
                        <Badge className={
                          r.status === "Online"
                            ? "bg-green-600 hover:bg-green-600/90"
                            : r.status === "Degraded"
                            ? "bg-amber-600 hover:bg-amber-600/90"
                            : "bg-red-600 hover:bg-red-600/90"
                        }>
                          {r.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is LionHeart?</AccordionTrigger>
              <AccordionContent>
                Your optimal technology partner to grow your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer 24/7 support?</AccordionTrigger>
              <AccordionContent>Yes — SOC/NOC coverage round the clock.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </DemoSection>

        {/* MISC */}
        <DemoSection id="misc" title="Misc" subtitle="Avatars, separators and little helpers.">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={avatarJpg} />
                <AvatarFallback>LH</AvatarFallback>
              </Avatar>
              <span className="text-sm opacity-80">@lionheart</span>
            </div>
            <Separator className="h-6" orientation="vertical" />
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Everything wired up</span>
            </div>
          </div>
        </DemoSection>

        {/* CARDS */}
        <DemoSection id="cards" title="Cards" subtitle="Common card patterns (image, stats, list).">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image Card */}
            <Card className="overflow-hidden">
              <img src={heroImg} alt="Data center" className="h-36 w-full object-cover" />
              <CardHeader>
                <CardTitle>Image card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-boulder">Use for blog teasers, product tiles, etc.</p>
                <Button size="sm">Read more</Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Service health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">99.98%</div>
                    <div className="text-xs text-boulder">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs text-boulder">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">#1</div>
                    <div className="text-xs text-boulder">Priority</div>
                  </div>
                </div>
                <Progress value={progress} />
              </CardContent>
            </Card>

            {/* List Card */}
            <Card>
              <CardHeader>
                <CardTitle>Quick actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { label: "Invite teammate" },
                  { label: "Create ticket" },
                  { label: "Generate report" },
                ].map((a) => (
                  <div key={a.label} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <span>{a.label}</span>
                    <Button size="sm" variant="outline">Go</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </DemoSection>

        {/* CALENDAR */}
        <DemoSection id="calendar" title="Calendar" subtitle="Inline calendar with selection.">
          <Calendar
            mode="single"
            selected={new Date()}
            onSelect={() => {}}
            className="rounded-md border w-fit"
          />
        </DemoSection>

        {/* CAROUSEL */}
        <DemoSection id="carousel" title="Carousel" subtitle="Swipe / arrow navigation with Embla under the hood.">
          <Carousel 
            // className="w-full max-w-4xl"
          >
            <CarouselContent>
              {[heroImg, sampleGif, heroImg, sampleGif].map((src, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <img src={src} alt={`Slide ${i+1}`} className="h-36 w-full object-cover" />
                    <CardContent className="p-4">
                      <p className="text-sm">Slide {i + 1}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DemoSection>

        {/* CHARTS */}
        <DemoSection id="charts" title="Charts" subtitle="Line chart via recharts + ui/chart helpers.">
          <Card>
            <CardContent className="p-4 h-72">
              <ChartContainer
                config={{
                  visits: { label: "Visits" },
                }}
                className="h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { name: "Mon", visits: 120 },
                    { name: "Tue", visits: 200 },
                    { name: "Wed", visits: 150 },
                    { name: "Thu", visits: 280 },
                    { name: "Fri", visits: 320 },
                    { name: "Sat", visits: 250 },
                    { name: "Sun", visits: 180 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="visits" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </DemoSection>

        {/* DRAWERS */}
        <DemoSection id="drawers" title="Drawers" subtitle="Bottom sheet and side drawers for quick tasks.">
          <div className="flex flex-wrap gap-3">
            <Drawer>
              <DrawerTrigger asChild>
                <Button>New Task (bottom)</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Create task</DrawerTitle>
                  <DrawerDescription>Add a quick task to your list.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 grid gap-2">
                  <Input placeholder="Title" />
                  <Textarea placeholder="Details" />
                  <div className="flex items-center gap-2">
                    <Checkbox id="urgent" />
                    <Label htmlFor="urgent">Mark urgent</Label>
                  </div>
                  <div className="flex justify-end">
                    <Button>Save</Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Filters (side)</Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[360px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down your results</SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div className="grid gap-2">
                    <Label>Status</Label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Date</Label>
                    <Calendar mode="single" selected={new Date()} onSelect={() => {}} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </DemoSection>

        <footer className="text-center text-sm text-boulder pb-6">
          Built with shadcn/ui • Tailwind CSS • React
        </footer>
      </div>

      {/* Place one toaster somewhere in your app layout (not mandatory here) */}
      <Toaster richColors />
    </div>
  );
};

export default ShowcaseUI;
