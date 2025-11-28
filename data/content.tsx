import React from 'react';
import { ServiceItem, CaseStudy } from '../types';
import { ShieldAlert, Bug, SearchCode, Lock, Target, Cpu } from '../components/Icons';

export const servicesData: ServiceItem[] = [
  {
    id: "pentest",
    title: "Penetration Testing",
    description: "Simulated cyberattacks on your computer system to check for exploitable vulnerabilities. We hit hard before they do.",
    icon: <ShieldAlert className="w-8 h-8" />,
    features: ["Network Penetration", "Web Application Testing", "API Security Assessment"],
    fullDescription: "Our Penetration Testing service is not a passive scan. It is an authorized, simulated cyberattack on your computer system, performed to evaluate the security of the system. We use the same tools, techniques, and processes as attackers to find and demonstrate the business impact of weaknesses in your system.",
    benefits: [
        "Identify and fix high-risk vulnerabilities before exploitation.",
        "Meet compliance requirements (PCI-DSS, HIPAA, SOC2).",
        "Test your incident response capabilities.",
        "Validate security controls and firewall configurations."
    ],
    methodology: [
        { title: "Reconnaissance", desc: "We gather intelligence on your infrastructure, employees, and digital footprint to identify potential entry points." },
        { title: "Scanning", desc: "Using advanced tools to understand how your network responds to various intrusion attempts." },
        { title: "Exploitation", desc: "We actively attempt to breach your defenses using web application attacks, network exploits, and social engineering." },
        { title: "Post-Exploitation", desc: "Determining the value of the compromised asset and attempting to pivot deeper into the network." }
    ],
    deliverables: ["Executive Summary for Stakeholders", "Technical Vulnerability Report", "Remediation Roadmap", "Re-testing Verification"],
    faq: [
        { q: "Will this disrupt my business?", a: "We prioritize system stability. Critical tests are scheduled during off-hours, and we coordinate closely with your IT team to prevent downtime." },
        { q: "How often should we pen test?", a: "Industry standard is annually, or immediately after significant infrastructure changes or code deployments." }
    ]
  },
  {
    id: "red-teaming",
    title: "Red Teaming",
    description: "Full-scope adversarial simulation. We challenge your entire organization's readiness against a sophisticated threat actor.",
    icon: <Bug className="w-8 h-8" />,
    features: ["Social Engineering", "Physical Security Breaches", "Advanced Persistent Threat (APT) Simulation"],
    fullDescription: "Red Teaming goes beyond standard penetration testing. It is a full-scope, multi-layered attack simulation designed to measure how well your people, networks, applications, and physical security controls can withstand an attack from a real-life adversary. We don't just find bugs; we test your defense capabilities.",
    benefits: [
        "Realistic simulation of a sophisticated threat actor.",
        "Tests Blue Team (defensive) detection and response times.",
        "Uncovers hidden risks in processes and human behavior.",
        "No-holds-barred approach (within ROE) covering physical, digital, and social vectors."
    ],
    methodology: [
        { title: "Threat Intelligence", desc: "We model our attack based on threat actors relevant to your specific industry." },
        { title: "Initial Access", desc: "Using phishing, vishing, or physical breaches to gain a foothold." },
        { title: "Lateral Movement", desc: "Silently moving through the network to avoid detection while escalating privileges." },
        { title: "Objective Completion", desc: "Exfiltrating 'crown jewel' data or compromising critical control systems." }
    ],
    deliverables: ["Attack Narrative Timeline", "Defense Gap Analysis", "Blue Team Detection Report", "Executive Debriefing"],
    faq: [
        { q: "What is the difference between Pen Testing and Red Teaming?", a: "Pen testing finds vulnerabilities. Red teaming tests your organization's ability to detect and respond to an active threat." },
        { q: "Is it safe?", a: "Yes. All operations are conducted under strict Rules of Engagement (ROE) with a 'Stop Action' capability if critical systems are at risk." }
    ]
  },
  {
    id: "code-review",
    title: "Source Code Review",
    description: "In-depth analysis of your codebase to identify logic errors and security flaws that automated scanners miss.",
    icon: <SearchCode className="w-8 h-8" />,
    features: ["Static Application Security Testing", "Manual Logic Analysis", "Secure Coding Guidelines"],
    fullDescription: "Software vulnerabilities are often the root cause of major breaches. Our Secure Code Review service involves a line-by-line manual and automated analysis of your application source code. We look for logic bombs, race conditions, hardcoded credentials, and architectural flaws that black-box testing cannot see.",
    benefits: [
        "Find vulnerabilities early in the SDLC (Shift Left).",
        "Detect business logic flaws invisible to scanners.",
        "Ensure compliance with OWASP Top 10 and CWE/SANS Top 25.",
        "Educate developers on secure coding practices."
    ],
    methodology: [
        { title: "Context Analysis", desc: "Understanding the business logic and data flow of the application." },
        { title: "Automated SAST", desc: "Running enterprise-grade static analysis tools to catch low-hanging fruit." },
        { title: "Manual Review", desc: "Senior security engineers review critical functions, authentication flows, and API endpoints." },
        { title: "Verification", desc: "Proof-of-concept exploitation to confirm the impact of findings." }
    ],
    deliverables: ["Detailed Code Audit Report", "Patch Recommendations", "Developer Training Session", "Secure Coding Guidelines Doc"],
    faq: [
        { q: "Do you need access to our repo?", a: "Yes, we require read-access to the repository or a secure transfer of the source code archive." },
        { q: "What languages do you support?", a: "We support all major languages including Python, Java, C#, Go, JavaScript/TypeScript, C++, and PHP." }
    ]
  },
  {
    id: "ransomware",
    title: "Ransomware Defense",
    description: "Proactive assessment of your resilience against encryption attacks and data exfiltration attempts.",
    icon: <Lock className="w-8 h-8" />,
    features: ["Backup Integrity Checks", "Lateral Movement Analysis", "Egress Filtering Audits"],
    fullDescription: "Ransomware is the #1 threat to modern business continuity. Our Defense Assessment simulates a ransomware outbreak to test if your containment strategies work. We evaluate your backup immutability, network segmentation, and endpoint protection resilience to ensure you never have to pay the ransom.",
    benefits: [
        "Verify backup restoration times and integrity.",
        "Identify weak points in network segmentation.",
        "Test EDR/XDR efficacy against encryption behaviors.",
        "Reduce insurance premiums by demonstrating resilience."
    ],
    methodology: [
        { title: "Access Simulation", desc: "Simulating a compromised endpoint within the internal network." },
        { title: "Propagation Test", desc: "Attempting to spread harmless pseudo-ransomware via SMB, WMI, and RDP." },
        { title: "Encryption Emulation", desc: "Testing file integrity monitoring without destroying actual data." },
        { title: "Recovery Drill", desc: "Auditing the speed and completeness of a disaster recovery operation." }
    ],
    deliverables: ["Ransomware Readiness Scorecard", "Gap Analysis Report", "Backup Strategy Audit", "Incident Response Playbook"],
    faq: [
        { q: "Will you encrypt our real files?", a: "Never. We use benign simulation files and innocuous markers to prove access and write privileges." }
    ]
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    description: "Auditing AWS, Azure, and GCP environments for misconfigurations and IAM vulnerabilities.",
    icon: <Cpu className="w-8 h-8" />,
    features: ["Infrastructure as Code Audit", "Container Security", "Serverless Vulnerabilities"],
    fullDescription: "The cloud is not secure by default. Our Cloud Security Assessment reviews your AWS, Azure, or GCP environment against CIS Benchmarks and best practices. We hunt for permissive IAM roles, exposed storage buckets, insecure security groups, and unencrypted data stores.",
    benefits: [
        "Prevent data leaks from misconfigured S3/Blob storage.",
        "Enforce Least Privilege access models.",
        "Secure Kubernetes and containerized workloads.",
        "Optimize cloud spend by identifying unused insecure resources."
    ],
    methodology: [
        { title: "Configuration Audit", desc: "Reviewing settings against CIS Benchmarks." },
        { title: "IAM Analysis", desc: "Mapping out excessive permissions and potential escalation paths." },
        { title: "Network Review", desc: "Analyzing VPC peering, security groups, and egress rules." },
        { title: "Secrets Management", desc: "Checking for hardcoded keys in Lambda/Functions or metadata services." }
    ],
    deliverables: ["Cloud Posture Assessment", "Remediation Terraform/CloudFormation Scripts", "Compliance Mapping Report"],
    faq: [
        { q: "Do you support multi-cloud?", a: "Yes, we specialize in hybrid and multi-cloud environments across all major providers." }
    ]
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    description: "Testing the human element of security through phishing, vishing, and physical tailgating exercises.",
    icon: <Target className="w-8 h-8" />,
    features: ["Phishing Campaigns", "Pretexting", "Security Awareness Training"],
    fullDescription: "Humans are often the weakest link in the security chain. Our Social Engineering services test your employees' adherence to security policies. We launch controlled phishing campaigns, make pretext calls (vishing), and attempt physical entry to sensitive areas to measure awareness and culture.",
    benefits: [
        "Measure effectiveness of security training.",
        "Identify high-risk user groups.",
        "Test physical security controls and badge access.",
        "Strengthen the 'human firewall'."
    ],
    methodology: [
        { title: "OSINT Gathering", desc: "Harvesting public data on employees to craft convincing lures." },
        { title: "Campaign Launch", desc: "Sending tailored spear-phishing emails or making vishing calls." },
        { title: "Physical Entry", desc: "Attempting to tailgate or clone badges to access server rooms." },
        { title: "Debrief & Train", desc: "Immediate feedback and training for compromised users." }
    ],
    deliverables: ["Campaign Statistics Report", "Click-rate Analysis", "Physical Breach Proof (Photos/Logs)", "Employee Training Module"],
    faq: [
        { q: "Do we punish employees who click?", a: "We advise against it. The goal is education and cultural improvement, not punishment." }
    ]
  }
];

