export const detectServiceKeywords = (text: string): string[] => {
  const keywords = text.toLowerCase();
  const detectedServices: string[] = [];

  const serviceMap: { [key: string]: string[] } = {
    "data-center": ["data center", "datacenter", "مركز بيانات", "مركز البيانات"],
    "cloud": ["cloud", "aws", "azure", "سحابة", "سحابي"],
    "data-protection": ["backup", "data protection", "recovery", "نسخ احتياطي", "حماية البيانات"],
    "converged": ["converged", "hyperconverged", "hci", "متقارب"],
    "storage": ["storage", "san", "nas", "تخزين"],
    "networking-security": ["network", "security", "firewall", "شبكة", "أمن", "جدار ناري"],
    "migration": ["migration", "migrate", "ترحيل", "نقل"],
    "bcdr": ["disaster recovery", "business continuity", "bcdr", "استمرارية", "كارثة"],
    "deployment": ["deployment", "maintenance", "نشر", "صيانة"],
    "edr-xdr-ndr": ["edr", "xdr", "ndr", "endpoint", "detection", "كشف"],
    "identity-management": ["identity", "iam", "authentication", "هوية", "مصادقة"],
    "threat-intelligence": ["threat", "intelligence", "تهديد", "استخبارات"],
    "soc": ["soc", "security operations", "عمليات أمنية"],
    "noc": ["noc", "network operations", "عمليات شبكة"],
    "hybrid-it": ["hybrid", "hybrid it", "هجين"]
  };

  for (const [service, patterns] of Object.entries(serviceMap)) {
    if (patterns.some(pattern => keywords.includes(pattern))) {
      detectedServices.push(service);
    }
  }

  return detectedServices;
};

export const getSolutionAreaFromKeywords = (detectedServices: string[]): string => {
  const solutionMap: { [key: string]: string } = {
    "data-center": "Data Center Solutions",
    "cloud": "Cloud Solutions",
    "data-protection": "Enterprise Data Protection",
    "converged": "Converged/Hyperconverged Systems",
    "storage": "Storage Solutions",
    "networking-security": "Networking Security",
    "migration": "Application & Data Migration",
    "bcdr": "Business Continuity & DR",
    "deployment": "Deployment & Maintenance",
    "edr-xdr-ndr": "EDR/XDR/NDR",
    "identity-management": "Identity Management",
    "threat-intelligence": "Threat Intelligence Management",
    "soc": "Security Operations Centre",
    "noc": "Network Operations Center",
    "hybrid-it": "Hybrid IT Management"
  };

  if (detectedServices.length > 0) {
    return solutionMap[detectedServices[0]] || "";
  }

  return "";
};
