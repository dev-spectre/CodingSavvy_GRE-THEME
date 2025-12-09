import { Button } from "@/components/Button";
import {
  CourseFeaturesCard,
  InfoCard,
  TestimonialCard,
} from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";

export default function Home() {
  const tableData = [
    [
      "Placement Supreme - 6 month intensive flagship program.",
      "Placement assistance with mock interviews and job prep.",
    ],
    [
      "Internship Program with project-based learning.",
      "Real-world sprints, case studies, and portfolio building.",
    ],
    [
      "Java Full Stack, DevOps, and Mobile App Development tracks.",
      "Recorded sessions plus live support for every cohort.",
    ],
    [
      "Languages & stacks: C++, Java, TypeScript, JavaScript, Spring Boot, Next.js, Node.js.",
      "Free career mentorship and resume reviews.",
    ],
    ["MOU with 5+ colleges.", "1000+ students trained."],
    ["100+ students placed.", "Community support that continues after graduation."],
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section className="container mx-auto flex flex-wrap items-center justify-between px-5">
            <div className="font-roboto-flex relative isolate -ml-40 inline-block rounded-full bg-black/3 px-7.5 py-7.5 text-2xl font-[400]">
              <div className="inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                <div className="inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                  <div className="inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                    <div className="relative inline-block rounded-full bg-black/3 px-7.5 py-7.5">
                      <div className="flex h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-full">
                        <img
                          className="mt-[48%] w-[120%]"
                          src="/images/prof-punit.jpg"
                          alt="Prof. Punit"
                        />
                      </div>
                      <p className="absolute -right-15 bottom-14 z-10 inline-block rounded-full bg-white px-5 py-2 font-[600] text-[#505866]">
                        Prof. Punit
                      </p>
                    </div>
                    <p className="absolute top-37 -right-10 rounded-full bg-[#CCE5FE] px-3 py-2 text-[#16416B]">
                      1000+ learners trained
                    </p>
                  </div>
                  <p className="absolute bottom-15 left-50 inline-block min-w-72 rounded-full bg-[#EFF7E2] px-3 py-2 text-center text-[#3C6C26]">
                    Founder, Coding Savvy
                  </p>
                </div>
              </div>
              <p className="absolute top-10 left-35 rounded-full bg-[#F8EFE2] px-3 py-2 text-[#A1631C] capitalize">
                100+ students placed
              </p>
            </div>
            <div className="z-10 flex flex-grow justify-end">
              <LeadGenerationForm />
            </div>
          </section>
          <section id="about" className="container mx-auto mt-44 px-5 pb-5">
            <h2 className="font-roboto mb-20 text-4xl font-[900] text-[#1B438F] capitalize">
              Why choose Coding Savvy?
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-6 lg:min-h-[390px]">
              <InfoCard
                title="Placement Supreme"
                description="Flagship 6-month bootcamp with placement assistance."
                imgSrc="/images/chess-fill.svg"
              />
              <div className="self-end">
                <InfoCard
                  title="Career Mentorship"
                  description="Free mentorship, mock interviews, and resume support."
                  imgSrc="/images/star-badge.svg"
                />
              </div>
              <InfoCard
                title="Recorded + Live Learning"
                description="Recorded sessions plus live support and internship paths."
                imgSrc="/images/book-education.png"
              />
              <div className="self-end">
                <InfoCard
                  title="College Partnerships"
                  description="MOU with 5+ colleges; 1000+ learners and 100+ placements."
                  imgSrc="/images/money-bag.png"
                />
              </div>
            </div>
          </section>
        </div>
        <div id="courses" className="bg-gradient-to-b from-[#e7ecf4] to-[#bec9df] px-5">
          <div className="container mx-auto flex min-h-[100vh] items-center justify-center py-10">
            <CourseFeaturesCard />
          </div>
        </div>
        <section className="container mx-auto px-5 pt-21">
          <table className="w-full text-[#1F1D39]">
            <thead>
              <tr>
                <th className="font-roboto pb-8 text-start text-4xl font-[900] text-[#1B438F]">
                  Programs & Tracks
                </th>
                <th className="font-roboto pb-8 text-start text-4xl font-[900] text-[#1B438F]">
                  Career Outcomes
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, key) => (
                <tr key={key} className="divide-x divide-[#1B438F33]">
                  {row.map((data, i) => (
                    <td
                      key={`${data}-${i}`}
                      className="border-y border-y-[#1B438F33] px-2.5 py-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                        <p>{data}</p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <td className="py-8 pr-2.5 text-white">
                  <Button label="Apply now" />
                </td>
                <td className="py-6 pl-2.5">
                  <Button label="Download brochure" bgColor="#fff" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <section
        id="testimonials"
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c4490] to-[#0f2247] pt-25 pb-38"
      >
        <div className="absolute bottom-10 left-0 -translate-x-[90%] scale-[0.95]">
          <TestimonialCard
            imgSrc="/images/victoria.jpg"
            title="Career-ready in 6 months"
            description="Placement Supreme kept me accountable and made interviews feel effortless."
            greScore="SWE offer @ FinTech Co."
            designation="Software Engineer"
            name="Ananya Sharma"
            linkedin=""
          />
        </div>
        <TestimonialCard
          imgSrc="/images/victoria.jpg"
          title="From campus to offer letter"
          description="Coding Savvy's mentorship and mock interviews helped me land my first dev role."
          greScore="Placed @ product startup"
          designation="Full Stack Developer"
          name="Rohan Verma"
          linkedin=""
          caption={true}
        />
        <div className="absolute right-0 bottom-10 translate-x-[90%] scale-[0.95]">
          <TestimonialCard
            imgSrc="/images/victoria.jpg"
            title="Hands-on learning that translates to jobs"
            description="The projects and recorded sessions meant I could learn anytime and still ship."
            greScore="Offer @ SaaS company"
            designation="Mobile Developer"
            name="Mehak Singh"
            linkedin=""
          />
        </div>
      </section>
    </>
  );
}
