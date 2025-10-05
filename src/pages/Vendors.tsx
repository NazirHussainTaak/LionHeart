// src/pages/Vendors.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getVendorLogo } from "@/contexts/logo-resolver";

type Vendor = {
  name: string;
  category: "cloud" | "storage" | "security" | "networking";
  description: string;
  capabilities: string[];
  tier: string;
  url?: string | null;
};

const rawVendors: Vendor[] = [
  {
    name: "Dell EMC",
    category: "storage",
    description:
      "Enterprise storage, servers, and converged infrastructure",
    capabilities: ["PowerMax", "Unity", "VxRail", "PowerEdge"],
    tier: "Gold Partner",
  },
  {
    name: "VMware",
    category: "cloud",
    description:
      "Virtualization and cloud infrastructure solutions for modern data centers",
    capabilities: ["vSphere", "vSAN", "NSX", "Cloud Foundation"],
    tier: "Strategic Partner",
  },


  {
    name: "Microsoft",
    category: "cloud",
    description:
      "Cloud services, operating systems, and productivity solutions",
    capabilities: ["Azure", "Office 365", "Windows Server", "SQL Server"],
    tier: "Gold Partner",
  },
  {
    name: "CrowdStrike",
    category: "security",
    description:
      "Cloud-native endpoint protection and threat intelligence",
    capabilities: [
      "Falcon Platform",
      "EDR",
      "Threat Hunting",
      "Cloud Security",
    ],
    tier: "Technology Partner",
  },
  {
    name: "Fortinet",
    category: "security",
    description: "Network security appliances and security fabric solutions",
    capabilities: ["FortiGate", "FortiAnalyzer", "FortiManager", "SIEM"],
    tier: "Strategic Partner",
  },
  {
    name: "Veeam",
    category: "storage",
    description: "Backup, recovery, and data management solutions",
    capabilities: ["Backup & Replication", "Cloud Connect", "ONE", "Archive"],
    tier: "Gold Partner",
  },
  {
    name: "Palo Alto Networks",
    category: "security",
    description: "Next-generation firewalls and security orchestration",
    capabilities: ["Prisma", "Cortex", "GlobalProtect", "Panorama"],
    tier: "Strategic Partner",
  },
  {
    name: "HPE",
    category: "storage",
    description: "Enterprise storage, compute, and hybrid cloud solutions",
    capabilities: ["3PAR", "Nimble", "SimpliVity", "ProLiant"],
    tier: "Premier Partner",
  },
    {
    name: "Cisco",
    category: "networking",
    description:
      "Network infrastructure, security, and collaboration solutions",
    capabilities: ["Switching", "Routing", "Security", "Wireless"],
    tier: "Gold Partner",
  },
  {
    name: "Splunk",
    category: "security",
    description: "Security information and event management (SIEM)",
    capabilities: ["Enterprise Security", "SOAR", "UBA", "Phantom"],
    tier: "Technology Partner",
  },
  {
    name: "Pure Storage",
    category: "storage",
    description: "All-flash storage arrays and cloud storage services",
    capabilities: [
      "FlashArray",
      "FlashBlade",
      "Cloud Block Store",
      "Portworx",
    ],
    tier: "Technology Partner",
  },
  {
    name: "Nutanix",
    category: "cloud",
    description: "Hyperconverged infrastructure and multi-cloud solutions",
    capabilities: ["AHV", "Prism", "Calm", "Karbon"],
    tier: "Strategic Partner",
  },

];

const getTierColor = (tier: string) => {
  switch (tier) {
    case "Strategic Partner":
      return "bg-primary text-primary-foreground";
    case "Premier Partner":
      return "bg-accent text-accent-foreground";
    case "Gold Partner":
      return "bg-yellow-600 text-white dark:bg-yellow-500";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function Vendors() {
  const [activeFilter, setActiveFilter] = useState("all");

  const vendors = rawVendors.map((v) => ({
    ...v,
    logo: getVendorLogo(v.name),
  }));

  const categories = [
    { id: "all", label: "All Partners", count: vendors.length },
    {
      id: "cloud",
      label: "Cloud",
      count: vendors.filter((v) => v.category === "cloud").length,
    },
    {
      id: "storage",
      label: "Storage",
      count: vendors.filter((v) => v.category === "storage").length,
    },
    {
      id: "security",
      label: "Security",
      count: vendors.filter((v) => v.category === "security").length,
    },
    {
      id: "networking",
      label: "Networking",
      count: vendors.filter((v) => v.category === "networking").length,
    },
  ];

  const filteredVendors =
    activeFilter === "all"
      ? vendors
      : vendors.filter((vendor) => vendor.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood dark:bg-neutral-900 section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Technology Partners
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Platforms we implement and operate with care. Our strategic
              partnerships ensure you get the best enterprise-grade solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="container-width px-6 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <Card
              key={index}
              className="card-elevated h-full bg-card dark:bg-card border-border"
            >
              <CardHeader className="space-y-3">
                {/* Row 1: Tier (right) */}
                <div className="flex items-center justify-between">
{/*                  <div className="h-8 w-28 flex items-center">
                    {vendor.logo ? (
                      <img
                        src={vendor.logo}
                        alt={`${vendor.name} logo`}
                        className="h-8 w-auto object-contain"
                        loading="lazy"
                        width={112}
                        height={32}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded bg-primary/10 dark:bg-primary/20 flex items-center 
                        justify-center text-primary text-xs font-bold">
                        {getInitials(vendor.name)}
                      </div>
                    )}
                  </div>*/}

                  <Badge
                    className={`${getTierColor(
                      vendor.tier
                    )} text-[11px] px-2.5 py-1 whitespace-nowrap`}
                  >
                    {vendor.tier}
                  </Badge>
                </div>

                {/* Row 2: Name (full line) */}
                <CardTitle className="text-xl font-heading text-card-foreground truncate">
                  
                                   {vendor.logo ? (
                      <img
                        src={vendor.logo}
                        alt={`${vendor.name} logo`}
                        className="h-8 w-auto object-contain"
                        loading="lazy"
                        width={112}
                        height={32}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded bg-primary/10 dark:bg-primary/20 flex items-center 
                        justify-center text-primary text-xs font-bold">
                        {getInitials(vendor.name)}
                      </div>
                    )}

                  {/*{vendor.name}*/}
                </CardTitle>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {vendor.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-card-foreground">
                      Key Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {vendor.capabilities.map((capability, capIndex) => (
                        <Badge
                          key={capIndex}
                          variant="secondary"
                          className="text-[11px] px-2 py-1 rounded-full"
                        >
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    state={{ vendor: vendor.name }}
                    className="block"
                  >
                    <Button className="w-full btn-secondary text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