export const portfolioData: CaseStudy[] = [
  {
    id: "OP-091",
    title: "Project Black Vault",
    client: "Global FinTech Conglomerate",
    type: "Red Team Assessment",
    outcome: "Identified 3 Critical Zero-Day Vulnerabilities in core banking infrastructure.",
    image: "https://picsum.photos/800/600?grayscale&random=1",
    date: "OCT 2023",
    duration: "4 Weeks",
    teamSize: 5,
    challenge: "The client, a Tier-1 financial institution, prepared to launch a new blockchain-based settlement layer. They needed absolute assurance that the platform was impervious to manipulation, theft, or denial of service before go-live.",
    execution: "Our team initiated a 'Black Box' engagement with zero prior knowledge. We utilized Open Source Intelligence (OSINT) to identify developer subdomains. A misconfigured development environment allowed us to harvest hashed credentials. We cracked these using a GPU cluster in 48 hours.",
    findings: [
        { title: "RCE via Deserialization", severity: "Critical", desc: "A Java deserialization vulnerability allowed remote code execution on the payment gateway." },
        { title: "Ledger Manipulation", severity: "Critical", desc: "Logic flaw in the smart contract allowed integer overflow, enabling infinite minting of tokens." },
        { title: "Admin Portal Bypass", severity: "High", desc: "Broken access control allowed unauthenticated access to the transaction approval dashboard." }
    ],
    technicalDetails: ["Tools: Burp Suite Pro, Hashcat, BloodHound, Custom Python Exploits", "CVEs: N/A (0-Day)", "Technique: MITRE ATT&CK T1587, T1190"]
  },
  {
    id: "OP-115",
    title: "Operation Glass House",
    client: "National Healthcare Provider",
    type: "Ransomware Simulation",
    outcome: "Successfully halted simulated encryption payload within 4 minutes of execution.",
    image: "https://picsum.photos/800/600?grayscale&random=2",
    date: "JAN 2024",
    duration: "2 Weeks",
    teamSize: 3,
    challenge: "With rising ransomware attacks on hospitals, the client required a validation of their new XDR (Extended Detection and Response) investments. They needed to know if their SOC could detect a living-off-the-land attack.",
    execution: "We simulated a compromised contractor laptop. Instead of deploying standard malware that would be easily flagged, we used PowerShell and WMI (Windows Management Instrumentation) - tools native to the system. We attempted to disable Shadow Volume Copies and exfiltrate patient records.",
    findings: [
        { title: "Delayed Alerting", severity: "Medium", desc: "Alerts for bulk file modifications were delayed by 15 minutes, which is too long for ransomware containment." },
        { title: "Lateral Movement Success", severity: "High", desc: "Service accounts with Domain Admin privileges were cached in memory, allowing easy privilege escalation." },
        { title: "Successful Block", severity: "Low", desc: "The endpoint protection successfully killed the encryption process after 20 files." }
    ],
    technicalDetails: ["Tools: Cobalt Strike, PowerShell Empire, Mimikatz", "Technique: Living off the Land (LotL), Pass-the-Hash"]
  },
  {
    id: "OP-204",
    title: "Protocol Nightwatch",
    client: "SaaS Enterprise Platform",
    type: "Cloud Security Audit",
    outcome: "Remediated 45 misconfigured IAM roles and exposed S3 buckets.",
    image: "https://picsum.photos/800/600?grayscale&random=3",
    date: "NOV 2023",
    duration: "3 Weeks",
    teamSize: 4,
    challenge: "A rapid-growth SaaS unicorn migrated to AWS but retained legacy permissions. They feared 'Permission Creep' had left them vulnerable to data leakage.",
    execution: "We deployed automated scanners followed by a manual architectural review. We mapped every IAM role, policy, and security group. We found that the CI/CD pipeline had full administrative access to production databases.",
    findings: [
        { title: "Public S3 Bucket", severity: "Critical", desc: "A bucket containing customer PII backups was configured to allow public read access." },
        { title: "Over-permissive Roles", severity: "High", desc: "25% of IAM roles had '*' administrative privileges." },
        { title: "Unencrypted EBS Volumes", severity: "Medium", desc: "Production database snapshots were stored without encryption at rest." }
    ],
    technicalDetails: ["Tools: ScoutSuite, Prowler, AWS CLI", "Framework: CIS AWS Foundations Benchmark v1.4.0"]
  },
  {
    id: "OP-331",
    title: "Iron Perimeter",
    client: "Defense Contractor",
    type: "Physical Penetration Test",
    outcome: "Breached secure server room via social engineering in under 4 hours.",
    image: "https://picsum.photos/800/600?grayscale&random=4",
    date: "FEB 2024",
    duration: "1 Week",
    teamSize: 2,
    challenge: "The client needed to test the physical security controls of their new R&D facility, which housed classified schematics. The facility had armed guards and biometric scanners.",
    execution: "Operatives conducted surveillance for 2 days. We identified a smoking area where a side door was frequently propped open. Disguised as HVAC repair technicians, we tailgated an employee through the side entrance.",
    findings: [
        { title: "Tailgating Vulnerability", severity: "High", desc: "Staff did not challenge unknown persons entering behind them." },
        { title: "Unlocked Workstations", severity: "Critical", desc: "Once inside, we found multiple unlocked workstations with active sessions." },
        { title: "Server Room Access", severity: "Critical", desc: "The server room badge reader was vulnerable to a simple relay attack using a proxmark3." }
    ],
    technicalDetails: ["Tools: Proxmark3, Lockpicks, High-vis Vests", "Technique: Social Engineering, Badge Cloning"]
  }
];