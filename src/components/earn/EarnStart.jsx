import { Download } from "lucide-react";

const EarnStart = () => {
  const apkUrl =
    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk";

  return (
    <section
      className="w-full bg-[#150F0A]"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(255,140,0,0.08) 0%, #150F0A 60%)",
      }}
    >
      <div className="mx-auto w-full px-4 py-[60px] text-center sm:px-6 sm:py-[140px] lg:px-8">
        <div data-animate className="mx-auto max-w-[900px]">
          <h2 className="font-bold tracking-[-0.5px] text-[#F5F5F5] text-[28px] leading-[1.2] md:text-[40px] lg:text-[56px]">
            Start Earning with FINUX
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-[1.7] text-[#CBDA90] sm:text-[18px]">
            Join thousands of participants securing the network and earning
            rewards today.
          </p>

          <button
            type="button"
            className="earn-final-cta-button mx-auto mt-[36px] inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF8A00] px-6 py-4 text-[16px] font-semibold text-[#1A120B] transition duration-300 active:scale-[0.98] sm:mt-[50px] sm:w-auto sm:px-[42px] sm:py-[18px] sm:text-[18px]"
            onClick={() => window.open(apkUrl, "_blank", "noopener,noreferrer")}
          >
            <Download className="h-5 w-5" />
            <span>Download FINUX Wallet</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EarnStart;
