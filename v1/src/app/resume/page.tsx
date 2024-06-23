import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">🧑🏻‍💻</span>
      <Heading className="font-black">Resume</Heading>
      <Paragraph className="max-w-xl mt-4 mb-12">
        I&apos;m a Software Engineer that loves{" "}
        <Highlight>building solutions</Highlight> that can impact
        millions of lives I am keen to learn new tech and build as many projects as possible.
      </Paragraph>
      <WorkHistory />
      <TechStack />
    </Container>
  );
}
 