import { CompaniesGrid } from "./companies-grid";
import { Hero } from "./Hero";

export const Container = () => {
  return (
    <div className="bg-background relative top-[87px] m-auto w-5xl border-x border-t-1 border-x-neutral-700/60 border-t-neutral-700/60">
      <Hero></Hero>
      <CompaniesGrid></CompaniesGrid>
    </div>
  );
};
