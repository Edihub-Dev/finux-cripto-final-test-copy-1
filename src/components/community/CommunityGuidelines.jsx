import { BadgeCheck, ShieldCheck, UserCheck, Users } from "lucide-react";

const guidelines = [
  {
    title: "One Wallet Per User",
    description:
      "Identity verification ensures fair distribution of rewards and voting power.",
    Icon: UserCheck,
  },
  {
    title: "Verified Participation Only",
    description:
      "Only users who have completed KYC/KYB can participate in governance.",
    Icon: BadgeCheck,
  },
  {
    title: "No Duplicate Accounts",
    description:
      "Sybil attacks and multi-accounting will result in an immediate ban.",
    Icon: ShieldCheck,
  },
  {
    title: "Fair & Ethical Participation",
    description: "We value long-term commitment over short-term speculation.",
    Icon: Users,
  },
];

const CommunityGuidelines = () => {
  return (
    <section className="relative overflow-hidden bg-[#20140B] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl border border-white/5 bg-[#1F1610] p-6 shadow-2xl lg:p-12">
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl opacity-40" />

          <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="text-center lg:col-span-1 lg:text-left">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Community Guidelines
              </h2>
              <p className="mx-auto max-w-sm text-lg leading-relaxed text-gray-400 lg:mx-0">
                We maintain a high standard for our community. Integrity is our
                currency.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                {guidelines.map(({ title, description, Icon }) => (
                  <article key={title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="mb-2 font-semibold text-white">{title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGuidelines;
