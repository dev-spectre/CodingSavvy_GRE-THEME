import { ButtonLink } from "./Button";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export function InfoCard({ title, description, imgSrc }: InfoCardProps) {
  return (
    <section className="max-w-[263px] rounded-xl bg-white px-2.5 py-4 text-center capitalize shadow-lg transition-transform ease-in hover:scale-105 xl:px-4 xl:py-6">
      <h3 className="text-card-base-0 font-[400]">{title}</h3>
      <img
        className="mx-auto my-4 aspect-square max-h-20 w-[60%] max-w-20 rounded-full border-2 border-[#FF9053] px-3 py-3 sm:my-10 sm:h-[100px] sm:w-[100px]"
        src={imgSrc}
        alt=""
      />
      <p className="text-card-xs-0 font-[300] text-balance">{description}</p>
    </section>
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <article className="inline-block rounded-2xl bg-white px-6 py-6 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-8 sm:py-10 md:rounded-3xl md:px-24 md:py-12">
      {children}
    </article>
  );
}

export function CourseFeaturesCard() {
  const features = [
    "Placement Supreme - 6 month flagship with placement assistance.",
    "Internship Program with project-based learning.",
    "Java Full Stack Development curriculum.",
    "DevOps bootcamp covering CI/CD and cloud basics.",
    "Mobile App Development track.",
    "Languages: C++, Java, TypeScript, JavaScript, Spring Boot, Next.js, Node.js.",
    "Recorded sessions + live support and free career mentorship.",
    "MOU with 5+ colleges; 1000+ learners, 100+ placements.",
  ];

  return (
    <Card>
      <h2 className="text-xl-0 mb-3 text-center leading-tight font-[900] text-[#1B438F] uppercase">
        Coding Savvy Programs
      </h2>
      <p className="text-sm-0 sm:text-x text-center font-[600] text-pretty capitalize">
        Coding bootcamps built to get you job-ready
      </p>

      <ul className="my-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="mt-2 flex items-center gap-2.5 border-b border-b-[#1B438F80] pb-2"
          >
            <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
            <p className="text-sm-0 sm:text-bas text-[#211C37]">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="text-sm-0 text-white">
        <ButtonLink href="/#request-demo-form" label="Apply now" />
      </div>
    </Card>
  );
}

interface TestimonialCardProps {
  title: string;
  description: string;
  greScore: number | `${number}`;
  name: string;
  linkedin: string;
  designation: string;
  imgSrc: string;
}

export function TestimonialCard({
  title,
  description,
  greScore,
  name,
  designation,
  linkedin,
  imgSrc,
}: TestimonialCardProps) {
  return (
    <article className="isolate mt-2 grid w-[90%] max-w-4xl grid-cols-10 gap-3 rounded-2xl bg-white px-5 py-3 transition-all ease-in hover:scale-105 sm:gap-12 sm:px-8 sm:py-6 md:px-15 md:py-7 lg:px-12 lg:py-8">
      <div className="relative col-span-4">
        <img
          loading="lazy"
          className="absolute top-0 -left-5"
          src="/icons/quote.png"
          alt="quote"
        />
        <img
          loading="lazy"
          className="absolute top-[10%] h-[calc(90%+min(7vw,70px))] max-w-[100%] rounded-full object-cover"
          src={imgSrc}
          alt={name}
        />
      </div>
      <section className="col-span-6">
        <h3 className="text-card-base-1 mb-3 font-[800]">{title}</h3>
        <p className="text-card-xs-n1 mb-5 font-[400] text-[#626262] italic">
          {description}
        </p>
        <div className="mb-3.5 text-[#1B438F]">
          <p className="text-card-base-2 base mr-6 inline-block font-[900]">
            {greScore}/340
          </p>
          <a className="inline-block" href={linkedin} target="_blank">
            <img
              loading="lazy"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              src="/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
        <p className="text-card-xs-1 font-[900]">{name}</p>
        <p className="text-xs font-[500] text-[#108267] sm:text-sm md:text-base xl:text-lg">
          {designation}
        </p>
      </section>
    </article>
  );
}
