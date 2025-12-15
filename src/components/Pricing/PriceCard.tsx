import React from "react";

type Plan = {
  name: string;
  price: string;
  subtitle?: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "Free for everyone",
    features: ["5 charts", "share anywhere", "limited AI use"],
    buttonText: "Get started with Free",
  },
  {
    name: "Plus",
    price: "$16 per user/month",
    subtitle: "-20%",
    features: [
      "custom colors",
      "remove Graphy logo",
      "unlimited charts",
      "unlimited AI features",
    ],
    buttonText: "Get started with Plus",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$36 per user/month",
    subtitle: "-20%",
    features: [
      "brand kits",
      "auto Google Sheets refresh",
      "password protected links",
    ],
    buttonText: "Get started with Business",
  },
];

const PricingCards: React.FC = () => {
  return (
    <div className="w-full mt-24">
        <div className=" flex flex-col text-center mt-24 w-[60%] mx-auto p-6 gap-4">
                <h2 className="text-center text-3xl font-bold">
                    Pricing
                </h2>
                <p className="text-sm ">
                    Use Graphy for free everywhere you want to share beautiful interactive charts. 
                    Upgrade for unlimited charts, unlimited AI use, and to remove the Graphy watermark.
                </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">        
        {plans.map((plan) => (
            <div
            key={plan.name}
            className={`w-full max-w-sm rounded-2xl border bg-white p-8 shadow-sm transition
                ${
                plan.highlighted
                    ? "border-blue-500 ring-2 ring-blue-500"
                    : "border-gray-200"
                }`}
            >
            {/* Header */}
            <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                {plan.price}
                </p>

                {plan.subtitle && (
                <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    {plan.subtitle}
                </span>
                )}
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                    <span className="mr-3 text-blue-500">✓</span>
                    {feature}
                </li>
                ))}
            </ul>

            {/* CTA */}
            <button
                className={`w-full rounded-xl py-3 text-sm font-medium transition
                ${
                    plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
            >
                {plan.buttonText}
            </button>
            </div>
        ))}
        </div>
    </div>
    
  );
};

export default PricingCards;
